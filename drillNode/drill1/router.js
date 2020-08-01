// 路由
var { newindex,others,view,updata,editupdata} = require('./constorller.js')
var url = require('url');
const querystring = require('querystring');
module.exports = async (req, res) => {
    var urli = req.url;
    var myURL = url.parse(urli,true);
    // console.log(myURL)
    if (urli == '/') {
        var html = await newindex();
        res.end(html);
    }else if(myURL.pathname == '/view'){
        var html = await view(myURL.query.id)
        res.end(html);
    }else if(myURL.pathname == '/updata'){
        var html = await updata(myURL.query.id)
        res.end(html);
    }else if(myURL.pathname == '/editupdata'){
        var body = '';
        req.on('data',(chunk)=>{
            body +=chunk;
        })
        req.on('end',async()=>{
            console.log(body)
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=UTF-8' });
            var html = await editupdata(myURL.query.id,querystring.parse(body))
            res.end(html);
        })
       
    }else{
        var html = await others(urli);
        res.end(html);
    }
}