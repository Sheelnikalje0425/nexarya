const puppeteer = require('puppeteer-core');
const path = require('path');
const express = require('express');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

function startStaticServer(port = 3000) {
  return new Promise((resolve) => {
    const app = express();
    const distPath = path.join(__dirname, '..', 'dist');
    app.use(express.static(distPath));
    app.use((req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
    const server = app.listen(port, () => resolve(server));
  });
}

async function debugOverflow() {
  const server = await startStaticServer(3001);
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 360, height: 740, deviceScaleFactor: 1 });

  const routes = ['/', '/solutions', '/work', '/about', '/contact', '/insights'];

  for (const r of routes) {
    console.log(`\n=== Checking Route at 360px: ${r} ===`);
    await page.goto(`http://localhost:3001${r}`, { waitUntil: 'networkidle0' });

    const overflowInfo = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth;
      const winW = window.innerWidth;
      const bodyW = document.body.scrollWidth;

      const overflowing = [];
      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > winW + 1) {
          overflowing.push({
            tag: el.tagName,
            id: el.id,
            className: el.className ? el.className.toString() : '',
            text: el.innerText ? el.innerText.trim().slice(0, 40) : '',
            rectRight: rect.right,
            rectWidth: rect.width,
            parentTag: el.parentElement ? el.parentElement.tagName : ''
          });
        }
      });
      return { docW, bodyW, winW, overflowing: overflowing.slice(0, 10) };
    });

    console.log(`DocWidth: ${overflowInfo.docW} | WinWidth: ${overflowInfo.winW} | Overflowing count: ${overflowInfo.overflowing.length}`);
    overflowInfo.overflowing.forEach((o, i) => {
      console.log(`  ${i+1}. <${o.tag} id="${o.id}" class="${o.className.slice(0, 60)}"> rectRight=${o.rectRight}, rectWidth=${o.rectWidth}, text="${o.text}"`);
    });
  }

  await browser.close();
  server.close();
}

debugOverflow().catch(console.error);
