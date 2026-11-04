#!/usr/bin/env python3
"""Import public-domain Kandinsky reproductions into a stable local archive.
Run once via the GitHub Actions workflow. Never replace a work with a different one.
"""
import hashlib, io, json, re
from pathlib import Path
from urllib.parse import urljoin
from PIL import Image, ImageOps
import requests
from bs4 import BeautifulSoup

ROOT = Path("verso-le-avanguardie")
DIR = ROOT / "assets" / "kandinsky"
DIR.mkdir(parents=True, exist_ok=True)
UA = "Mozilla/5.0 (compatible; MusurgiaMundiEducationalPreservation/1.0)"
sess = requests.Session()
sess.headers.update({"User-Agent": UA})
links = {
    "gnomus": [("file", "https://www.meisterdrucke.uk/kunstwerke/1260px/Wassily_Kandinsky_-_Bilder_einer_Ausstellung_Bild_II_Gnomus_-_%28MeisterDrucke-684875%29.jpg")],
    "vecchio-castello": [("file", "https://www.wassilykandinsky.net/images/works/324.jpg?v=75")],
    "bydlo": [("file", "https://www.meisterdrucke.uk/kunstwerke/1000px/Wassily%20Kandinsky%20-%20Bilder%20einer%20Ausstellung%20Bild%20VII%20Bydlo%20-%20%28MeisterDrucke-683258%29.jpg"),
              ("file", "https://www.wassilykandinsky.net/images/works/325.jpg?v=75")],
    "samuel-goldenberg": [("file", "https://www.wassilykandinsky.net/images/works/326.jpg?v=75")],
    "limoges": [("file", "https://www.wassilykandinsky.net/images/works/327.jpg?v=75")],
    "catacombe": [("file", "https://www.wassilykandinsky.net/images/works/328.jpg?v=75")],
    "baba-yaga": [("file", "https://www.centrepompidou.fr/media/picture/58/fa/58fa0e6716633f2a43505239291a0bcc/thumb_large.jpg"),
                  ("file", "https://www.wassilykandinsky.net/images/works/329.jpg?v=75")],
    "grande-porta-kiev": [("page", "https://www.wikiart.org/en/wassily-kandinsky/picture-xvi-the-great-gate-of-kiev-stage-set-for-mussorgsky-s-pictures-at-an-exhibition-in-1928"),
                          ("file", "https://www.meisterdrucke.com/kunstwerke/1260px/Wassily%20Kandinsky%20-%20Bilder%20einer%20Ausstellung%20Bild%20XVI%20Das%20groe%20Tor%20von%20-%20%28MeisterDrucke-683285%29.jpg")],
    "impression-iii": [("file", "https://commons.wikimedia.org/wiki/Special:FilePath/Wassily%20Kandinsky%20-%20Impression%20III%20(Concert)%20-%20Google%20Art%20Project.jpg?width=1000")],
}
def get(url, referer=None):
    hdr = {"Referer": referer} if referer else {}
    r = sess.get(url, headers=hdr, timeout=18, allow_redirects=True)
    r.raise_for_status()
    if not 3500 < len(r.content) < 15_000_000:
        raise RuntimeError("file size implausible")
    return r.content, r.url

def get_artwork(kind, url):
    if kind == "file":
        return get(url)
    r = sess.get(url, timeout=18)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, "html.parser")
    possible = []
    for sel, attr in [('meta[property="og:image"]', 'content'),
                      ('meta[name="twitter:image"]', 'content')]:
        tag = soup.select_one(sel)
        if tag and tag.get(attr):
            possible.append(urljoin(url, tag[attr]))
    for img in soup.select("img[src]"):
        if "wikiart.org" in img["src"]:
            possible.append(urljoin(url, img["src"]))
    for link in dict.fromkeys(possible):
        try:
            return get(link, url)
        except Exception as exc:
            print(" image candidate:", str(exc)[:130], flush=True)
    raise RuntimeError("no readable image on source page")

