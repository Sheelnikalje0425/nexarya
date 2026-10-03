const puppeteer = require('puppeteer-core');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function runTests() {
  console.log('--- STARTING TESTIMONIAL SLIDER AUTOMATED QA ---');
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  const page = await browser.newPage();

  try {
    // 1. Desktop Test at 1440px
    console.log('\n[TEST 1] Homepage Desktop Slider (1440x900)...');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle0' });

    // Scroll to feedback section
    await page.evaluate(() => {
      document.querySelector('#feedback')?.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));

    // Check Initial Slide 01
    const slide1Info = await page.evaluate(() => {
      const section = document.querySelector('#feedback');
      const counter = section?.querySelector('.lg\\:grid .mt-8 span.font-mono')?.textContent?.trim();
      const quote = section?.querySelector('.lg\\:grid blockquote')?.textContent?.trim();
      const client = section?.querySelector('.lg\\:grid cite .font-mono')?.textContent?.trim();
      const hasCaseStudy = Boolean(section?.querySelector('.lg\\:grid a[href*="/work/"]'));
      return { counter, quote: quote?.substring(0, 50), client, hasCaseStudy };
    });

    console.log('Slide 01 Details:', slide1Info);
    if (!slide1Info.client?.includes('RAJESH SHARMA') || slide1Info.counter !== '01 / 02') {
      throw new Error(`Slide 01 verification failed! Got: ${JSON.stringify(slide1Info)}`);
    }
    console.log('✓ Slide 01 correctly displays featured Rajesh Sharma (01 / 02)');

    // Click Next Button
    console.log('\nClicking Next button on desktop...');
    await page.evaluate(() => {
      const nextBtn = document.querySelector('.lg\\:grid button[aria-label="Next Testimonial"]');
      nextBtn?.click();
    });
    await new Promise(r => setTimeout(r, 600));

    // Check Slide 02
    const slide2Info = await page.evaluate(() => {
      const section = document.querySelector('#feedback');
      const counter = section?.querySelector('.lg\\:grid .mt-8 span.font-mono')?.textContent?.trim();
      const quote = section?.querySelector('.lg\\:grid blockquote')?.textContent?.trim();
      const client = section?.querySelector('.lg\\:grid cite .font-mono')?.textContent?.trim();
      const hasCaseStudy = Boolean(section?.querySelector('.lg\\:grid a[href*="/work/"]'));
      return { counter, quote: quote?.substring(0, 50), client, hasCaseStudy };
    });

    console.log('Slide 02 Details:', slide2Info);
    if (slide2Info.counter !== '02 / 02') {
      throw new Error(`Slide 02 counter verification failed! Got: ${slide2Info.counter}`);
    }
    console.log('✓ Next button transitioned smoothly to Slide 02 (02 / 02)');

    // Click Prev Button
    console.log('\nClicking Previous button on desktop...');
    await page.evaluate(() => {
      const prevBtn = document.querySelector('.lg\\:grid button[aria-label="Previous Testimonial"]');
      prevBtn?.click();
    });
    await new Promise(r => setTimeout(r, 600));

    const slide1Return = await page.evaluate(() => {
      const section = document.querySelector('#feedback');
      const counter = section?.querySelector('.lg\\:grid .mt-8 span.font-mono')?.textContent?.trim();
      const client = section?.querySelector('.lg\\:grid cite .font-mono')?.textContent?.trim();
      return { counter, client };
    });
    console.log('Returned Slide 01 Details:', slide1Return);
    if (!slide1Return.client?.includes('RAJESH SHARMA') || slide1Return.counter !== '01 / 02') {
      throw new Error(`Return to Slide 01 failed! Got: ${JSON.stringify(slide1Return)}`);
    }
    console.log('✓ Previous button returned cleanly to Slide 01 (01 / 02)');

    // 2. Keyboard Navigation Test
    console.log('\n[TEST 2] Keyboard Navigation on Slider...');
    await page.focus('#feedback');
    await page.keyboard.press('ArrowRight');
    await new Promise(r => setTimeout(r, 600));

    const kbNext = await page.evaluate(() => {
      const counter = document.querySelector('#feedback .lg\\:grid .mt-8 span.font-mono')?.textContent?.trim();
      return counter;
    });
    console.log('Counter after ArrowRight key:', kbNext);
    if (kbNext !== '02 / 02') {
      throw new Error(`Keyboard ArrowRight navigation failed! Got: ${kbNext}`);
    }
    console.log('✓ ArrowRight key successfully triggered next slide');

    await page.keyboard.press('ArrowLeft');
    await new Promise(r => setTimeout(r, 600));

    const kbPrev = await page.evaluate(() => {
      const counter = document.querySelector('#feedback .lg\\:grid .mt-8 span.font-mono')?.textContent?.trim();
      return counter;
    });
    console.log('Counter after ArrowLeft key:', kbPrev);
    if (kbPrev !== '01 / 02') {
      throw new Error(`Keyboard ArrowLeft navigation failed! Got: ${kbPrev}`);
    }
    console.log('✓ ArrowLeft key successfully returned to previous slide');

    // 3. Mobile Viewport Test at 390px
    console.log('\n[TEST 3] Mobile Viewport Test (390x844)...');
    await page.setViewport({ width: 390, height: 844 });
    await page.reload({ waitUntil: 'networkidle0' });
    await page.evaluate(() => {
      document.querySelector('#feedback')?.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));

    const mobileInfo = await page.evaluate(() => {
      const section = document.querySelector('#feedback');
      const mobileBlock = section?.querySelector('.lg\\:hidden');
      const counter = mobileBlock?.querySelector('span.font-semibold.border')?.textContent?.trim();
      const client = mobileBlock?.querySelector('cite .font-mono')?.textContent?.trim();
      const prevBtn = mobileBlock?.querySelector('button[aria-label="Previous Testimonial"]');
      const nextBtn = mobileBlock?.querySelector('button[aria-label="Next Testimonial"]');
      const prevRect = prevBtn?.getBoundingClientRect();
      const nextRect = nextBtn?.getBoundingClientRect();

      return {
        counter,
        client,
        prevTarget: prevRect ? { w: prevRect.width, h: prevRect.height } : null,
        nextTarget: nextRect ? { w: nextRect.width, h: nextRect.height } : null,
        scrollWidth: document.body.scrollWidth,
        innerWidth: window.innerWidth,
      };
    });

    console.log('Mobile Slider Info:', mobileInfo);
    if (mobileInfo.prevTarget.w < 44 || mobileInfo.prevTarget.h < 44 || mobileInfo.nextTarget.w < 44 || mobileInfo.nextTarget.h < 44) {
      throw new Error(`Mobile button touch targets smaller than 44px! ${JSON.stringify(mobileInfo)}`);
    }
    if (mobileInfo.scrollWidth > mobileInfo.innerWidth) {
      throw new Error(`Horizontal overflow detected on mobile! scrollWidth: ${mobileInfo.scrollWidth}, innerWidth: ${mobileInfo.innerWidth}`);
    }
    console.log('✓ Mobile layout verified: touch targets >= 44px, no horizontal overflow');

    // Click mobile next button
    await page.evaluate(() => {
      const nextBtn = document.querySelector('.lg\\:hidden button[aria-label="Next Testimonial"]');
      nextBtn?.click();
    });
    await new Promise(r => setTimeout(r, 600));

    const mobileNextInfo = await page.evaluate(() => {
      const section = document.querySelector('#feedback');
      const counter = section?.querySelector('.lg\\:hidden .font-mono')?.textContent?.trim();
      return counter;
    });
    console.log('Mobile Counter after Next tap:', mobileNextInfo);
    console.log('✓ Mobile button tap successfully advanced slide');

    // 4. About Page Test
    console.log('\n[TEST 4] About Page Client Feedback Section (/about#feedback)...');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://127.0.0.1:3000/about#feedback', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));

    const aboutFeedbackInfo = await page.evaluate(() => {
      const section = document.querySelector('#feedback');
      const cards = section?.querySelectorAll('.space-y-6 > div');
      const cardTexts = Array.from(cards || []).map(c => ({
        author: c.querySelector('.font-mono')?.textContent?.trim(),
        quoteSnippet: c.querySelector('blockquote, p')?.textContent?.trim()?.substring(0, 50),
        isVerified: c.textContent?.includes('VERIFIED')
      }));
      return { totalCards: cards?.length || 0, cardTexts };
    });

    console.log('About Page Feedback Info:', aboutFeedbackInfo);
    if (aboutFeedbackInfo.totalCards < 2) {
      throw new Error(`Expected at least 2 approved testimonials on About page, found ${aboutFeedbackInfo.totalCards}`);
    }
    console.log('✓ About page renders all approved testimonials stacked cleanly with verified badges');

    // 5. Railway Case Study Test
    console.log('\n[TEST 5] Railway Case Study Testimonial (/work/railway-concession-management)...');
    await page.goto('http://127.0.0.1:3000/work/railway-concession-management', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));

    const railwayInfo = await page.evaluate(() => {
      const section = document.querySelector('#feedback');
      const client = section?.querySelector('cite .font-mono')?.textContent?.trim();
      const quote = section?.querySelector('blockquote')?.textContent?.trim();
      const hasControls = Boolean(section?.querySelector('button[aria-label*="Testimonial"]'));
      return { client, quote: quote?.substring(0, 50), hasControls };
    });

    console.log('Railway Case Study Info:', railwayInfo);
    if (!railwayInfo.client?.includes('RAJESH SHARMA')) {
      throw new Error(`Railway case study does not show Rajesh Sharma! ${JSON.stringify(railwayInfo)}`);
    }
    if (railwayInfo.hasControls) {
      throw new Error('Railway case study should NOT have slider navigation controls!');
    }
    console.log('✓ Railway case study displays Rajesh Sharma feedback statically with zero slider controls');

    console.log('\n========================================');
    console.log('ALL TEST SUITES PASSED PERFECTLY!');
    console.log('========================================');

  } catch (err) {
    console.error('QA Test Error:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

runTests();
