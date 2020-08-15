const puppeteer = require('puppeteer');
var utils = require('./utils.js')
var option = {
    headless: true
}
var ele = {
    // url:'http://www.aishoujizy.com',
    // el:"#ajaxResult_fy .lbbt_c00",
    url: 'https://www.bingfengyl.com/',
    el: "#iautobox .newadd li",
}
pupInit(ele)
/*
*<网站操作>
*@param[ele] [对应网站目标]
*/
async function pupInit(ele) {
    var browser = await puppeteer.launch(option);
    
    var arr = await getTit(browser, ele);
    for (var i in arr) {
        var obj = await article(browser, arr[i].url);
        arr[i] = Object.assign(arr[i], obj)
        if (obj.down == '') continue;
        await wfile(arr[i])
        await lanZouDown(browser, obj.down)
        await timeOut();
    }
    // await browser.close();
    // console.log(arr)
}
async function wfile(arr){
    var dir = await creactDir();
    await utils.writeFile(dir+arr.title,arr.text)
    return;
}
/*
*<获取最新文章>
*@param[browser]
*@param[el]
*/
async function getTit(browser, el) {

    var page = await browser.newPage();
    await page.goto(el.url);
    var arr = await page.$$eval(el.el, (divs) => {
        var arr = [];
        for (var item of divs) {
            var obj = {};
            // console.log(item.children[2].style.color=='')
            if (item.children[2].style.color=='') {
                obj.title = item.children[2].title;
                obj.url = item.children[2].href;
                obj.time = item.children[0].innerText;
                arr.unshift(obj)
            }
        }

        return arr;
    });
    // page.close();
    return arrFilter(arr)
}
/*
*<获取文章信息>
*@param[browser]
*@param[url][文章页地址]
*/
async function article(browser, url) {
    var page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    var dir = await creactDir();
    try {
        var down = await page.$eval(".art-content", async (divs) => {
            var lanzou = /www\.lanzoux\.com\/[\w]+/;
            var obj = {
                text: divs.innerText,
                down: lanzou.test(divs.innerText) ? 'https://' + lanzou.exec(divs.innerText)[0] : ''
            }
            return obj;
        });

    } catch (error) {
        return '';
    }

    await timeOut();
    page.close()
    return down;
}
/*
*<蓝奏链接解析下载>
*@param[browser]
*@param[url][文章页地址]
*/
async function lanZouDown(browser, url) {
    try {
        var page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' });
        var title = await page.$eval("#b", (title) => {
            return title.innerText
        });
        var ifram = await page.$eval("iframe", (href) => {
            return href.src
        });
        await page.goto(ifram, { waitUntil: 'networkidle0' });
        var lanZouUrl = await page.$eval("#go a", (a) => {
            return a.href
        });
        getdown(browser, lanZouUrl, title)
        // await pipeDown(lanZouUrl,title);
        page.close()
    } catch (error) {

    }
}
/*
*<apk下载地址拦截>
*@param[url][下载地址]
*/
async function getdown(browser, url, title) {
    console.log(title + "获取地址")
    var page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', async interceptedRequest => {
        var reg = /\.baidupan\.com\//;
        var reg1 = /vip\.d0/;
        if (reg.test(interceptedRequest.url()) && !reg1.test(interceptedRequest.url())) {
            interceptedRequest.abort();
            // console.log(reg.test(interceptedRequest.url()))
            // console.log(interceptedRequest.url())
            await pipeDown(interceptedRequest.url(), title)
        } else {
            interceptedRequest.continue();
        }

    });
    try {
        await page.goto(url, { waitUntil: 'networkidle0' });
    } catch (error) {
        page.close()
    }
}
/*
*<管道下载>
*@param[url][下载地址]
*/
async function pipeDown(url, title) {
    console.log(title + "下载")
    var https = require('https')
    var fs = require('fs')
    var dir = await creactDir();
    var ws = fs.createWriteStream(dir + title);
    https.get(url, async (res) => {
        // console.log(res.headers['content-length'])
        // res.pipe(fs.createWriteStream('./apk/'+title));
        await utils.pipe(res, ws)
    }).on('error', (e) => {
        console.error(`出现错误: ${e.message}`);
    });
}
/*
*<去除非今天数据>
*@param[arr]
*/
function arrFilter(arr) {
    var newarr = []
    for (var item of arr) {
        if (item.time == ttime()) {
            newarr.push(item);
        }
    }
    return newarr;
}
/*
*<获取今天信息>
*/
function ttime() {
    var time = new Date();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    return odd(month) + '-' + odd(day);
}
function odd(a) {
    if (a < 10) {
        a = '0' + a;
    }
    return a;
}
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}
/*
*<延时>
*/
function timeOut(t = 5000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t);
    })
}
async function creactDir() {
    var isDir = await utils.openDir('./down/' + ttime());
    if (!isDir) {
        await utils.mkDir('./down/' + ttime());
    }
    return './down/' + ttime() + '/';
}