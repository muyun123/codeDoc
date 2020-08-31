// 服务器模块
var http = require("http");
var router = require("./router.js")
http.createServer((req,res)=>{
    router(req,res);
}).listen(8080,()=>{
    console.log("服务器启动");
});