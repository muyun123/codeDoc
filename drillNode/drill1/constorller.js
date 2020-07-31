// 业务处理模块
var fs = require('fs');
var template = require('art-template');
template.defaults.root = './';
var index = function (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, html) => {
            if (err == null) {
                resolve(html);
            }
        })
    })
}

var writeFile = function (path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) resolve(0);
            resolve(1);
        });
    })
}

var others = function (urli) {
    return new Promise((resolve, reject) => {
        fs.readFile('.' + urli, 'utf8', (err, html) => {
            if (err == null) {
                resolve(html);
            } else {
                resolve('');
            }
        })
    })
}

var newindex = function () {
    return new Promise(async (resolve, reject) => {
        // var html = await index('./index.html');
        var db = await index('./db.json');
        var json = JSON.parse(db);
        var htmls = template('index.html', { data: json });
        // var str = '';
        // for (var item of json) {
        //     str += '<tr>';
        //     str += '<td>' + item['id'] + '</td>';
        //     str += '<td>' + item['name'] + '</td>';
        //     str += '<td>' + item['nengli'] + '</td>';
        //     str += '<td>' + item['jituan'] + '</td>';
        //     str += `<td>
        //                 <a href="view?id=${item['id']}">查看</a>
        //                 <a href="updata?id=${item['id']}">修改</a>
        //                 <a href="delect?id=${item['id']}">删除</a>
        //             </td>`;
        //     str += '</tr>';
        // }
        // var htmls = html.replace('{tr}', str);

        resolve(htmls)
    })
}

var view = function (id) {
    return new Promise(async (resolve, reject) => {
        var html = await index('./view.html');
        var db = await index('./db.json');
        var str = '';
        for (var item of JSON.parse(db)) {
            if (item.id == id) {
                str += '<tr>';
                str += '<td>' + item['id'] + '</td>';
                str += '<td>' + item['name'] + '</td>';
                str += '<td>' + item['nengli'] + '</td>';
                str += '<td>' + item['jituan'] + '</td>';
                str += '</tr>';
            }
        }
        var htmls = html.replace('{tr}', str);

        resolve(htmls)
    })
}

var updata = function (id) {
    return new Promise(async (resolve, reject) => {
        var db = await index('./db.json');
        for (var item of JSON.parse(db)) {
            if (item.id == id) {
                var htmls = template('updata.html', item)
            }
        }
        resolve(htmls)
    })
}
var editupdata = function (id, body) {
    return new Promise(async (resolve, reject) => {
        var db = await index('./db.json');
        var json = JSON.parse(db);
        json[id - 1].name = body.name;
        json[id - 1].nengli = body.nengli;
        json[id - 1].jituan = body.jituan;
        console.log(json)
        var result = await writeFile('./db.json', JSON.stringify(json));
        resolve(result?'<a href="/">返回首页</a>':'<a href="/">修改失败返回首页</a>')
    })
}
module.exports = {
    index,
    others,
    newindex,
    view,
    updata,
    editupdata
}