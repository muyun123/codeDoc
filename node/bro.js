const puppeteer = require('puppeteer');

(async () => {
let option = {
    headless:false
}
  const browser = await puppeteer.launch(option);
  const page = await browser.newPage();
  await page.goto('https://www.biquge.com/');
  // ele = await page.$$(".nav li a")
  // await ele[2].click()
  ele = await page.$(".search")
  await ele.click()
  await page.keyboard.type('遮天');
  // await browser.close();
})();