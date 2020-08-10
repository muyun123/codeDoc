const puppeteer = require('puppeteer');
var option = {
    headless: false
}
var ele = {
    // url:'http://www.aishoujizy.com',
    // el:"#ajaxResult_fy .lbbt_c00",
    url:'https://www.bingfengyl.com/',
    el:"#iautobox .newadd li",
}
pupInit(ele)
async function pupInit(ele) {
    var browser = await puppeteer.launch(option);
    var arr = await getTit(browser,ele);
    await browser.close();
    console.log(arr)
}
// 获取最新文章
async function getTit(browser,el) {
    var page = await browser.newPage();
    await page.goto(el.url);
    var arr = await page.$$eval(el.el, (divs) => {
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
   return arrFilter(arr)
}
// 过滤非今天的数据
function arrFilter(arr){
    var newarr =[]
    for(var item of arr){
        if(item.time == ttime()){
            newarr.push(item);
        }
    }
    return newarr;
}
// 获取今日日期 08-08
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