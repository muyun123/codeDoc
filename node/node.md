[toc]
# Node.js特点（记住三句话）
- 事件驱动
- 非阻塞IO模型（异步）
- 轻量和高效 

# 安装方法
简单的安装方式是直接官网下载，然后本地安装即可。官网地址：nodejs.org

>Windows系统下，选择和系统版本匹配的.msi后缀的安装文件。Mac OS X系统下，选择.pkg后缀的安装文件。

测试是否安装成功

打开终端，键入命令node，如果进入命令行式js交互环境，即安装成功。

我们可以直接在终端node环境下输入简短的js代码，比如正则表达式。

如果要运行一大段代码的话，可以先写一个JS文件再运行。例如有以下hello.js。
```
function hello() {
    console.log('Hello World!');
}
hello();
```
写好后在终端下键入node hello.js运行，结果如下：
```
$ node hello.js
Hello World!
```
如果需要退出node环境，可以在终端连续输入两次：Ctrl+C即可。

注意
>Node.js使得JavaScript可以脱离浏览器的窗口，独立运行在Node.js提供的环境中，所以Node.js中没有BOM，DOM这些概念。Node.js中根本没有页面，主要是进行一些服务器上的操作（比如：读写文件，网络通信...）。我们只需要基本的JavaScript语法基础（ES6）即可学习。
我们在开发的过程中，每次改完代码之后都必须重启服务器，显然这样的操作效率是比较低，这里给大家推荐个工具，nodemon,nodemon可以帮我们实时监听项目中代码的变化，并且自动重启服务，而且配置简单。

# 使用Nodemon自动重启项目
- 安装：npm install -g nodemon
- 使用nodemon运行项目，取代之前的node app.js。
 >nodemon  [your app.js]

项目运行之后，nodemon会自动监听代码的改动，并且重新启动服务，大大增加我们开发效率。

- nodemon常见配置
    - 在命令行指定应用的端口号：nodemon ./server.js   - localhost 8080
    - 查看帮助，帮助里面有很多选项都是一目了然：nodemon -h    - 或者 nodemon --help
    - 运行 debug 模式：nodemon --debug ./server.js 80
    - 手动重启项目： Nodemon 命令运行的终端 窗口中输入 rs 两  - 个字符，然后再按下回车键，就能手动重启 Nodemon了。

    # Node.js模块化理解
Node.js采用的是CommonJs规范，在NodeJS中，一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。

在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。

Node.js中模块的分类：

- 核心模块（已经封装好的内置模块）；
- 自己定义的模块；
- 第三方的模块（npm下载下来的）；

## require 

require函数用来在一个模块中引入另外一个模块。传入一个模块名，返回一个模块导出对象。用法：let cc = require("模块名") ，其中模块名可以用绝对路径也可以用相对路径,模块的后缀名.js可以省略。例如：
```
let cc1 = require('./main.js')
let cc2 = require('home/src/main.js')
let cc3 = require('./main')
```
require()函数用两个作用：

- 执行导入的模块中的代码；
- 返回导入模块中的接口对象； 

## require加载第三方包的规则
Node.js中使用CommonJs模块化机制，通过npm下载的第三方包，我们在项目中引入第三方包都是：let xx = require('第三方包名')，究竟require方法加载第三方包的原理机制是什么，今天我们来探讨下。

1. require('第三方包名')优先在加载该包的模块的同级目录node_modules中查找第三方包。
>let template = require('art-template') //加载第三方包

2. 找到该第三方包中的package.json文件，并且找到里面的main属性对应的入口模块，该入口模块即为加载的第三方模块。

3. 如果在要加载的第三方包中没有找到package.json文件或者是package.json文件中没有main属性，则默认加载第三方包中的index.js文件。

4. 如果在加载第三方模块的文件的同级目录没有找到node_modules文件夹，或者以上所有情况都没有找到，则会向上一级父级目录下查找node_modules文件夹，查找规则如上一致

5. 如果一直找到该模块的磁盘根路径都没有找到，则会报错：can not find module xxx。

## exports

exports对象用来导出当前模块的公共方法或属性，别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象。用法：exports.name,name为导出的对象名。例子：

```
exports.add = function () {
  let i = 0
  console.log(++i)
}
//导出一个add方法供其他模块使用
​```

