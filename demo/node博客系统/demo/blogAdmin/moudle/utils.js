
var http = require("http");
var fs = require("fs");

var httpGet = function (url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            var rawData ='';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                try {
                    const parsedData = JSON.stringify(rawData);
                    resolve(parsedData);
                } catch (e) {
                    reject(e.message);
                }
            });
        })
    })
}
var readFile = function (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path,'utf8', (err, data) => {
            if (err) console.log(err);
            resolve(JSON.parse(data));
          });
    })
}

module.exports={
    httpGet,readFile
}