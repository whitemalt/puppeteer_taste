// screen shot with button

const puppeteer = require('puppeteer');

const options = {
    path: 'amazon-header.png',
    fullPage: false,
    clip: {
        x: 0,
        y: 0,
        width: 1280,
        height: 150
    }
}

puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.amazon.com');
    await page.screenshot(options);
    await browser.close();
});