其实exports类似于ES6中的export的用法，用来导出一个指定名字的对象。
```
## module.exports

module.exports用来导出一个默认对象，没有指定对象名，常见于修改模块的原始导出对象。比如原本模块导出的是一个对象，我们可以通过module.exports修改为导出一个函数。如下：

```
module.exports = function () {
  console.log('hello world！')
}
```

总结
- Node中每个模块都有一个module对象，module对象中的有一个exports属性为一个接口对象，我们需要- 把模块之间公共的方法或属性挂载在这个接口对象中，方便其他的模块使用这些公共的方法或属性。
- Node中每个模块的最后，都会return: module.exports。
- Node中每个模块都会把module.exports指向的对象赋值给一个变量exports，也就是说：exports = - module.exports。
- module.exports = XXX，表示当前模块导出一个单一成员，结果就是XXX。
- 如果需要导出多个成员时必须使用exports.add = XXX; exports.foo = XXX;或者使用module.- exports.add = XXX; module.export.foo = XXX;。

## 模块的初始化
一个模块中的JS代码仅在模块第一次被使用时执行一次，并且在使用的过程中进行初始化，之后缓存起来便于后续继续使用。

## 主模块
通过命令行参数传递给NodeJS以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。例如通过以下命令启动程序时，main.js就是主模块。

> node main.js // 运行main.js启动程序，main.js称为主模块
完整实例：

在项目中我们有个hello.js文件，里面定义了一个求和的函数
```
var a = 1;
​
function add () {
  return ++a;
}
​
exports.add = add
```
我们在项目的主模块 main.js中引入hello.js
```
var add1 = require('./hello')
var add2 = require('./hello')
​
console.log(add1.add())
console.log(add2.add())
```
该程序运行的结果如下：
```
$ node main.js
2
3
```
我们可以看到hello.js并没有别引入两次而初始化两次，说明模块只会在执行的过程中被初始化一次。

 # npm常见命令

 npm英文全称：node package manager，npm 为你和你的团队打开了连接整个 JavaScript 天才世界的一扇大门。它是世界上最大的软件注册表，每星期大约有 30 亿次的下载量，包含超过 600000 个 包（package） （即，代码模块）。来自各大洲的开源软件开发者使用 npm 互相分享和借鉴。包的结构使您能够轻松跟踪依赖项和版本。 我们平时开发项目都是需要使用npm下载依赖，常见的npm命令总结如下：

- npm -v：查看npm版本。
- npm init：初始化后会出现一个package.json配置文件。可以在后面加上-y ，快速跳过问答式界- 面。
- npm install：会根据项目中的package.json文件自动下载项目所需的全部依赖。
- npm install 包名 --save-dev(npm install 包名 -D)：安装的包只用于开发环境，不用于生产环- 境，会出现在package.json文件中的devDependencies属性中。
- npm install 包名 --save(npm install 包名 -S)：安装的包需要发布到生产环境的，会出现在- package.json文件中的dependencies属性中。
- npm list：查看当前目录下已安装的node包。
- npm list -g：查看全局已经安装过的node包。
- npm --help：查看npm帮助命令。
- npm update 包名：更新指定包。
- npm uninstall 包名：卸载指定包。
- npm config list：查看配置信息。
- npm 指定命令 --help：查看指定命令的帮助。
- npm info 指定包名：查看远程npm上指定包的所有版本信息。
- npm config set registry https://registry.npm.taobao.org： 修改包下载源，此例修改为了- 淘宝镜像。
- npm root：查看当前包的安装路径。
- npm root -g：查看全局的包的安装路径。
- npm ls 包名：查看本地安装的指定包及版本信息，没有显示empty。
- npm ls 包名 -g：查看全局安装的指定包及版本信息，没有显示empty。

# fs模块

Node.js中赋予了JavaScript很多在浏览器中没有的能力，譬如：文件读写，创建http服务器等等，今天我们就来看看在node中怎样用JavaScript进行文件的读写操作。

## 读文件

我们在data文件夹下新建一个hello.txt，并且在里面写入：hello， node.js!! 

我们在hello.txt同级目录下创建一个hello.js文件，我们在这个js文件中利用Node提供的文件操作API, 读取hello.txt文件中的内容。
- node中对文件相关的操作需要依赖fs模块，这个是node中内置模块之一，我们需要引入。fs--file system。
```
   let fs = require('fs')
   fs.readFile() 
   
    // 读文件。 readFile函数接受两个参数：读取文件路径，回调函数（error，data两个参数），
   读取文件成功：data为文件内容，error为null，读取失败：error为错误对象，data为undefined
  ```
   最后我们hello.js中的代码如下:
```
   let fs = require('fs')
