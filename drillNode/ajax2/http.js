var http = require("http");
const { reset } = require("nodemon");
var fs = require('fs')
var url = require('url');
var server = http.createServer();
server.listen('8999', () => {
    console.log('服务地址：localhost:8999')
})
server.on('request', (req, res) => {
    var urli = url.parse(req.url);
    console.log(urli.pathname)
    if (urli.pathname == '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) res.end('');
            res.end(data)
        })
    } else if (urli.pathname == '/get') {
        console.log(urli.query);
        res.end(urli.query.username)
    } else if (urli.pathname == '/file') {
        var formidable = require('formidable');
        var form = formidable({ multiples: true,uploadDir:'./img/' });
        
        form.parse(req, (err, fields, files) => {
            fs.rename(files.file.path, './img/' + files.file.name,async(err) => {
                if (err) throw err;
                
            });
            // res.writeHead(200, { 'content-type': 'application/json' });
            // res.end(JSON.stringify({ fields, files }, null, 2));
        });
    }
})