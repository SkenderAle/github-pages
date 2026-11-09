#!/usr/bin/env python3
"""Flaminio Online metadata-link discovery for Musurgia Atlantis.

Default run discovers a limited set of composer index links, WITHOUT copying
biographies, guide text, catalogue tables, or whole-work descriptions.
Do not use for bulk harvesting unless access terms/permissions are confirmed.

Usage:
  python scripts/import_flaminio_links.py --max-composers 8 --output /tmp/flaminio.json

Requires: pip install requests beautifulsoup4
"""
import argparse
import json
import re
import time
from datetime import datetime, timezone
from urllib.parse import urljoin, urlparse, urldefrag
from urllib.robotparser import RobotFileParser

import requests
from bs4 import BeautifulSoup

BASE = "https://www.flaminioonline.it/"
INDEX = urljoin(BASE, "Biografie/biografie.html")
AGENT = "MusurgiaAtlantisMetadataLinkAudit/0.1 (+https://musurgiamundi.com/)"
LINK_KINDS = [
    ("biografia", ("biografia",)),
    ("catalogo_per_generi", ("diviso per generi", "per generi musicali")),
    ("catalogo_cronologico", ("cronologico", "ordine di data")),
    ("catalogo", ("catalogo", "composizioni", "edizioni strumentali")),
    ("guida", ("guide all'ascolto", "guida all'ascolto")),
]


def clean(s):
    return re.sub(r"\s+", " ", s or "").strip()


def same_site(url):
    return urlparse(url).scheme == "https" and urlparse(url).hostname == "www.flaminioonline.it"


def classify(label):
    s = clean(label).casefold()
    for kind, patterns in LINK_KINDS:
        if any(pattern in s for pattern in patterns):
            return kind
    return None


def check_robots(session):
    url = urljoin(BASE, "robots.txt")
    try:
        response = session.get(url, timeout=12)
    except requests.RequestException as exc:
        raise RuntimeError(f"robots.txt inaccessible; stopping safely: {exc}") from exc
    if response.status_code == 404:
        # Absence is not a grant of content-republication rights.
        return RobotFileParser(), "not_published"
    if response.status_code != 200:
        raise RuntimeError(f"robots.txt HTTP {response.status_code}; stopping")
    rp = RobotFileParser()
    rp.parse(response.text.splitlines())
    if not rp.can_fetch(AGENT, INDEX) or not rp.can_fetch("*", INDEX):
        raise RuntimeError("Composer index disallowed by robots.txt")
    return rp, "fetched"


def composer_sections(soup):
    """Extract heading-bounded composer link groups; no prose."""
    for header in soup.find_all(["h2", "h3", "h4"]):
        name = clean(header.get_text(" ", strip=True))
        if not name or len(name) > 130:
            continue
        if not ("," in name or name.isupper()):
            continue
        entries = []
        for el in header.next_elements:
            if el is not header and getattr(el, "name", None) in ("h2", "h3", "h4"):
                break
            if getattr(el, "name", None) != "a":
                continue
            href = el.get("href")
            if not href:
                continue
            target = urldefrag(urljoin(INDEX, href))[0]
            kind = classify(el.get_text(" ", strip=True))
            if same_site(target) and kind:
                entry = {"kind": kind, "url": target}
                if entry not in entries:
                    entries.append(entry)
        if entries:
            yield {"display_name": name, "links": entries,
                   "source_index_url": INDEX, "identity_status": "unreconciled",
                   "atlantis_person_id": None}


def fallback_biography_sections(soup):
    """Fallback using biography anchor and nearest preceding headings."""
    seen = set()
    for a in soup.find_all("a", href=True):
        if classify(a.get_text(" ", strip=True)) != "biografia":
            continue
        section = a.find_previous(["h2", "h3", "h4"])
        name = clean(section.get_text(" ", strip=True)) if section else None
        if not name or name in seen:
            continue
        seen.add(name)
        links = []
        for sibling in a.parent.parent.find_all("a", href=True) if a.parent and a.parent.parent else [a]:
            kind = classify(sibling.get_text(" ", strip=True))
            dest = urldefrag(urljoin(INDEX, sibling["href"]))[0]
            if kind and same_site(dest):
                links.append({"kind": kind, "url": dest})
        if links:
            yield {"display_name": name, "links": links,
                   "source_index_url": INDEX, "identity_status": "unreconciled",
                   "atlantis_person_id": None}


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--max-composers", type=int, default=8)
    p.add_argument("--delay", type=float, default=3.0)
    p.add_argument("--output", required=True)
    args = p.parse_args()
    if not (1 <= args.max_composers <= 30) or args.delay < 2:
        p.error("Use 1–30 composers and at least 2 seconds per request")
    session = requests.Session()
    session.headers.update({"User-Agent": AGENT, "Accept": "text/html"})
    robots, robot_status = check_robots(session)
    # Single index request. Additional catalogue/guide fetching is intentionally
    # disabled pending explicit access review and a separate parser audit.
    if robot_status == "fetched" and not robots.can_fetch(AGENT, INDEX):
        raise RuntimeError("Robots disallow index")
    response = session.get(INDEX, timeout=20)
    response.raise_for_status()
    if not same_site(response.url):
        raise RuntimeError("Unexpected redirect to external host")
    soup = BeautifulSoup(response.text, "html.parser")
    found = list(composer_sections(soup))
    if not found:
        found = list(fallback_biography_sections(soup))
    if not found:
        raise RuntimeError("No composers parsed; inspect current site HTML, don't write empty success")
    rows = found[:args.max_composers]
    output = {
        "schema": "atlantis-flaminio-composer-links-v1",
        "date": datetime.now(timezone.utc).isoformat(),
        "status": "link_discovery_only_not_catalogue_import",
        "source": INDEX,
        "robots_check": robot_status,
        "count": len(rows),
        "composers": rows,
        "rights": "External link metadata only. No biographical prose or guide text copied.",
        "needs": ["manual_review_of_parser", "identity_reconciliation", "work_catalogue_import_permission_check"],
    }
    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Wrote {len(rows)} composer link records to {args.output}")


if __name__ == "__main__":
    main()
