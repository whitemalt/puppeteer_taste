const puppeteer = require('puppeteer');

// headless false will show browser.
puppeteer.launch({headless: false}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  
  await page.goto('https://www.aymen-loukil.com'); // goto page first.

  let title = await page.title()
  console.log(title);
//   await page.screenshot({ path: 'myscreenshot.png', fullPage: true }); // screenshot.
  await browser.close();
});