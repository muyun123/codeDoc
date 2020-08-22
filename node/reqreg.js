let http = require('http')

var url = "http://27k.cc/"


function req(urlr){
    return new Promise((resolve,reject)=>{
        http.get(urlr,(res)=>{
            if (res.statusCode !== 200) {
                console.log('请求失败,' +`状态码: ${res.statusCode}`)
                // 消r费响应数据来释放内存。
                res.resume();
                return;
              }
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                resolve(rawData)
                // console.log(rawData)
              })
          })
    })
}
//获取页面的分类地址
async function getList(){
    let data =await req(url);
    let reg = /<ul class="nav navbar-nav" style="font-size:16px;">(.*?)<form class="navbar-form navbar-right form-inline"/igs;
    var result = reg.exec(data)[1];

    let rega = /<a href="(.*?)">(.*?)<\/a>/igs;
    var res;
    var arr = []
    while ((res = rega.exec(result)) != null)  {
        arr.push({
            listName:res[2],
            listUrl:url + res[1]
        })
    }

    console.log(arr)
} 

//获取分类页面文章链接
async function getArc(al){
    let list = await req(al);
    let reg  = /<div class="list_mov_poster img-responsive">(.*?)<a href="(.*?)">(.*?)<img class="img-responsive(.*?)<\/a>/igs;
    var res;
    var arr = []
    while ((res = reg.exec(list)) != null)  {
        arr.push({
            artUrl:url + res[2]
        })     
    }
    console.log(arr.length)
}
//排行榜
async function rankMovie(){
    var rank = await req(url);
    let reg = /<!-- 热门电影区块儿 -->(.*?)<!-- 热门电影区块儿 end -->/igs
    var res = reg.exec(rank);
    var reg1 = /<a href="(.*?)">(.*?)<\/a>/igs
    var res1;
    var arr = []
    while (( res1 = reg1.exec(res[1])) != null)  {
        if(arr[arr.length-1]=== url + res1[1]) continue;
        arr.push(url + res1[1])     
    }
    arr.pop()
    console.log(arr.length) 
}
async function rankVidio(){
    var rank = await req(url);
    let reg = /<!-- 热门电视剧区块儿 -->(.*?)<!-- 热门电视剧区块儿 end -->/igs
    var res = reg.exec(rank);
    var reg1 = /<a href="(.*?)">(.*?)<\/a>/igs
    var res1;
    var arr = []
    while (( res1 = reg1.exec(res[1])) != null)  {
        if(arr[arr.length-1]=== url + res1[1]) continue;
        arr.push(url + res1[1])     
    }
    arr.pop()
    console.log(arr.length) 
}
async function rankAnime(){
    var rank = await req(url);
    let reg = /<!-- 热门动漫区块儿 -->(.*?)<!-- 热门动漫区块儿 end -->/igs
    var res = reg.exec(rank);
    var reg1 = /<a href="(.*?)">(.*?)<\/a>/igs
    var res1;
    var arr = []
    while (( res1 = reg1.exec(res[1])) != null)  {
        if(arr[arr.length-1]=== url + res1[1]) continue;
        arr.push(url + res1[1])     
    }
    arr.pop()
    console.log(arr.length) 
}
//获取文章信息
async function getArticle(a){
    let article = await req(a);
    var imgr = /<img class="img-responsive".*?src="(.*?)".*?data-smposter/igs;
    var title = /<h1 id="movie_name" data-movie-id="1528">(.*?)<small>/igs;
    var arerr = /<span class="movie_attr">地区：<\/span>.*?<a(.*?)>(.*?)<\/a>/igs;

    var timeLong = /<span class="movie_attr">片长：<\/span>(.*?)<br>/igs;
    var starWars = /<span class="movie_attr">上映日期：<\/span>(.*?)<br>/igs;
    var score = /<span class="movie_attr">豆瓣评分：<\/span>.*?<span class="label label-warning">(.*?)<\/span>/igs;
    var detail = /<meta content="(.*?)" name="Description">/igs;
    var actor = /<span class="movie_attr">演员：<\/span>.*?<a(.*?)>(.*?)<\/a>/igs;
    // var vplay = /<a type="button" class="btn btn-default movie-function-button" href="(.*?)">.*?<\/a>/igs
    // vidios(vplay.exec(article))
    var obj = {
        title:title.exec(article)[1].trim(),
        arer:arerr.exec(article)[2],
        img:imgr.exec(article)[1],
        timeLong:timeLong.exec(article)[1].trim(),
        startime:starWars.exec(article)[1].trim(),
        score:score.exec(article)[1].trim(),
        detail:detail.exec(article)[1].trim(),
        actor:actor.exec(article)[2].trim(),
    }
}
//视频播放链接
// async function vidios(a){
//     let vio = await req(a);
//     var reg = /<video class="dplayer-video dplayer-video-current".*?src="(.*?)".*?>.*?<\/video>/igs
//     var ifram = /<iframe.*?>(.*?)<\/iframe>/igs
//     console.log(vio)
//     return ifram.exec(vio)
// }
// vidios('http://27k.cc/?m=vod-play-id-29632-src-1-num-1.html')