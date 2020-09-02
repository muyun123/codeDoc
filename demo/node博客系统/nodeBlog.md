[toc]

# node博客系统
## 业务CMS
- 数据库
    - MongoDB
    - mongoose
- 后端开发
    - Express
    - Jade
    - Validator
    - Session
    - Passport
- 前端界面
    - Bootstrap
    - FontAwesome
- 工程工具
    - NPM
    - Gulp

## Express
### 概念
>定义了API的地址、请求、响应方式
### 中间件
- Express应用的基本组成单元
- 中间件都有req、res、next参数
- 可处理业务、修改req、修改res、结束响应、
- 内置中间件、第三方中间件
- 实例：serve静态文件

### 项目初始化
>npm install -g express-generator

## mongose
### 快速上手

*请先安装 [MongoDB](http://www.mongodb.org/downloads) 和 [Node.js](http://nodejs.org/)。*

下一步，`npm`安装Mongoose:

```
$ npm install mongoose
```

首先要在项目中引入 mongoose ，然后连接本地的 `test` 数据库。

```javascript
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
```

`connect()` 返回一个状态待定（pending）的连接， 我们可以加上成功提醒和失败警告。

```javascript
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
```

Mongoose 里，一切都始于[Schema](http://www.mongoosejs.net/docs/guide.html)。 现在我们来看一个例子：

```javascript
var kittySchema = mongoose.Schema({
  name: String
});
```

很好，我们得到了一个带有 `String` 类型 `name` 属性的 schema 。 接着我们需要把这个 schema 编译成一个 [Model](http://www.mongoosejs.net/docs/models.html)：

```javascript
var Kitten = mongoose.model('Kitten', kittySchema);
```

model 是我们构造 document 的 Class。 在例子中，每个 document 都是一只喵，它的属性和行为都会被声明在 schema。 现在我们来“创造”一只猫：

```javascript
var felyne = new Kitten({ name: 'Felyne' });
```


吧它存到数据库里。 每个 document 会在调用他的 [save](http://www.mongoosejs.net/docs/api.html#model_Model-save) 方法后保存到数据库。 注意回调函数的第一个参数永远是 error 。

```javascript
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
```

后来我们收集了好多喵，就可以通过以下方法获取喵星人 [model](http://www.mongoosejs.net/docs/models.html) 里的所有数据：

```javascript
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
```

如果我们想获取特定的数据， 可以了解一下 [query](http://www.mongoosejs.net/docs/queries.html)。

```javascript
// 这么写可以获取所有 name 为 "Fluff" 开头的数据
Kitten.find({ name: /^fluff/ }, callback);
```

### 常用queryAPI
>[mongodb官网手册](https://docs.mongodb.com/manual/reference/operator/query-array/)

>[mongoseAPI网址](http://www.mongoosejs.net/docs/api.html#query_Query-or)

#### 增 
```js
var kittySchema = mongoose.Schema({
  name: String
});
var Kitten = mongoose.model('Kitten', kittySchema);
var fluffy = new Kitten({ name: 'fluffy' });
//每个 document 会在调用他的 save 方法后保存到数据库
fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
```
#### 删 
- remove
```js
Model.remove({ artist: 'Anne Murray' }, callback)
```
只有当传入 callback 时操作才会被执行。如果要强制不带 callback 就执行，你得先调用 remove() 然后调用 exec() 来让它执行
```js
// 不会执行
var query = Model.find().remove({ name: 'Anne Murray' })

// 会被执行
query.remove({ name: 'Anne Murray' }, callback)
query.remove({ name: 'Anne Murray' }).remove(callback)

// 没有 callback 就执行
query.exec()

// 总结
query.remove(conds, fn); // 执行
query.remove(conds)
query.remove(fn) // 执行
query.remove()
```
- deleteOne 最多删除一条文档。
```js
Character.deleteOne({ name: 'Eddard Stark' }, callback)
Character.deleteOne({ name: 'Eddard Stark' }).then(next)
```
- deleteMany 删除集合中 每一条 匹配条件的文档。
```js
Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }, callback)
Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }).then(next)
```
#### 改 
- update
```js
Model.where({ _id: id }).update({ title: 'words' })
// becomes
Model.where({ _id: id }).update({ $set: { title: 'words' }})
```
- 可用选项:

    - `safe` (boolean) 安全模式（默认值同 schema 中的定义（true））
    - `upsert` (boolean) 没有匹配文档时是否创建新文档 (false)
    - `multi` (boolean) 是否更新多条文档 (false)
    - `runValidators`: 如果设为 true，这条命令将执行 [update validators](http://www.mongoosejs.net/docs/validation.html#update-validators) 。 Update validators 依据 schema 校验更新选项。
    - `setDefaultsOnInsert`: 如果该选项跟 `upsert` 都为 true，创建新文档时 mongoose 会应用 schema 中指定的 [默认值](http://mongoosejs.com/docs/defaults.html) 。 该选项只能用于 MongoDB >= 2.4 ，因为依赖于 [MongoDB's `$setOnInsert` ](https://docs.mongodb.org/v2.4/reference/operator/update/setOnInsert/)操作符。
    - `strict` (boolean) 覆盖当前 update 的 `strict` 选项
    - `overwrite` (boolean) 禁用 update-only 模式，允许你替换整个文档 (false)
    - `context` (string) 如果设置为'query'并且runvalidator为on，这将引用更新验证运行的自定义验证器函数中的查询, 如果 `runValidators` 是 false 则什么都不做。

只有传入了回调函数，操作才会被执行。要想强制执行回调，你得先调用 update() 然后用 exec() 方法使其执行。
```js
var q = Model.where({ _id: id });
q.update({ $set: { name: 'bob' }}).update(); // not executed

q.update({ $set: { name: 'bob' }}).exec(); // executed

// 非 $atomic ops 的键都会被转换成 $set。
// 本句执行跟上例一样的命令。
q.update({ name: 'bob' }).exec();

// 用空文档替换更新
var q = Model.where({ _id: id }).setOptions({ overwrite: true })
q.update({ }, callback); // executes

// 用空文档进行多条替换更新
var q = Model.where({ _id: id });
q.setOptions({ multi: true, overwrite: true })
q.update({ });
q.update(callback); // executed

// 多条更新
Model.where()
     .update({ name: /^match/ }, { $set: { arr: [] }}, { multi: true }, callback)

// 再多一例多条更新
Model.where()
     .setOptions({ multi: true })
     .update({ $set: { arr: [] }}, callback)

// 默认是单条更新
Model.where({ email: 'address@example.com' })
     .update({ $inc: { counter: 1 }}, callback)
```

- updateMany(更新 所有 匹配 criteria 的文档（而非只是第一条）)
- updateOne(只 更新第一条匹配 criteria 的文档。)
#### 查
- find
```js
query.find({ name: 'Los Pollos Hermanos' }).find(callback)
```
- findOne (声明一个 findOne 查询。传给回调函数的查询结果是第一个查到的文档。)
```js
var query  = Kitten.where({ color: 'white' });
query.findOne(function (err, kitten) {
  if (err) return handleError(err);
  if (kitten) {
    // 如果没有匹配的文档 kitten 是 null
  }
});
```

#### 运算符
##### $equals(匹配等于指定值的值)
```js
query.where('age').equals(49);
// 等效于
query.where('age', 49);
```
##### $gt(匹配大于指定值的值)
##### $gte(匹配大于或等于指定值的值)
##### $lt(匹配小于指定值的值)
##### $lte(匹配小于或等于指定值的值。)
##### $ne(匹配所有不等于指定值的值。)
##### $nin(不匹配数组中指定的任何值)
```js
Thing.find().where('age').gt(21)
// or
Thing.find().gt('age', 21)
```

##### $in(匹配数组中指定的任何值)
##### $and(用逻辑联接查询子句`AND`返回与两个子句条件都匹配的所有文档。)
```js
query.and([{ color: 'green' }, { status: 'ok' }])
```
##### $not(反转查询表达式的效果，并返回与查询表达式*不*匹配的文档。)
##### $nor(用逻辑联接查询子句`NOR`将返回两个子句均不匹配的所有文档。)
```js
query.nor([{ color: 'green' }, { status: 'ok' }])
```
##### $or(用逻辑联接查询子句`OR`将返回符合任一子句条件的所有文档。)
```js
query.or([{ color: 'red' }, { status: 'emergency' }])
```
##### limit(指定查询结果的最大条数)
```js
query.limit(20)
```
##### skip(指定跳过的文档条数)
```js
query.skip(100).limit(20)
```
##### select(指定查询的数据包含或排除哪些字段)
使用字符串语法时，有 - 前缀的路径会被排除，没有 - 前缀的路径会被选择。
```js
// 选择 a 和 b 字段，排除其他的
query.select('a b');

// 排除 c 和 d 字段，选择其他的
query.select('-c -d');

// 如果存在已经有"-"前缀的字段，可以用对象标记法
query.select({ a: 1, b: 1 });
query.select({ c: 0, d: 0 });

// 强制包含已经在 schema level 排除的字段
query.select('+path')
```
##### count
```js
var countQuery = model.where({ 'color': 'black' }).count();

query.count({ color: 'black' }).count(callback)

query.count({ color: 'black' }, callback)

query.where('color', 'black').count(function (err, count) {
  if (err) return handleError(err);
  console.log('there are %d kittens', count);
})
```
##### sort排序
```js
// 按照 "field" 字段正序、"test" 字段倒序排列
query.sort({ field: 'asc', test: -1 });

// 等效于
query.sort('field -test');
```
##### populate 指定哪些字段需要关联查询（populated）其他文档
- Parameters
    - path «Object|String» 需要做表关联的字段路径，或者包含所有参数的对象
    - [select] «Object|String» 表关联查询要选择的字段
    - [model] «Model» 表关联的 model 。如果没有指定，将以 Schema 中 `ref` 字段为名称查找 model 进行关联。
    - [match] «Object» population 查询的条件
    - [options] «Object» population 查询的选项 (sort 等)
```js
Kitten.findOne().populate('owner').exec(function (err, kitten) {
  console.log(kitten.owner.name) // Max
})

Kitten.find().populate({
    path: 'owner'
  , select: 'name'
  , match: { color: 'black' }
  , options: { sort: { name: -1 }}
}).exec(function (err, kittens) {
  console.log(kittens[0].owner.name) // Zoopa
})

// alternatively
Kitten.find().populate('owner', 'name', null, {sort: { name: -1 }}).exec(function (err, kittens) {
  console.log(kittens[0].owner.name) // Zoopa
})
```