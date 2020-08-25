var fs = require('fs');
module.exports = {
    writeFile(title, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(title + '.txt', data, 'utf8', (err) => {
                if (err) { console.log(title + '保存失败'); resolve(false); } else { console.log(title + '文件已生成'); resolve(true); }
            });
            // let rs = fs.createReadStream(data, {     
            //     flags: 'r',        
            //     encoding: 'utf-8',        
            //     highWaterMark: 5
            // })       
            // let ws = fs.createWriteStream(title + '.txt',{
            //     highWaterMark:1
            // })
            // rs.on('data',function(chunk){
            //     ws.write(chunk)
            // })
            // rs.on('end', function () {
            //     console.log(title+'文件已生成');
            // })
        })
    },
    mkDir(dir) {
        return new Promise((resolve, reject) => {
            fs.mkdir(dir, { recursive: true }, (err) => {
                if (err) { console.log('目录创建失败'); resolve(false); } else { console.log('目录创建成功'); resolve(true); }
            });
        })
    },
    pipe(res, ws,title) {
        return new Promise((resolve, reject) => {
            var i = 0;
            res.on('data', (chunk) => {
                i += chunk.length
                // process.stdout.write(i, 'utf-8');
                ws.write(chunk)
            })
            res.on('end', () => {
                console.log(title+"下载完成");
                resolve(true);
            })
        })
    },
    openDir(path) {
        return new Promise((resolve) => {
            fs.opendir(path, async (err, dir) => {
                if (err) {
                    resolve(false)
                } else {
                    await dir.close()
                    resolve(true);
                }

            })
        })
    }
}