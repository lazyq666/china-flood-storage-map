#!/usr/bin/env node
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const privateLink=/https?:\/\/chatgpt\.com\/(?:g\/[^\s"'<>]*\/c\/|c\/)[^\s"'<>]+/i;
let removed=0;
function clean(v){
 if(typeof v==='string'){if(!privateLink.test(v))return v;removed++;return v.replace(new RegExp(privateLink.source,'gi'),'本机研究记录');}
 if(Array.isArray(v))return v.filter(x=>{const skip=typeof x==='string'&&privateLink.test(x)||x&&typeof x==='object'&&typeof x.url==='string'&&privateLink.test(x.url);if(skip)removed++;return !skip;}).map(clean);
 if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>{if(/url$/i.test(k)&&typeof x==='string'&&privateLink.test(x)){removed++;return [k,null];}return [k,clean(x)];}));
 return v;
}
for(const [file,key]of [['data/location-boundaries.js','FLOOD_STORAGE_LOCATION_BOUNDARIES'],['data/location-evidence.js','FLOOD_STORAGE_LOCATION_EVIDENCE']]){
 const filename=path.join(root,file),context={window:{}};vm.runInNewContext(fs.readFileSync(filename,'utf8'),context);const p=clean(JSON.parse(JSON.stringify(context.window[key])));
 if(p.summary?.supportingSourceCounts)p.summary.supportingSourceCounts=Object.values(p.zones).reduce((a,z)=>{const n=z.governmentSources.filter(s=>s.supportsLocation).length;a[n]=(a[n]||0)+1;return a;},{});
 fs.writeFileSync(filename,`(function () {\n  "use strict";\n  const payload = ${JSON.stringify(p,null,2)};\n  window.${key} = Object.freeze({ ...payload, zones: Object.freeze(payload.zones) });\n})();\n`);
}
console.log(`Removed ${removed} private source-link occurrences. Existing Git history is unchanged.`);