found = {}
for name, sources in links.items():
    print("Checking:", name, flush=True)
    for kind, source in sources:
        try:
            raw, actual = get_artwork(kind, source)
            with Image.open(io.BytesIO(raw)) as pic:
                pic.load()
                if min(pic.size) < 170:
                    raise RuntimeError("thumbnail too small")
                pic = ImageOps.exif_transpose(pic)
                pic.thumbnail((1280, 1280), Image.Resampling.LANCZOS)
                if pic.mode == "RGBA":
                    bg = Image.new("RGB", pic.size, "white")
                    bg.paste(pic, mask=pic.getchannel("A"))
                    pic = bg
                elif pic.mode != "RGB":
                    pic = pic.convert("RGB")
                out = DIR / (name + ".jpg")
                pic.save(out, "JPEG", quality=86, optimize=True, progressive=True)
            found[name] = (actual, out, hashlib.sha256(out.read_bytes()).hexdigest())
            print(" SAVED", out, out.stat().st_size, flush=True)
            break
        except Exception as exc:
            print(" unavailable", source, str(exc)[:120], flush=True)

page = ROOT / "quadri-in-movimento.html"
source = page.read_text(encoding="utf-8")
match = re.search(r"const scenes=(\[.*?\]);\s*const \$ = id", source, re.S)
if not match:
    raise RuntimeError("scene array not found")
scenes = json.loads(match.group(1))
assert len(scenes) == 15
# Promenades 1, 3, 5, 8 currently show *Couple Riding* (1906),
# which is NOT a Kandinsky stage design for Mussorgsky (1928).
# Scene 6 incorrectly points to figure sketches for Tableau XVI,
# not to Tuileries. NEVER import these substitutes as originals.
mapping = {2:"gnomus", 4:"vecchio-castello", 7:"bydlo",
           10:"samuel-goldenberg", 11:"limoges", 12:"catacombe",
           13:"catacombe", 14:"baba-yaga", 15:"grande-porta-kiev"}
for scene in scenes:
    key = mapping.get(scene["num"])
    if key not in found:
        continue
    local = "./assets/kandinsky/" + key + ".jpg"
    original = scene["img"]
    scene["fallbackImages"] = [x for x in dict.fromkeys([original] + scene.get("fallbackImages", [])) if x != local]
    scene["img"] = local
page.write_text(source[:match.start(1)] + json.dumps(scenes, ensure_ascii=False, separators=(",", ":")) + source[match.end(1):], encoding="utf-8")

if "impression-iii" in found:
    page = ROOT / "index.html"
    content = page.read_text(encoding="utf-8")
    old = "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Wassily_Kandinsky_-_Impression_III_%28Concert%29_-_Google_Art_Project.jpg/330px-Wassily_Kandinsky_-_Impression_III_%28Concert%29_-_Google_Art_Project.jpg"
    if content.count(old) == 1:
        page.write_text(content.replace(old, "./assets/kandinsky/impression-iii.jpg"), encoding="utf-8")

readme = ["# Kandinskij: immagini conservate localmente", "",
          "Opere di Wassily Kandinskij (1866–1944), in pubblico dominio in Italia.",
          "Riproduzioni ridimensionate; informazioni di provenienza e checksum SHA-256.",
          "La fotografia dello spettacolo contemporaneo del 2025 non è stata copiata.",
          "", "## Riproduzioni scaricate", ""]
for name, (url, file, digest) in sorted(found.items()):
    readme += ["- " + name + ": " + str(file) + " | " + url + " | SHA-256: " + digest]
readme += ["", "## Non recuperate", ""]
for name in links:
    if name not in found:
        readme.append("- " + name + " (collegamento esterno conservato)")
(DIR/"SOURCES.md").write_text("\n".join(readme) + "\n", encoding="utf-8")
for scene in scenes:
    if scene["img"].startswith("./assets/"):
        assert (ROOT / scene["img"][2:]).is_file(), scene["img"]
print("Downloaded:", len(found), "of", len(links), flush=True)
if not found:
    raise RuntimeError("No images downloaded: leave the existing site untouched.")
