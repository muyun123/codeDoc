

## 第9章 jQ中的Ajax  

### 9.1 认识jQ中ajax的封装

jQ 对于ajax的封装有两层实现；
$.ajax 为底层封装实现；
基于 `$.ajax` ，分别实现了`$.get` 与`$.post` 的高层封装实现；

### 9.2 ajax 的底层实现

基本语法：
**$.ajax(obj)**

对象的参数设置及含义：

**async：** 	     	布尔类型，代表是否异步，true代表异步，false同步，默认为true
**cache：**      	是否缓存，布尔类型，true代表缓存，false代表不缓存，默认为true
**complete：**    	当Ajax状态码（readyState）为4的时候所触发的回调函数
**contentType：** 	发送信息至服务器时内容编码类型；(默认: "application/x-www-form-urlencoded") 
**data：** 			要求是一个字符串格式，Ajax发送时所传递的数据
**dataType：** 		期待的返回值类型，可以是text，xml，json，默认为text类型
**success：** 		当Ajax状态码为4且响应状态码为200时所触发的回调函数
**type：** 			Ajax发送网络请求的方式，(默认: "GET")；
**url：** 			请求的url地址

案例代码：

**GET 请求**

```html
<body>
    <input type="button" value="点击" id="btu">
</body>
<script>
    $('#btu').click(function(){
        //get请求
        $.ajax({
            url:'9-2.php?id=11',
            success:function(data){
                alert(data);
            }
        });
    });
</script>
```

**POST 请求**

```html
//POST请求及同步异步
$.ajax({
    url:'9-2.php',
    type:'post',
    data:'id=1111',
    success:function(data){
        alert(data);
    },
    // async:false,
});
// alert(22); //检验同步异步
```

**设置返回值类型**

```html
//设置返回值类型
$.ajax({
    url:'9-2.php?id=11',
    success:function(data){
        alert(data.a);
    },
    //jq接到后台的json字符串，转成对象后呈现给用户
    dataType:'json',
});
```

**PHP后台代码**

```php
// sleep(3);
if($_GET['id']==11){  //get
// if($_POST['id']==11){   //post
// echo 'jq_ajax';
    echo json_encode(['a'=>'2222']); //json 返回
}else{
    echo 'hhh';
}
```

### 9.3 ajax 的高层实现

#### 9.3.1 GET 应用

基本语法：
**$.get(url, [data], [callback], [type])**

url:待载入页面的URL地址
data:待发送 Key/value 参数。
callback:载入成功时回调函数。
type:返回内容格式，xml, html, script, json, text, _default。

案例代码：

```html
<script>
    $('#btu').click(function(){
        $.get('9-2.php',function(data){
            alert(data.a);
        },'json');
    });
</script>
```

但是注意：IE浏览器存在缓存问题；
**解决缓存问题** 修改：

```
<script>
    $('#btu').click(function(){
        var da = {_:new Date().getTime()};
        $.get('9-2.php',da,function(data){
            alert(data.a);
        },'json');
    });
</script>
```

#### 9.3.2 POST 应用

**$.post(url, [data], [callback], [type])**
url:发送请求地址。
data:待发送 Key/value 参数。
callback:发送成功时回调函数。
type:返回内容格式，xml, html, script, json, text, _default。

案例代码：

```html
<script>
    $('#btu').click(function(){
        $.post('9-2.php',
        {id:'11'},
        function(data){
            alert(data.a);
        },'json');
    });
</script>
```

## 第10章 jQ中的跨域问题

Ajax技术受到浏览器同源策略的限制，禁止从一个域上向另外一个域发送请求。
也就是说，受到请求的 URL 的域必须与当前 Web 页面的域相同。这意味着浏览器隔离来自不同源的内容，以防止它们之间的操作。

![](/jQuery/10-2.png)

后台不同域下的PHP代码

```php
$arr = ['a'=>1,'b'=>'san','c'=>'wu','d'=>4];
$str = json_encode($arr);
echo $_GET['fn']."($str)";
```

前端jq跨域的三种用法

```html
<script>
    $('#btu').click(function(){
        //$.ajax 方法的jsonp跨域
        $.ajax({
            url:'http://bbs.com/1.php?fn=?',
            dataType:'jsonp',
            success:function(data){
                alert(data.b);
            }
        });

        //$.get 方法的jsonp跨域
        $.get('http://bbs.com/1.php?fn=?',function(data){
            alert(data.b);
        },'jsonp');
        
        //  $.getJSON 方法的jsonp跨域
        $.getJSON(
            'http://bbs.com/1.php?fn=?',
            function(data){
                alert(data.b);
            },
        );
    });
</script>
```

