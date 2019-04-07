const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--proxy-server=127.0.0.1:3030'], headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com');
  await browser.close();
})();