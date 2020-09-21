var path = require('path')
module.exports = {
    publicPath: '/', //应用是被部署在服务器的路径
    //outputDir:'',//当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    //assetsDir:'',//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    //indexPath:"",//指定生成的 index.html 的输出路径 (相对于 outputDir)。
    lintOnSave: false,//关闭eslin错误警告
    devServer: {
        proxy: {
            '/api': {
                target: '<url>',
                changeOrigin: true
            }
        }
    },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('base',resolve('src/base'))
            .set('static',resolve('src/static'))
    }
}

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}