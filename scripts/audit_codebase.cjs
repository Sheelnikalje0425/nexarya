const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function getAllFiles(dir, exts = ['.tsx', '.ts', '.css']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, exts));
    } else {
      if (exts.includes(path.extname(fullPath))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = getAllFiles(srcDir);

console.log("=== 1. AUDIT: ALL REMAINING USES OF MONOSPACE (font-mono) ===");
const monoUsages = [];

files.forEach(file => {
  const relPath = path.relative(path.join(__dirname, '..'), file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('font-mono')) {
      monoUsages.push({
        file: relPath,
        line: idx + 1,
        text: line.trim()
      });
    }
  });
});

console.log(`Found ${monoUsages.length} occurrences of font-mono across the codebase:`);
monoUsages.forEach(u => {
  console.log(`[${u.file}:${u.line}] ${u.text}`);
});

console.log("\n=== 2. AUDIT: GOLD-COLOURED TEXT ON CREAM / LIGHT BACKGROUNDS ===");
const goldUsages = [];

const goldPatterns = [
  'text-[#C59A3D]',
  'text-[#E0BD68]',
  'text-[#D4A72C]',
  'text-[#8A6A14]',
  'text-[var(--gold)]',
  'text-[var(--gold-text)]',
  'text-gold'
];

files.forEach(file => {
  const relPath = path.relative(path.join(__dirname, '..'), file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    goldPatterns.forEach(pattern => {
      if (line.includes(pattern)) {
        goldUsages.push({
          file: relPath,
          line: idx + 1,
          pattern: pattern,
          text: line.trim()
        });
      }
    });
  });
});

console.log(`Found ${goldUsages.length} gold text occurrences:`);
goldUsages.forEach(u => {
  console.log(`[${u.file}:${u.line}] (${u.pattern}) ${u.text}`);
});
