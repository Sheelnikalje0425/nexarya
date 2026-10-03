const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (/\.(tsx?|css|html|jsx?)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('8A6A14') || content.includes('8a6a14')) {
        content = content.replace(/#8A6A14/g, '#765406').replace(/#8a6a14/g, '#765406');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated:', fullPath);
      }
    }
  }
}

replaceInDir(path.resolve(__dirname, '..', 'src'));
console.log('Done updating gold text token.');
