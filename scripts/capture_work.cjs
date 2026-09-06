const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\mukan\\.gemini\\antigravity\\brain\\e75dc1a6-819e-4630-98f9-57cdc3672fda';

const captures = [
  { name: 'work_index_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/work' },
  { name: 'work_index_1024.png', width: 1024, height: 900, url: 'http://localhost:3000/work' },
  { name: 'work_index_390.png', width: 390, height: 844, url: 'http://localhost:3000/work' },
  { name: 'work_stemfusion_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/work/stemfusion' },
  { name: 'work_stemfusion_390.png', width: 390, height: 844, url: 'http://localhost:3000/work/stemfusion' },
  { name: 'work_railway_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/work/railway' },
  { name: 'work_railway_390.png', width: 390, height: 844, url: 'http://localhost:3000/work/railway' },
];

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  for (const item of captures) {
    console.log(`Capturing full page: ${item.name} (${item.width}x${item.height}) from ${item.url}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: item.width, height: item.height, deviceScaleFactor: 1 });
    
    await page.goto(item.url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Scroll down to trigger RevealOnScroll and load images
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 400;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 100);
      });
    });

    await new Promise(r => setTimeout(r, 1500));

    const outPath = path.join(artifactDir, item.name);
    await page.screenshot({ path: outPath, fullPage: true });
    
    const stats = fs.statSync(outPath);
    console.log(`Saved: ${outPath} (${stats.size} bytes)`);
    await page.close();
  }

  await browser.close();
  console.log('All case study screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
