var  http = require("http");
const { reset } = require("nodemon");
var fs = require('fs')
var url = require('url');
var server = http.createServer();
server.listen('8000',()=>{
    console.log('服务地址：localhost:8000')
})
server.on('request',(req,res)=>{
    var urli = url.parse(req.url);
    if(urli.pathname == '/'){
        fs.readFile('./index.html',(err,data)=>{
            if(err)  res.end(''); 
            res.end(data)
        })
    }else if(urli.pathname == '/get'){
        console.log(urli.query);
        res.end(urli.query.username)
    }
})