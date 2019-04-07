const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];

(async () => {
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage()
  await page.emulate(iPhonex);
  await page.goto('https://www.google.fr')
  await page.focus('#tsf > div:nth-child(2) > div.A7Yvie.emca > div.zGVn2e > div > div.a4bIc > input') // select div.
  await page.keyboard.type('i am typing using puppeteer !'); // type keybroad
  await page.screenshot({ path: 'keyboard.png' })
//   await browser.close()
})()