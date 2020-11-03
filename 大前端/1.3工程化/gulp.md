# gulp
## 基本操作
### [官方]https://www.gulpjs.com.cn/docs/getting-started/quick-start/

### 安装
>npm install --global gulp-cli

>npm install --save-dev gulp

### 创建 gulpfile 文件

在项目的根目录下创建一个名为 gulpfile.js 的文件
```js
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
```
### 运行
>gulp

>运行多个任务（task），可以执行 gulp <task> <othertask>

