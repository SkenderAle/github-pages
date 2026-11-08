"use strict";
const assert=require("node:assert/strict");
const path=require("node:path");
const {createLegacyRelationSentenceAdapter,SOURCE_BLOB_SHA,SNAPSHOT_BLOB_SHA}=require("./ADAPTER_RELATIONSENTENCE_FASE2M_2026-11-08.cjs");
const fixtures=require("./FIXTURE_RELATIONSENTENCE_FASE2M_2026-11-08.json");
assert.equal(SOURCE_BLOB_SHA,fixtures.source_renderer_sha);
assert.equal(SNAPSHOT_BLOB_SHA,fixtures.snapshot_sha);
const renderer=createLegacyRelationSentenceAdapter();
let passed=0;
for(const entry of fixtures.cases){
 const e=entry.edge;
 assert.equal(renderer.render(e,entry.perspective_source),entry.expected_forward,entry.stage_id+" forward");
 assert.equal(renderer.render(e,entry.perspective_target),entry.expected_reverse,entry.stage_id+" reverse");
 assert.equal(renderer.render(e),entry.expected_forward,entry.stage_id+" default");
 passed++;
}
console.log("Fase 2M: "+passed+"/"+fixtures.cases.length+" casi, "+(passed*3)+"/"+(fixtures.cases.length*3)+" assert PASS");
