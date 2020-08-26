const http = require('http')
// const fs = require('fs')
// 创建服务器的方法
// request 请求头和请求体 前端给后端的
// response响应头和响应体 后端给前端的
const server = http.createServer((request,response)=>{
    console.log(request.url)
    fs.appendFile('./msg.txt',request.url+'\n',()=>{
        console.log('写入成功')
    })
    // 编写响应头
    response.writeHead('202')
    // 编写响应体
    response.write('hello world123')
    // 后端完全写完了
    response.end()
})
// 提供一个端口给前端服务
server.listen(8014)
console.log('启动服务器')

// http.get('http://www.baidu.com', (res) => {
//   const { statusCode } = res;
//   const contentType = res.headers['content-type'];

//   let error;
//   if (statusCode !== 200) {
//     error = new Error('请求失败\n' +
//                       `状态码: ${statusCode}`);
//   } else if (!/^application\/json/.test(contentType)) {
//     error = new Error('无效的 content-type.\n' +
//                       `期望的是 application/json 但接收到的是 ${contentType}`);
//   }
//   if (error) {
//     console.error(error.message);
//     // 消费响应数据来释放内存。
//     res.resume();
//     return;
//   }

//   res.setEncoding('utf8');
//   let rawData = '';
//   res.on('data', (chunk) => { rawData += chunk; });
//   res.on('end', () => {
//     try {
//     //   const parsedData = JSON.parse(rawData);
//     //   console.log(rawData);
//       fs.writeFile('1.html', rawData, (err) => {
//         if (err) throw err;
//         console.log('文件已被保存');
//       });
//     } catch (e) {
//       console.error(e.message);
//     }
//   });
// }).on('error', (e) => {
//   console.error(`出现错误: ${e.message}`);
// });