const puppeteer = require("puppeteer");

let config={
    launchOptions:{
        headless:false
    }
}

//locators: PF
const loginPage ={
    phoneNo:'input.form-control field',
    continue:'button.button-continue'
}

puppeteer.launch(config.launchOptions).then(async browser =>{
    const page= await browser.newPage();
    await page.goto("https://app-staging.youshd.com/login");
    // await page.waitFor(loginPage.phoneNo);
    await page.type(loginPage.phoneNo, "7396089610");
    await page.click(loginPage.continue);

})