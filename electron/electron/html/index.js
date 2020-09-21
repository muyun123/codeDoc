const { ipcRenderer } = require('electron');
const { dialog } = require('electron').remote



// console.log(dialog)
function init() {
    //监听main process里发出的message
    ipcRenderer.on('downstate', (event, arg) => {
        alert("下载状态：" + arg);
    })
}

/**
* 下载
*/
function down() {
    var savepath = document.getElementById('savepath')
    var downurl = document.getElementById('downurl')
    // var a = "f:\\1\\1.txt";//需要下载文件的路径
    // var b = "f:\\3\\";//下载文件存放路径

    // //扩展，访问局域网内共享文件
    // var c = "file:\\xxx.xxx.x.xxx\\test\\1.txt";
    // ipcRenderer.send('download', a + "+" + b)
    if(savepath.value==''||downurl.value=='') return;
    ipcRenderer.send('download',downurl.value+"+"+savepath.value)
}

/**
* 选择文件夹
*/
function selectpath() {
    var savepath = document.getElementById('savepath')
    // button_choose.addEventListener("click", function(){
        dialog.showOpenDialog({
            //默认路径
            defaultPath :'../Desktop',
            //选择操作，此处是打开文件夹
            properties: [
                'openDirectory',
            ],
            //过滤条件
            filters: [
                { name: 'All', extensions: ['*'] },
            ]
        }).then(function(res){
            //回调函数内容，此处是将路径内容显示在input框内
            if(!res.canceled){
            savepath.value = res.filePaths[0];
            }
        })
    // })
    
    // ipcRenderer.send('download',savepath.value)

}
