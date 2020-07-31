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
        fs.readFile('.' + urli, (err, html) => {
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
// 内容修改
// var editupdata = function (id, body) {
//     return new Promise(async (resolve, reject) => {
//         var db = await index('./db.json');
//         var json = JSON.parse(db);
//         // json[id - 1].name = body.name;
//         // json[id - 1].nengli = body.nengli;
//         // json[id - 1].jituan = body.jituan;
//         // console.log(json)
//         // var result = await writeFile('./db.json', JSON.stringify(json));
//         // resolve(result?'<a href="/">返回首页</a>':'<a href="/">修改失败返回首页</a>')
//     })
// }

// 内容图片修改版
var editupdata = function (req, id) {
    return new Promise(async (resolve, reject) => {
        var formidable = require('formidable');
        var form = formidable({ multiples: true });
        form.uploadDir = "./img";//文件保存路径
        var db = await index('./db.json');
        var json = JSON.parse(db);
        form.parse(req, async(err, fields, files) => {
            // res.writeHead(200, { 'content-type': 'application/json' });
            // console.log(fields)//参数{ name: '路飞', nengli: '超人系橡胶果实', jituan: '草帽海贼团程序' }
            // console.log(files)//上传文件信息
          fs.rename(files.img.path, './img/' + files.img.name,async(err) => {
                if (err) throw err;
                json[id - 1].name = fields.name;
                json[id - 1].nengli = fields.nengli;
                json[id - 1].jituan = fields.jituan;
                json[id - 1].img = '/img/' + files.img.name;
                var result = await writeFile('./db.json', JSON.stringify(json));
                resolve(result?"<script>alert('修改成功');location.href='/'</script>":"<script>alert('修改失败');location.href='/editupdata?id='"+id+"</script>")
            });
           
        });
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