const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\mukan\\.gemini\\antigravity\\brain\\e75dc1a6-819e-4630-98f9-57cdc3672fda\\slider_qa_screenshots';

if (!fs.existsSync(artifactDir)) {
  fs.mkdirSync(artifactDir, { recursive: true });
}

const viewports = [
  { name: 'slider_desktop_1440_slide1.png', width: 1440, height: 900, slide: 0 },
  { name: 'slider_desktop_1440_slide2.png', width: 1440, height: 900, slide: 1 },
  { name: 'slider_tablet_1024.png', width: 1024, height: 800, slide: 0 },
  { name: 'slider_tablet_768.png', width: 768, height: 1024, slide: 0 },
  { name: 'slider_mobile_390_slide1.png', width: 390, height: 844, slide: 0 },
  { name: 'slider_mobile_390_slide2.png', width: 390, height: 844, slide: 1 },
  { name: 'slider_mobile_375.png', width: 375, height: 667, slide: 0 },
];

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle0' });

    await page.evaluate(() => {
      document.querySelector('#feedback')?.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 400));

    if (vp.slide === 1) {
      await page.evaluate(() => {
        const nextBtn = document.querySelector('button[aria-label="Next Testimonial"]');
        nextBtn?.click();
      });
      await new Promise(r => setTimeout(r, 600));
    }

    const feedbackSection = await page.$('#feedback');
    const outPath = path.join(artifactDir, vp.name);
    if (feedbackSection) {
      await feedbackSection.screenshot({ path: outPath });
      console.log(`Captured ${vp.name}`);
    }
    await page.close();
  }

  // Also capture About page feedback section
  const aboutPage = await browser.newPage();
  await aboutPage.setViewport({ width: 1440, height: 1200 });
  await aboutPage.goto('http://127.0.0.1:3000/about#feedback', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  const aboutFeedback = await aboutPage.$('#feedback');
  if (aboutFeedback) {
    await aboutFeedback.screenshot({ path: path.join(artifactDir, 'about_feedback_1440.png') });
    console.log('Captured about_feedback_1440.png');
  }
  await aboutPage.close();

  await browser.close();
}

capture();
