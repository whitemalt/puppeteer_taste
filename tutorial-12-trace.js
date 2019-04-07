/*
  save to json file to trace devtool performance page
  it can use view later in devtool by drag and drop.
*/

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.emulate(iPhonex);
    //start the tracing
    await page.tracing.start({ path: 'output/trace.json', screenshots: true });
    await page.goto('https://www.bmw.com')
    //stop the tracing
    await page.tracing.stop();
    await browser.close()
})()