let fs = require('fs')

//读取文件
function rFile(file){
    return new Promise((resolv,reject)=>{
        fs.readFile(file, (error, data) => {
            console.log(data.toString())
          })
    })
}
//写入文件
function wFile(file,main){
    return new Promise((resolv,reject)=>{
        fs.writeFile(file, main, {flag:'a'},(error) => {
            if (!error) {
              console.log('创建成功了。。')
            }
        }) 
    })
}
//创建目录
function cWrite(dir){
    return new Promise((resolv,reject)=>{
        fs.mkdir(dir,{ recursive: true },function(err){
            if (err) {
                console.error(err);
                return

            }
            console.log("目录创建成功。");
         });
    })
}
cWrite('a/b.txt')