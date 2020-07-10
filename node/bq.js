const cheerio = require('cheerio')
const fs = require('fs')
const axios = require('axios')
var path = require('path');
var page = 1;
var url = `https://www.fabiaoqing.com/bqb/lists/type/hot/page/${page}.html`
var baseUrl = 'https://www.fabiaoqing.com/'
function req(a) {
    return new Promise((resolve, reject) => {
        axios.get(a).then((data) => {
            resolve(cheerio.load(data.data));
        }).catch((error) => {
            console.log(a + '请求出错')
        })
    })
}
//创建目录
function cdir(dir) {
    return new Promise(() => {
        fs.mkdir('picture/' + dir, { recursive: true }, (err) => {
            if (err) {
                 console.log(dir + '创建失败')
            } else {
                console.log(dir + ' 开始下载')
            }
        });
    })
}
// getList(url)
//列表
async function getList(a) {
    var $ = await req(a);
    $('.bqba').each(async (index, element) => {
        let title = $(element).find('h1').text().replace("|", "");
       cdir(title);
       await art($(element).attr('href'),title);
    })
}
//内容
async function art(a,t) {
    var $ = await req(baseUrl + a);
    $('.bqbppdetail').each(async (index, element) => {
        var i = path.extname($(element).attr('data-original'))
       axios.get($(element).attr('data-original'), { responseType: 'stream' }).then((res) => {
            res.data.pipe(fs.createWriteStream(`picture/${t}/${index}${i}`));
            console.log(`${t}/${index}${i}` + ' 下载完成')
        }).catch(()=>{
            console.log(`${t}/${index}${i}` + ' 下载失败')
        })
    })
}
//获取分页
async function pagenum(){
    var $ = await req(url);  
    return $($('.menu .item')[$('.menu .item').length - 3]).text().trim();
}
async function init(){
    var num = await pagenum()
    for(var i=1;i<=2;i++){
        page = i
        url = `https://www.fabiaoqing.com/bqb/lists/type/hot/page/${page}.html`
        getList(url);
    }
}
init()


