const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\mukan\\.gemini\\antigravity\\brain\\e75dc1a6-819e-4630-98f9-57cdc3672fda\\frozen_qa_screenshots';

if (!fs.existsSync(artifactDir)) {
  fs.mkdirSync(artifactDir, { recursive: true });
}

const items = [
  { name: '01_homepage_390.png', width: 390, height: 844, url: 'http://localhost:3000/' },
  { name: '02_homepage_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/' },
  { name: '03_work_390.png', width: 390, height: 844, url: 'http://localhost:3000/work' },
  { name: '04_work_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/work' },
  { name: '05_solutions_390.png', width: 390, height: 844, url: 'http://localhost:3000/solutions' },
  { name: '06_solutions_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/solutions' },
  { name: '07_custom_software_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/solutions/custom-software' },
  { name: '08_process_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/process' },
  { name: '09_about_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/about' },
  { name: '10_insights_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/insights' },
  { name: '11_contact_1440.png', width: 1440, height: 900, url: 'http://localhost:3000/contact' },
];

async function run() {
  console.log('Launching browser for Frozen QA captures...');
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  for (const item of items) {
    const outPath = path.join(artifactDir, item.name);
    console.log(`Capturing ${item.name} (${item.width}x${item.height}) from ${item.url}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: item.width, height: item.height, deviceScaleFactor: 1 });
    
    await page.goto(item.url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Gradual scroll down to reveal animations and lazy images
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
        }, 70);
      });
    });

    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`✓ Saved ${item.name}`);
    await page.close();
  }

  await browser.close();
  console.log('All 11 captures completed successfully.');
}

run().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
