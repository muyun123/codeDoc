const puppeteer = require('puppeteer');
var option = {
    headless: false
}
pupInit()
async function pupInit() {
    var browser = await puppeteer.launch(option);
    getTit(browser);
    // await browser.close();
}

async function getTit(browser) {
    var page = await browser.newPage();
    var time = ttime();
    await page.goto('http://www.aishoujizy.com');
    var arr = await page.$$eval("#ajaxResult_fy .lbbt_c00", (divs) => {
        var arr = [];
        for (var item of divs) {
            var obj = {};
                obj.title = item.children[2].title;
                obj.url = item.children[2].href;
                obj.time = item.children[0].innerText;
                arr.unshift(obj)
        }
        return arr;
    });
    arrFilter(arr)
}
// 过滤非今天的数据
function arrFilter(arr){
    var newarr =[]
    for(var item of arr){
        if(item.time == ttime()){
            newarr.push(item);
        }
    }
    console.log(newarr.length);
}
function ttime() {
    var time = new Date();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    return odd(month) + '-' + odd(day);
    // console.log(odd(month) + '-' + odd(day))
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
        format = format.replace( .$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}