const puppeteer = require('puppeteer');
let option = {
    // headless: false
}
//获取导航栏
async function getNav() {
    var browser = await puppeteer.launch(option);
    const page = await browser.newPage();
    await page.goto('http://www.aishoujizy.com/');
    // 其他操作...
    var nav = await page.$$eval("#navul>li>a", (ele) => {
        let arr = []
        ele.forEach((item) => {
            arr.push({
                title: item.innerText,
                href: item.href
            })
        })
        return arr.slice(1, arr.length - 2)
    })
    console.log(nav)
    await browser.close();
}
//获取最新文章链接
async function getNew() {
    var browser = await puppeteer.launch(option);
    const page = await browser.newPage();
    await page.goto('http://www.aishoujizy.com/');
    var news = await page.$$eval("#CommonListArea .lbbt_c00 span[style]", (ele) => {
        let arr = []
        ele.forEach((item) => {
            arr.push({
                title: item.parentNode.lastElementChild.title,
                href: item.parentNode.lastElementChild.href
            })
        })
        return arr
    })
    await browser.close();
    return news
}
//获取文章内容
async function getArc(a) {
    var browser = await puppeteer.launch(option);
    const page = await browser.newPage();
    await page.goto(a);
    var news = await page.$eval("#arctext", (ele) => {

        var obj = {
            t: ele.innerText,
        }
        if (ele.getElementsByClassName('pics').length) {
            var arr = []
            for (var i of ele.getElementsByClassName('pics')) {
                arr.push(i.href)
            }
            obj.img = arr
        }
        if (ele.getElementsByClassName('sbtn').length) {
            var reg = /window.open\('(.*?)'\);return false/igs;
            var down = reg.exec(ele.getElementsByClassName('sbtn')[0].onclick)[1]
            obj.d = down
        }
        console.log(obj)
        return obj
    })
    await browser.close();
    return news
}

async function getStart() {
   let news = await getNew();
   
}
getStart()