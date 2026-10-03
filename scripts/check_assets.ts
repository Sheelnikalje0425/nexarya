import fs from "fs";
import path from "path";

const SRC_DIR = "src";
const PUBLIC_DIR = "public";

function getFiles(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, exts));
    } else {
      if (exts.some(ext => file.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const srcFiles = getFiles(SRC_DIR, [".tsx", ".ts", ".jsx", ".js", ".css"]);
const referencedAssets = new Set();

const assetRegexes = [
  /["'](\/(?:media|projects|brand|hero|engineering|icons|favicon)[^"'\s>]+)["']/g,
  /url\(["']?(\/(?:media|projects|brand|hero|engineering|icons|favicon)[^"')\s]+)["']?\)/g
];

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, "utf-8");
  assetRegexes.forEach(regex => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      referencedAssets.add({ asset: match[1], file });
    }
  });
});

console.log("=== CHECKING REFERENCED ASSETS IN PUBLIC DIRECTORY ===");
let missingCount = 0;
const uniqueAssets = Array.from(new Set(Array.from(referencedAssets).map(a => a.asset)));

uniqueAssets.forEach(asset => {
  const cleanPath = asset.split("?")[0].split("#")[0];
  const fullPath = path.join(PUBLIC_DIR, cleanPath);
  const exists = fs.existsSync(fullPath);
  if (!exists) {
    const refs = Array.from(referencedAssets).filter(a => a.asset === asset).map(a => a.file);
    console.log(`[MISSING] ${asset} (referenced in: ${refs.join(", ")})`);
    missingCount++;
  } else {
    console.log(`[OK] ${asset}`);
  }
});

console.log(`\nTotal assets checked: ${uniqueAssets.length} | Missing: ${missingCount}`);