fs.readFile('./hello.txt', (error, data) => {
  console.log(data.toString())
})
   ```
   在这里可以说一下，我们读取回来的默认是二进制的内容，所以需要调用toString()方法进行转换。最后，终端可以看到结果如下：



  可以看到我们刚才在hello.txt中写入的文本hello, node.js!!已经打印出来。看到这里是不是觉得很牛叉，JavaScript居然可以用来读取文件内容，完全颠覆了我们以前对JavaScript的理解，然而这一切都得归功于Node.js。

## 写文件

我们在刚才的hello.js中写入下面这行代码：
```
fs.writeFile('./hello.md', '你好，node.js!', (error) => {
      if (!error) {
        console.log('创建成功了。。')
      }
}) 
// 写文件。writeFile接受三个参数：写入文件路径，写入内容，回调函数。

写入成功时候：error为null，写入失败时候：error为错误对象
```
最后我们看到在同级目录下出现了一个hello.md文件，并且里面的内容为你好，node.js. 

## 删除文件
### 语法
以下为删除文件的语法格式：

>fs.unlink(path, callback)
### 参数
参数使用说明如下：

- path - 文件路径。
- callback - 回调函数，没有参数。

### 实例
input.txt 文件内容为：
```
site:www.runoob.com
```
接下来我们创建 file.js 文件，代码如下所示：
```
var fs = require("fs");
​
console.log("准备删除文件！");
fs.unlink('input.txt', function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("文件删除成功！");
});
```
以上代码执行结果如下：
```
$ node file.js 
准备删除文件！
文件删除成功！
```
再去查看 input.txt 文件，发现已经不存在了。

## 创建目录
### 语法
以下为创建目录的语法格式：

>fs.mkdir(path[, options], callback)

### 参数

参数使用说明如下：

- path - 文件路径。

- options 参数可以是：
  - recursive - 是否以递归的方式创建目录，默认为 false。
  - mode - 设置目录权限，默认为 0777。
- callback - 回调函数，没有参数。

### 实例
接下来我们创建 file.js 文件，代码如下所示：
```
var fs = require("fs");
// tmp 目录必须存在
console.log("创建目录 /tmp/test/");
fs.mkdir("/tmp/test/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});
```
以上代码执行结果如下：
```
$ node file.js 
创建目录 /tmp/test/
目录创建成功。
```
可以添加 recursive: true 参数，不管创建的目录 /tmp 和 /tmp/a 是否存在：
```
fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err;
});
```

## 读取目录
### 语法
以下为读取目录的语法格式：

>fs.readdir(path, callback)

### 参数
参数使用说明如下：

- path - 文件路径。
- callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。

### 实例
接下来我们创建 file.js 文件，代码如下所示：
```
var fs = require("fs");
​
console.log("查看 /tmp 目录");
fs.readdir("/tmp/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});
```
以上代码执行结果如下：
```
$ node file.js 
查看 /tmp 目录
input.out
output.out
test
test.txt
```

## 删除目录
### 语法
以下为删除目录的语法格式：

>fs.rmdir(path, callback)
### 参数
参数使用说明如下：

- path - 文件路径。
- callback - 回调函数，没有参数。

### 实例
接下来我们创建 file.js 文件，代码如下所示：
```
var fs = require("fs");
// 执行前创建一个空的 /tmp/test 目录
console.log("准备删除目录 /tmp/test");
fs.rmdir("/tmp/test",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("读取 /tmp 目录");
   fs.readdir("/tmp/",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});
```

## 输入输出
```
// 引入readline模块
var readline = require('readline');
    
//创建readline接口实例
var  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
​
// question方法
rl.question("你的名字是？",function(answer){
    console.log("我的名字是："+answer);
    // 不加close，则程序不会结束
    rl.close();
});
​
// close事件监听
rl.on("close", function(){
   // 结束程序
    process.exit(0);
})
 ```

# Stream(流)
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

Node.js，Stream 有四种流类型：

- Readable - 可读操作。
- Writable - 可写操作。
- Duplex - 可读可写操作.
- Transform - 操作被写入数据，然后读出结果。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

- data - 当有数据可读时触发。
- end - 没有更多的数据可读时触发。
- error - 在接收和写入过程中发生错误时触发。
- finish - 所有数据已被写入到底层系统时触发。

本教程会为大家介绍常用的流操作。

## 从流中读取数据
创建 input.txt 文件，内容如下：

>www.sxt.com

创建 main.js 文件, 代码如下：
```
var fs = require("fs");
var data = '';
​
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
​
// 设置编码为 utf8。
readerStream.setEncoding('UTF8');
​
// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});
​
readerStream.on('end',function(){
   console.log(data);
});
​
readerStream.on('error', function(err){
   console.log(err.stack);
});
​
console.log("程序执行完毕");
```
以上代码执行结果如下：

>程序执行完毕地址：www.sxt.com

## 写入流
创建 main.js 文件, 代码如下：
```
var fs = require("fs");
var data = 'www.sxt.com';
​
// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');
​
// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');
​
// 标记文件末尾
writerStream.end();
​
// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});
​
writerStream.on('error', function(err){
   console.log(err.stack);
});
​
console.log("程序执行完毕");
```
以上程序会将 data 变量的数据写入到 output.txt 文件中。代码执行结果如下：
```
$ node main.js 
程序执行完毕
写入完成。
```
查看 output.txt 文件的内容：
```
$ cat output.txt 
www.sxt.com
```
## 管道流
管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

 我们把文件比作装水的桶，而水就是文件里的内容，我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程。

以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。

设置 input.txt 文件内容如下：
```
教程官网地址：www.sxt.com
管道流操作实例
```

创建 main.js 文件, 代码如下：
```
var fs = require("fs");
​
// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');
​
// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');
​
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
​
console.log("程序执行完毕");
```
代码执行结果如下：
```
$ node main.js 
程序执行完毕
```

查看 output.txt 文件的内容：
```
$ cat output.txt 
教程官网地址：www.sxt.com
管道流操作实例
```

## 链式流
链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。

接下来我们就是用管道和链式来压缩和解压文件。

创建 compress.js 文件, 代码如下：
```
var fs = require("fs");
var zlib = require('zlib');
​
// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");
```
代码执行结果如下：
```
$ node compress.js 
文件压缩完成。
```
执行完以上操作后，我们可以看到当前目录下生成了 input.txt 的压缩文件 input.txt.gz。

接下来，让我们来解压该文件，创建 decompress.js 文件，代码如下：
```
var fs = require("fs");
var zlib = require('zlib');
​
// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));
  
console.log("文件解压完成。");
```
代码执行结果如下：
```
$ node decompress.js 
文件解压完成。
```

## 事件循环
Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。

Node.js 几乎每一个 API 都是支持回调函数的。

Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

```
开启进程
开启线程
初始化数据，window/document/location...
whild(true){
    
    初始化事件列表
    根据事件修改数据
    根据数据去渲染页面
    
    
    if(count=0){
        运行js代码
        btn.onclick = function(){
            document.body.style.background = "skyblue"
            console.log(123)
        }
        console.log(456)
        count++
    }
    
    
}
 ```

## 事件驱动程序
Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型非常高效可扩展性非常强，因为 webserver 一直接受请求而不等待任何读写操作。（这也称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

 
Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：
```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```
以下程序绑定事件处理程序：
```
// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
```
我们可以通过程序触发事件：
```
// 触发事件
eventEmitter.emit('eventName');
```

## 实例
创建 main.js 文件，代码如下所示：
```
实例
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
 
// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}
 
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});
 
