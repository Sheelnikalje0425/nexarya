const puppeteer = require('puppeteer-core');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await new Promise(r => setTimeout(r, 1000));

  const res = await page.evaluate(() => {
    const el = document.querySelector('header nav a span');
    const header = el ? el.closest('header') : null;
    const isNavy = true;
    let cur = el;
    const path = [];
    while (cur) {
      path.push({ tag: cur.tagName, className: cur.className, bg: window.getComputedStyle(cur).backgroundColor });
      cur = cur.parentElement;
    }
    return { el: !!el, header: !!header, path };
  });

  console.log(JSON.stringify(res, null, 2));
  await browser.close();
})();
