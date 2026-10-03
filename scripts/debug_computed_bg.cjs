const puppeteer = require('puppeteer-core');
const http = require('http');
const path = require('path');
const fs = require('fs');

const distPath = path.resolve(__dirname, '..', 'dist');
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png'
};

const server = http.createServer((req, res) => {
  const cleanUrl = req.url.split('?')[0];
  let filePath = path.join(distPath, cleanUrl);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
    return;
  }
  const indexPath = path.join(distPath, 'index.html');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(indexPath).pipe(res);
});

server.listen(3001, async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new'
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle0' });
  
  const debugInfo = await page.evaluate(() => {
    const span = document.querySelector('header nav a span');
    const path = [];
    let cur = span;
    while (cur) {
      const s = window.getComputedStyle(cur);
      path.push({
        tag: cur.tagName,
        id: cur.id,
        className: cur.className,
        bg: s.backgroundColor
      });
      cur = cur.parentElement;
    }
    return {
      spanText: span ? span.innerText : null,
      header: !!document.querySelector('header'),
      spanClosestHeader: span ? !!span.closest('header') : null,
      path
    };
  });
  
  console.log('DEBUG INFO:', JSON.stringify(debugInfo, null, 2));
  await browser.close();
  server.close();
});