// 触发 connection 事件 
eventEmitter.emit('connection');
 
console.log("程序执行完毕。");
```
接下来让我们执行以上代码：
```
$ node main.js
连接成功。
数据接收成功。
程序执行完毕。
```

## Node 应用程序是如何工作的？
在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。

接下来让我们来重新看下前面的实例，创建一个 input.txt ,文件内容如下：

>官网地址：www.sxt.com

创建 main.js 文件，代码如下：
```js
var fs = require("fs");
​
fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("程序执行完毕");
```
以上程序中 fs.readFile() 是异步函数用于读取文件。 如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息。

如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。

执行以上代码，执行结果如下：
```
程序执行完毕
官网地址：www.sxt.com
```
接下来我们删除 input.txt 文件，执行结果如下所示：
```
程序执行完毕
Error: ENOENT, open 'input.txt'
```
因为文件 input.txt 不存在，所以输出了错误信息。

## EventEmitter
Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。

### EventEmitter 类
events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。

你可以通过require("events");来访问该模块。
```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```
EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。

下面我们用一个简单的例子说明 EventEmitter 的用法：
```
//event.js 文件
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 1000); 
```
执行结果如下：

运行这段代码，1 秒后控制台输出了 'some_event 事件触发'。其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。
```
$ node event.js 
some_event 事件触发
```
EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

让我们以下面的例子解释这个过程：
```
//event.js 文件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 
```
执行以上代码，运行的结果如下：
```
$ node event.js 
listener1 arg1 参数 arg2 参数
listener2 arg1 参数 arg2 参数
```
以上例子中，emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。

运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。

EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。接下来我们来具体看下 EventEmitter 的属性介绍。

## cheerio

>cheerio是jquery核心功能的一个快速灵活而又简洁的实现，主要是为了用在服务器端需要对DOM进行操作的地方

### 简介
>cheerio是nodejs的抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现。适合各种Web爬虫程序。

让你在服务器端和html愉快的玩耍
```js
var cheerio = require('cheerio'),
    $ = cheerio.load('<h2 class = "title">Hello world</h2>');
