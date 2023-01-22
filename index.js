
const puppeteer = require("puppeteer");

let config={
    launchOptions:{
        headless:false
    }
}

puppeteer.launch(config.launchOptions).then(async browser =>{
    const page= await browser.newPage();
    await page.goto("https://app-staging.youshd.com/login");
    // await browser.close();

})