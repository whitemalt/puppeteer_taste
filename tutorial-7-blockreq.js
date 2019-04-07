const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', request => {

        //lazy way to extract domain from an URL
        var match = request.url().replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
        console.log(match);
        if (match === 'images-na.ssl-images-amazon.com')
            request.abort();
        else
            request.continue();
    });
    await page.goto('https://www.amazon.com');
    await page.screenshot({ path: 'amazon-noimg.png' });

    await browser.close();
})();