​
$('h2.title').text('Hello there!');
$('h2').addClass('welcome');
​
$.html();
//=> <h2 class = "title welcome">Hello there!</h2>
```

### 安装
>npm install cheerio
### 特点
* 熟悉的语法*：cheerio实现了jQuery的一个子集，去掉了jQuery中所有与DOM不一致或者是用来填浏览器的坑的东西，重现了jQuery最美妙的API
* 快到没朋友*：cheerio使用了及其简洁而又标准的DOM模型， 因此对文档的转换，操作，渲染都极其的高效。基本的端到端测试显示它的速度至少是JSDOM的8倍
* 极其灵活*：cheerio使用了@FB55编写的非常兼容的htmlparser2，因此它可以解析几乎所有的HTML和XML

### 关于JSDOM

cheerio产生的原因是出于对JSDOM的失望，主要体现在以下三点：

* JSDOM的解析规则太过于严格*：JSDOM的解析器无法处理现在许多的流行网站的内容
* JSDOM太慢了*：解析大的网站甚至可以产生可察觉的延迟
* JSDOM太过于重量级*：JSDOM的目标是提供与浏览器一样的DOM环境，但是我们往往不需要这样。我们需要的只是一种简单，熟悉的方式来操作我们的HTML

### 什么时候你应该用JSDOM
cheerio并非万能，当你需要一个浏览器一样的环境时，你最好还是用JSDOM，尤其是你需要进行自动化的功能测试时

### API
后面的例子中用到的HTML模板如下：
```js
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>
```
1. 解析html（load）
首先你需要先加载你的HTML。jQuery会自动完成这一步，因为jQuery操作的DOM是固定的。但是在使用cheerio时我们要手动加载我们的HTML文档

首选的方式如下：
```js
var cheerio = require('cheerio'),
$ = cheerio.load('<ul id = "fruits">...</ul>');
```
其次，直接把HTML字符串作为上下文也是可以的：

```js
$ = require('cheerio');
$('ul', '<ul id = "fruits">...</ul>');
```
或者把HTML字符串作为root
```js
$ = require('cheerio');
$('li', 'ul', '<ul id = "fruits">...</ul>');
```
如果你需要自定义一些解析选项，你可以多传递一个对象给load方法：
```js
$ = cheerio.load('<ul id = "fruits">...</ul>', {
    ignoreWhitespace: true,
    xmlMode: true
});
```
更多的解析选项可以参考domhandler和parser-options

2. 选择器（selectors）

cheerio的选择器几乎和jQuery一模一样，所以语法上十分相像
```js
$( selector, [context], [root] )
```
selector在context的范围内搜索，context的范围又包含在root的范围内。selector和context可以是一个字符串，DOM元素，DOM数组或者cheerio实例。root一般是一个HTML文档字符串

选择器是文档遍历和操作的起点。如同在jQuery中一样，它是选择元素节点最重要的方法，但是在jQuery中选择器建立在CSS选择器标准库上。cheerio的选择器实现了大部分的方法
```js
$('.apple', '#fruits').text()
//=> Apple
​
$('ul .pear').attr('class')
//=> pear
​
$('li[class=orange]').html()
//=> <li class = "orange">Orange</li>
```
3. 属性操作（atrributes）

用来获取和更改属性的方法：

>.attr(name, value)

这个方法用来获取和设置属性。获取第一个符合匹配的元素的属性值。如果某个属性值被设置成null，那么该属性会被移除。你也可以把map和function作为参数传递进去，就像在jQuery中一样
```js
$('ul').attr('id')
//=> fruits
​
$('.apple').attr('id', 'favorite').html()
//=> <li class = "apple" id = "favorite">Apple</li>
```
更多信息请查看 http://api.jquery.com/attr/

>.removeAtrr(name)

移除名为name的属性
```js
$('.pear').removeAttr('class').html()
//=> <li>Pear</li>
```
.hasClass(className)

检查元素是否含有此类名
```js
$('.pear').hasClass('pear')
//=> true
​
$('apple').hasClass('fruit')
//=> false
​
$('li').hasClass('pear')
//=> true
```
>.addClass(className)

添加类名到所有的匹配元素，可以用函数作为参数
```js
$('.pear').addClass('fruit').html()
//=> <li class = "pear fruit">Pear</li>
​
$('.apple').addClass('fruit red').html()
//=> <li class = "apple fruit red">Apple</li>
参见 http://api.jquery.com/addClass/
```
>.remoteClass([className])

移除一个或者多个（空格分隔）的类名，如果className为空，则所有的类名都会被移除，可以传递函数作为参数
```js
$('.pear').removeClass('pear').html()
//=> <li class = "">Pear</li>
​
$('.apple').addClass('red').removeClass().html()
//=> <li class = "">Apple</li>
```
参见 http://api.jquery.com/removeClass/

遍历
>.find(selector)

在当前元素集合中选择符合选择器规则的元素集合
```js
$('#fruits').find('li').length
//=> 3
```
>.parent()

获取元素集合第一个元素的父元素
```js
$('.pear').parent().attr('id')
//=> fruits
```
>.next()

选择当前元素的下一个兄弟元素
```js
$('.apple').next().hasClass('orange')
//=> true
```
>.prev()

同.next()相反

>.siblings()

获取元素集合中第一个元素的所有兄弟元素，不包含它自己
```js
$('.pear').siblings().length
//=> 2
```
>.children( selector )

>.each( function(index, element) )

遍历函数返回false即可终止遍历
```js
var fruits = [];
​
$('li').each(function(i, elem) {
  fruits[i] = $(this).text();
});
​
fruits.join(', ');
//=> Apple, Orange, Pear
```
>.map( function(index, element) )
```js
$('li').map(function(i, el) {
  // this === el
  return $(this).attr('class');
}).get().join(', ');
//=> apple, orange, pear
```
>.filter( selector )
```js
$('li').filter('.orange').attr('class');
//=> orange
```
>.filter( function(index) )
```js
$('li').filter(function(i, el) {
  // this === el
  return $(this).attr('class') === 'orange';
}).attr('class')
//=> orange
```
>.first()
```js
$('#fruits').children().first().text()
//=> Apple
```
>.last()
```js
$('#fruits').children().last().text()
//=> Pear
```
>.eq( i )

缩小元素集合，可以用负数表示倒数第 i 个元素被保留
```js
$('li').eq(0).text()
//=> Apple
​
$('li').eq(-1).text()
//=> Pear
```
### 操作DOM
操作DOM结构的方法

.append( content, [content, ...] )

.prepend( content, [content, ...] )

.after( content, [content, ...] )
```js
$('.apple').after('<li class = "plum">Plum</li>')
$.html()
//=>  <ul id = "fruits">
//      <li class = "apple">Apple</li>
//      <li class = "plum">Plum</li>
//      <li class = "orange">Orange</li>
//      <li class = "pear">Pear</li>
//    </ul>
```
.before( content, [content, ...] )
```js
$('.apple').before('<li class = "plum">Plum</li>')
$.html()
//=>  <ul id = "fruits">
//      <li class = "plum">Plum</li>
//      <li class = "apple">Apple</li>
//      <li class = "orange">Orange</li>
//      <li class = "pear">Pear</li>
//    </ul>
```
.remove( [selector] )
```js
$('.pear').remove()
$.html()
//=>  <ul id = "fruits">
//      <li class = "apple">Apple</li>
//      <li class = "orange">Orange</li>
//    </ul>
```
.replaceWith( content )
```js
var plum = $('<li class = "plum">Plum</li>')
$('.pear').replaceWith(plum)
$.html()
//=> <ul id = "fruits">
//     <li class = "apple">Apple</li>
//     <li class = "orange">Orange</li>
//     <li class = "plum">Plum</li>
//   </ul>
```
.empty()
```js
$('ul').empty()
$.html()
//=>  <ul id = "fruits"></ul>
```
.html( [htmlString] )
```js
$('.orange').html()
//=> Orange
​
$('#fruits').html('<li class = "mango">Mango</li>').html()
//=> <li class="mango">Mango</li>
```
.text( [textString] )
```js
$('.orange').text()
//=> Orange
​
$('ul').text()
//=>  Apple
//    Orange
//    Pear
```
### 解析和渲染
```js
$.html()
//=>  <ul id = "fruits">
//      <li class = "apple">Apple</li>
//      <li class = "orange">Orange</li>
//      <li class = "pear">Pear</li>
//    </ul>
```
输出包含自己在内的HTML（outer HTML）
```js
$.html('.pear')
//=> <li class = "pear">Pear</li>
```
### 杂项
.toArray()
```js
$('li').toArray()
//=> [ {...}, {...}, {...} ]
```
.clone()

>var moreFruit = $('#fruits').clone()
### 常用工具
$.root()
```js
$.root().append('<ul id="vegetables"></ul>').html();
//=> <ul id="fruits">...</ul><ul id="vegetables"></ul>
```
$.contains( container, contained )

## Puppeteer
Puppeteer是谷歌官方出品的一个通过DevTools协议控制headless Chrome的Node库。可以通过Puppeteer的提供的api直接控制Chrome模拟大部分用户操作来进行UI Test或者作为爬虫访问页面来收集数据。

### 中文文档
>https://zhaoqize.github.io/puppeteer-api-zh_CN/#/

### 作用：
- 生成页面 PDF。
- 抓取 SPA（单页应用）并生成预渲染内容。
- 自动提交表单，进行 UI 测试，键盘输入等。
- 创建一个时时更新的自动化测试环境。 使用最新的 JavaScript 和浏览器功能直接在最新版本的Chrome中执行测试。
- 捕获网站的 timeline trace，用来帮助分析性能问题。
- 测试浏览器扩展。

### 环境和安装
Puppeteer本身依赖6.4以上的Node，但是为了异步超级好用的async/await，推荐使用7.6版本以上的Node。另外headless Chrome本身对服务器依赖的库的版本要求比较高，centos服务器依赖偏稳定，v6很难使用headless Chrome，提升依赖版本可能出现各种服务器问题（包括且不限于无法使用ssh），最好使用高版本服务器。

Puppeteer因为是一个npm的包，所以安装很简单：
>npm i puppeteer

或者

>yarn add puppeteer

Puppeteer安装时自带一个最新版本的Chromium，可以通过设置环境变量或者npm config中的PUPPETEER_SKIP_CHROMIUM_DOWNLOAD跳过下载。如果不下载的话，启动时可以通过puppeteer.launch([options])配置项中的executablePath指定Chromium的位置。

### 使用和例子
Puppeteer类似其他框架，通过操作Browser实例来操作浏览器作出相应的反应。
```js
const puppeteer = require('puppeteer');
​
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://rennaiqian.com');
  await page.screenshot({path: 'example.png'});
  await page.pdf({path: 'example.pdf', format: 'A4'});
  await browser.close();
})();
```

上述代码通过puppeteer的launch方法生成了一个browser的实例，对应于浏览器，launch方法可以传入配置项，比较有用的是在本地调试时传入{headless:false}可以关闭headless模式。
```js
const browser = await puppeteer.launch({headless:false})
```
browser.newPage方法可以打开一个新选项卡并返回选项卡的实例page，通过page上的各种方法可以对页面进行常用操作。上述代码就进行了截屏和打印pdf的操作。

一个很强大的方法是page.evaluate(pageFunction, ...args)，可以向页面注入我们的函数，这样就有了无限可能
```js
const puppeteer = require('puppeteer');
​
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://rennaiqian.com');
​
  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });
