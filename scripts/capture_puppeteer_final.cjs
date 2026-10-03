const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\mukan\\.gemini\\antigravity\\brain\\e75dc1a6-819e-4630-98f9-57cdc3672fda\\final_qa_screenshots';

if (!fs.existsSync(artifactDir)) {
  fs.mkdirSync(artifactDir, { recursive: true });
}

const pagesToCapture = [
  { slug: '01_homepage', url: 'http://localhost:3000/' },
  { slug: '02_work', url: 'http://localhost:3000/work' },
  { slug: '03_stemfusion', url: 'http://localhost:3000/work/stemfusion' },
  { slug: '04_railway', url: 'http://localhost:3000/work/railway-concession-management' },
  { slug: '05_solutions', url: 'http://localhost:3000/solutions' },
  { slug: '06_custom_software', url: 'http://localhost:3000/solutions/custom-software' },
  { slug: '07_process', url: 'http://localhost:3000/process' },
  { slug: '08_about', url: 'http://localhost:3000/about' },
  { slug: '09_insights', url: 'http://localhost:3000/insights' },
  { slug: '10_contact', url: 'http://localhost:3000/contact' }
];

const viewports = [
  { name: '1440', width: 1440, height: 900 },
  { name: '390', width: 390, height: 844 }
];

async function captureAll() {
  console.log('Launching Edge Puppeteer...');
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  for (const pageItem of pagesToCapture) {
    for (const vp of viewports) {
      const fileName = `${pageItem.slug}_${vp.name}.png`;
      const outPath = path.join(artifactDir, fileName);
      console.log(`[Capture] ${fileName} (${vp.width}x${vp.height}) -> ${pageItem.url}`);

      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });

      try {
        await page.goto(pageItem.url, { waitUntil: 'networkidle0', timeout: 20000 });

        // Scroll down gradually
        await page.evaluate(async () => {
          await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 350;
            const timer = setInterval(() => {
              const scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;
              if (totalHeight >= scrollHeight) {
                clearInterval(timer);
                window.scrollTo(0, 0);
                resolve();
              }
            }, 80);
          });
        });

        await new Promise(r => setTimeout(r, 600));
        await page.screenshot({ path: outPath, fullPage: true });
        console.log(`✓ Saved ${fileName}`);
      } catch (err) {
        console.error(`✗ Error on ${fileName}:`, err.message);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
  console.log('All captures finished.');
}

captureAll().catch(e => {
  console.error('Fatal capture error:', e);
  process.exit(1);
});
