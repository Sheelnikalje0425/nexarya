const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\mukan\\.gemini\\antigravity\\brain\\e75dc1a6-819e-4630-98f9-57cdc3672fda';

const viewports = [
  { name: 'workbench_desktop_1440.png', width: 1440, height: 900 },
  { name: 'workbench_tablet_1024.png', width: 1024, height: 900 },
  { name: 'workbench_mobile_390.png', width: 390, height: 844 },
];

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  for (const vp of viewports) {
    console.log(`Capturing full page: ${vp.name} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Scroll down gradually to trigger all RevealOnScroll observers and load all images
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

    // Wait for smooth animations and font decodes
    await new Promise(r => setTimeout(r, 2000));

    const outPath = path.join(artifactDir, vp.name);
    await page.screenshot({ path: outPath, fullPage: true });
    
    const stats = fs.statSync(outPath);
    console.log(`Saved: ${outPath} (${stats.size} bytes)`);
    await page.close();
  }

  await browser.close();
  console.log('All full-page screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