​
  console.log('Dimensions:', dimensions);
  await browser.close();
})();
```
需要注意的是evaluate方法中是无法直接使用外部的变量的，需要作为参数传入，想要获得执行的结果也需要return出来。因为是一个开源一个多月的项目，现在项目很活跃，所以使用时自行查找api才能保证参数、使用方法不会错。

### 调试技巧
关掉无界面模式，有时查看浏览器显示的内容是很有用的。使用以下命令可以启动完整版浏览器：
```js
const browser = await puppeteer.launch({headless: false})
```
减慢速度，slowMo选项以指定的毫秒减慢Puppeteer的操作。这是另一个看到发生了什么的方法：
```js
const browser = await puppeteer.launch({
  headless:false,
  slowMo:250
});
```
3.捕获console的输出,通过监听console事件。在page.evaluate里调试代码时这也很方便：
```js
page.on('console', msg => console.log('PAGE LOG:', ...msg.args));
await page.evaluate(() => console.log(`url is ${location.href}`));
```
4.启动详细日志记录，所有公共API调用和内部协议流量都将通过puppeteer命名空间下的debug模块进行记录
```js
 # Basic verbose logging
 env DEBUG="puppeteer:*" node script.js
 # Debug output can be enabled/disabled by namespace
 env DEBUG="puppeteer:*,-puppeteer:protocol" node script.js # everything BUT protocol messages
 env DEBUG="puppeteer:session" node script.js # protocol session messages (protocol messages to targets)
 env DEBUG="puppeteer:mouse,puppeteer:keyboard" node script.js # only Mouse and Keyboard API calls
 # Protocol traffic can be rather noisy. This example filters out all Network domain messages
 env DEBUG="puppeteer:*" env DEBUG_COLORS=true node script.js 2>&1 | grep -v '"Network'
 ```
### 爬虫实践
很多网页通过user-agent来判断设备，可以通过page.emulate(options)来进行模拟。options有两个配置项，一个为userAgent，另一个为viewport可以设置宽度(width)、高度(height)、屏幕缩放(deviceScaleFactor)、是否是移动端(isMobile)、有无touch事件(hasTouch)。
```js
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];
​
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://www.example.com');
  // other actions...
  await browser.close();
});
```
上述代码则模拟了iPhone6访问某网站，其中devices是puppeteer内置的一些常见设备的模拟参数。

很多网页需要登录，有两种解决方案：

1. 让puppeteer去输入账号密码

常用方法：点击可以使用page.click(selector[, options])方法，也可以选择聚焦page.focus(selector)。
输入可以使用page.type(selector, text[, options])输入指定的字符串，还可以在options中设置delay缓慢输入更像真人一些。也可以使用keyboard.down(key[, options])来一个字符一个字符的输入。

2. 如果是通过cookie判断登录状态的可以通过page.setCookie(...cookies)，想要维持cookie可以定时访问。
Tip：有些网站需要扫码，但是相同域名的其他网页却有登录，就可以尝试去可以登录的网页登录完利用cookie访问跳过扫码。

简单例子
```js
const puppeteer = require('puppeteer');
​
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://baidu.com');
  await page.type('#kw', 'puppeteer', {delay: 100});
  page.click('#su')
  await page.waitFor(1000);
  const targetLink = await page.evaluate(() => {
    return [...document.querySelectorAll('.result a')].filter(item => {
      return item.innerText && item.innerText.includes('Puppeteer的入门和实践')
    }).toString()
  });
  await page.goto(targetLink);
  await page.waitFor(1000);
  browser.close();
})()
```