# jQuery

## 第1章 jQuery简介

### 1.1 JavaScript库的概念

JavaScript开发的过程中，处理浏览器的兼容很复杂而且很耗时，于是一些封装了这些操作的库应运而生。这些库还会把一些常用的代码进行封装。

把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。（animate.js、common.js）

常见的JavaScript 库 - jQuery、Prototype、MooTools。其中jQuery是最常用的一个

jQuery其实就是一个js文件，里面封装了一大堆的方法方便我们的开发，其实就是一个加强版的common.js，因此我们学习jQuery，其实就是学习jQuery这个js文件中封装的一大堆方法。

### 1.2 jQuery的优点好处

```
jQuery设计的宗旨是'Write Less，Do More'，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的操作，优化HTML文档操作、事件处理、动画设计和Ajax交互。
jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器。
极大地简化了 JavaScript 编程。
```

### 1.3 jQuery的版本

```
jQuery版本有很多，分为1.x 2.x 3.x

1.x版本：能够兼容IE678浏览器
2.x版本：不兼容IE678浏览器
1.x和2.x版本jquery都不再更新版本了，现在只更新3.x版本。
3.x版本：不兼容IE678，更加的精简（在国内不流行，因为国内使用jQuery的主要目的就是兼容IE678）

国内多数网站还在使用1.x的版本
```
[jQuery官网](http:// jquery.com)


### 1.4 体验jQuery

案例：显示与设置内容

```javascript
	<input type="button" value="显示" id="btn1">
	<input type="button" value="结束" id="btn2">

    <div>请欣赏动画</div>
	<div>千呼万唤始出来</div>
	<img src="img/1.jpg" style="display:none">
	<img src="img/2.jpg" style="display:none">
        
	<script type="text/javascript" src="jquery.js"></script>
	<script>
		$(document).ready(function () {
		    $('#btn1').click(function () {
		        $('img').show(2000);
		    });

		    $('#btn2').click(function () {
		        $('div').text('下集再见');
		        $('img').hide(2000);
		    });
		});
	</script>
```

优点总结：

```javascript
-查找元素的方法多种多样，非常灵活
-拥有隐式迭代(自动循环遍历)特性，因此不再需要手写for循环了。
-完全没有兼容性问题。
-实现动画非常简单，而且功能更加的强大。
-代码简单、粗暴。
```

### 1.5 jQuery中顶级对象

jQuery中的顶级对象是$或jQuery

```javascript
用于：
获取jQuery对象
入口函数（页面加载事件）
高级功能
```

注意：jQuery中的$和JQuery关键字本身为同一对象；



```
$ 可以认为就是 一个特殊构造函数  ； 可以使用$(选择器) 方式调用$，得到一个对象，在对象上可以调用$的实例方法
也可以使用$.方法名  调用静态方法。  比如 遍历数组对象的  $.each() 相当于for循环
```



### 1.6 jQuery中页面加载事件

使用jQuery的三个步骤：

```javascript
引入jQuery文件
入口函数（定义页面加载事件）
功能实现
```

关于jQuery的入口函数：

```javascript
// 第一种写法
$(document).ready(function() {
	
});
// 第二种写法
$().ready(function() {
	
});
// 第三种写法
$(function() {
	
});
```

jQuery入口函数与window.onload的对比

```javascript
JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。
```

## 第2章 选择器

jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。注意：jQuery选择器返回的是jQuery对象。

jQuery选择器有很多，基本兼容了CSS所有的选择器，并且jQuery还添加了很多更加复杂的选择器。（查看jQuery文档）

jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。所以我们平时真正能用到的只是少数的最常用的选择器。



### 2.1 jQuery基本选择器（重点）

| 名称    | 用法                 | 描述                     |
| ----- | ------------------ | :--------------------- |
| ID选择器 | $('#id');          | 获取指定ID的元素              |
| 类选择器  | $('.class');       | 获取同一类class的元素          |
| 标签选择器 | $('div');          | 获取同一类标签的所有元素           |
| 并集选择器 | $('div,p,li');     | 使用逗号分隔，只要符合条件之一就可。     |
| 交集选择器 | $('div.redClass'); | 获取class为redClass的div元素 |

- 总结：跟css的选择器用法一模一样。

语法模板： 00-语法模板.html（需要包含jquery.js）

```javascript

<script type="text/javascript">
	//常用选择器
	//根据id获取元素 获取到的结果：类数组对象
	console.log( $('#div0') );
	console.log( $('#div0')[0] );
	//根据class获取元素
	console.log( $('.div_1') );
	//根据标签名称来获取元素
	console.log( $('div') );
	//根据属性获取元素
	console.log( $('input[name=username]') );
	//根据表单元素属性获取元素
	console.log( $(':checked') );
</script>
```



### 2.2 jQuery层级选择器（重点）

| 名称    | 用法            | 描述                              |
| ----- | ------------- | :------------------------------ |
| 子代选择器 | $('ul > li'); | 使用-号，获取儿子层级的元素，注意，并不会获取孙子层级的元素  |
| 后代选择器 | $('ul li');   | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等 |

- 跟CSS的选择器一模一样。



### 2.3 jQuery过滤选择器（了解为主）

- 这类选择器都带冒号:

| 名称         | 用法                                 | 描述                                 |
| ---------- | ---------------------------------- | :--------------------------------- |
| :eq（index） | $('li:eq(2)').css('color', 'red'); | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
| :odd       | $('li:odd').css('color', 'red');   | 获取到的li元素中，选择索引号为奇数的元素              |
| :even      | $('li:even').css('color', 'red');  | 获取到的li元素中，选择索引号为偶数的元素              |



### 2.4 jQuery筛选方法（重点）

- 筛选选择器的功能与过滤选择器有点类似，但是用法不一样，筛选选择器主要是方法。

| 名称               | 用法                        | 描述                             |
| ------------------ | --------------------------- | :------------------------------- |
| children(selector) | $('ul').children('li')      | 相当于$('ul-li')，子类选择器     |
| find(selector)     | $('ul').find('li');         | 相当于$('ul li'),后代选择器      |
| siblings(selector) | $('#first').siblings('li'); | 查找兄弟节点，不包括自己本身。   |
| parent()           | $('#first').parent();       | 查找父亲                         |
| eq(index)          | $('li').eq(2);              | 相当于$('li:eq(2)'),index从0开始 |
| next()             | $('li').next()              | 找下一个兄弟                     |
| prev()             | $('li').prev()              | 找上一次兄弟                     |
| closest            | $('li').closest('ul')       | 找最近一个祖先元素               |

语法模板： 00-语法模板.html（需要包含jquery.js）


```javascript
<script type="text/javascript">
    //常用筛选方法
    //获取爱好对应的div
    var hobby = $('#hobby');
    //获取 hobby 父元素
    console.log( $('#hobby').parent() );
    //获取 hobby 子元素
    console.log( $('#hobby').children() );
    //获取 hobby 最近的祖先元素
    console.log( $('#hobby').closest('form') );
    //获取 hobby 所有后代元素
    console.log( $('#hobby').find('input') );
    //获取 hobby 下一个兄弟元素
    console.log( $('#hobby').next() );
    //获取 hobby 前一个兄弟元素
    console.log( $('#hobby').prev() );
    //获取 hobby 所有兄弟元素
    console.log( $('#hobby').siblings() );
</script>
```



## 第3章 jQuery对象和DOM对象

### 3.1 jQuery对象和DOM对象的区别

**DOM对象**

```
用原生JavaScript获取的DOM对象
	通过document.getElementById()  反馈的是元素(DOM对象)
通过document.getElementsByTagName()获取到的是什么？
	伪数组(集合)，集合中的每一个对象是DOM对象
```

**jQuery对象**

```
jQuery对象 用$()的方式获取的对象
jQuery对象又可以叫做包装集(包装的DOM对象的集合)
```

**区别**

jQuery对象不能使用DOM对象的成员，DOM对象不能使用jQuery对象的成员

```javascript
<div id="box"></div>
<script>
    // DOM对象
    var box = document.getElementById('box');
    // 错误
    box.text('hello');
    // 正确
    box.innerText = 'hello';

    // jQuery对象，jQuery对象加前缀$，用以区分DOM对象
    var $box = $('#box');
    // 错误
    $box.innerText = 'hello';
    // 正确
    $box.text('hello');
</script>
```

### 3.2 jQuery对象和DOM对象的相互转换

```javascript
jQuery对象转换成DOM对象：   
	jQuery对象.get(索引值); 
	jQuery对象[索引值] 
    	jQuery对象是包装集(集合)，从集合中取数据可以使用索引的方式
DOM对象转换成jQuery对象：   
	$(DOM对象) 只有这一种方法;
```



## 第4章 简单事件绑定

```javascript
所有事件在jquery中都是jquery对象的方法
click(handler)			单击事件
mouseover(handler)		鼠标悬浮事件
mouseout(handler)		鼠标离开事件
...
```

```javascript
<input type="button" value="我是一个按钮" id="btn">
<script>
	$(function(){
    	$('#btn').click(function(){
            alert("来了老弟~");
        });
	});	  
</script>
```

绑定事件时，jquery对象中有多个dom元素，则自动给所有元素均绑定事件。

## 第5章 jQuery操作属性

### 5.1 attr操作

- 设置单个属性

```javascript
// 第一个参数：需要设置的属性名
// 第二个参数：对应的属性值
// $obj.attr(name, value);
// 用法举例
$('img').attr('title','哎哟，不错哦');
$('img').attr('alt','哎哟，不错哦');
```

- 设置多个属性

```javascript
// 参数是一个对象，包含了需要设置的属性名和属性值
// $obj.attr(obj)
// 用法举例
$('img').attr({
    title:'哎哟，不错哦',
    alt:'哎哟，不错哦',
    style:'opacity:.5'
});
```

- 获取属性

```javascript
// 传需要获取的属性名称，返回对应的属性值
// $obj.attr(name)
// 用法举例
var oTitle = $('img').attr('title');
alert(oTitle);
```

- 移除属性

```javascript
// 参数：需要移除的属性名，
// $obj.removeAttr(name);
// 用法举例
$('img').removeAttr('title');
```

### 5.2 prop操作

- 在jQuery1.6之后支持，对于checked、selected、disabled这类boolean类型的属性来说，不能用attr方法，只能用prop方法。

```javascript
// 设置属性
$(':checked').prop('checked',true);
// 获取属性
$(':checked').prop('checked');// 返回true或者false
```





### 5.3 val()/text()/html()值操作

```javascript
$obj.val()		获取或者设置表单元素的value属性的值
$obj.html() 	对应innerHTML
$obj.text()		对应innerText
以上三个方法：不传参数 表示获取值； 传递一个参数值，表示设置
```

### 5.4 class操作

- 添加样式类

```javascript
// name：需要添加的样式类名，注意参数不要带点.
// $obj.addClass(name);
// 例子,给所有的div添加one的样式。
$('div').addClass('one');
```

- 移除样式类

```javascript
// name:需要移除的样式类名
// $obj.removeClass('name');
// 例子，移除div中one的样式类名
$('div').removeClass('one');
```

- 判断是否有某个样式类

```javascript
// name:用于判断的样式类名，返回值为true false
// $obj.hasClass(name)
// 例子，判断第一个div是否有one的样式类
$('div').hasClass('one');
```

- 切换样式类

```javascript
// name:需要切换的样式类名，如果有，移除该样式，如果没有，添加该样式。
// $obj.toggleClass(name);
// 例子
$('div').toggleClass('one');
```

### 5.5 隐式迭代

1. 设置操作的时候，如果是多个元素，那么给所有的元素设置相同的值

2. 获取操作的时候，如果是多个元素，那么只会返回第一个元素的值。

   

## 第6章 jQuery操作样式

### 6.1 CSS操作

- 功能：设置或者修改样式，操作的是style属性。

- 操作单个样式

```javascript
// name：需要设置的样式名称
// value：对应的样式值
// $obj.css(name, value);
// 使用案例
$('#one').css('background','gray');// 将背景色修改为灰色
```

- 设置多个样式

```javascript
// 参数是一个对象，对象中包含了需要设置的样式名和样式值
// $obj.css(obj);
// 使用案例
$('#one').css({
    'background':'gray',
    'width':'400px',
    'height':'200px'
});
```

- 获取样式

```javascript
// name:需要获取的样式名称
// $obj.css(name);
// 案例
$('div').css('background-color');
```

注意：获取样式操作只会返回第一个元素对应的样式值。



### 6.2 jQuery尺寸和位置操作

#### 6.2.1 width方法与height方法

- 设置或者获取高度，不包括内边距、边框和外边距

```javascript
// 带参数表示设置高度
$('img').height(200);
// 不带参数获取高度
$('img').height();
```

获取网页的可视区宽高

```javascript
// 获取可视区宽度
$(window).width();
// 获取可视区高度
$(window).height();
```

#### 6.2.2 innerWidth/innerHeight/outerWidth/outerHeight

```javascript
innerWidth()/innerHeight()	方法返回元素的宽度/高度（包括内边距）。
outerWidth()/outerHeight()  方法返回元素的宽度/高度（包括内边距和边框）。
outerWidth(true)/outerHeight(true)  方法返回元素的宽度/高度（包括内边距、边框和外边距）。
```

#### 6.2.3 scrollTop与scrollLeft

- 设置或者获取垂直滚动条的位置

```javascript
// 获取页面被卷曲的高度
$(window).scrollTop();
// 获取页面被卷曲的宽度
$(window).scrollLeft();
```

#### 6.2.4 offset方法与position方法

- offset方法获取元素距离document的位置，position方法获取的是元素距离有定位的父元素(offsetParent)的位置。

```javascript
// 获取元素距离document的位置,返回值为对象：{left:100, top:100}
$(selector).offset();
// 获取相对于其最近的有定位的父元素的位置。
$(selector).position();
```



## 第7章 each方法遍历

- jQuery的隐式迭代会对所有的DOM对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。

作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数

```javascript
// 参数一表示当前元素在所有匹配元素中的索引号
// 参数二表示当前元素（DOM对象）
$(selector).each(function(index,element){});
```



## 第8章 jQuery事件机制

- JavaScript中已经学习过了事件，jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。

### 8.1 jQuery事件发展历程(了解)

简单事件绑定--bind事件绑定--delegate事件绑定--on事件绑定(推荐)

- 简单事件注册

```javascript
click(handler)			单击事件
mouseenter(handler)		鼠标进入事件
mouseleave(handler)		鼠标离开事件
```



- bind方式注册事件（不用）

```javascript
// 第一个参数：事件类型
// 第二个参数：事件处理程序
$('p').bind('click mouseenter', function(){
    // 事件响应方法
});
```



- delegate注册委托事件（不用）

```javascript
// 第一个参数：selector，要绑定事件的元素
// 第二个参数：事件类型
// 第三个参数：事件处理函数
$('.parentBox').delegate('p', 'click', function(){
    // 为 .parentBox下面的所有的p标签绑定事件
});
```



### 8.2 on注册事件(重点)

- jQuery1.7之后，jQuery用on统一了所有事件的处理方法。
- 强烈建议使用。

on注册简单事件

```javascript
// 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定。
$(selector).on( 'click', function() {});
```

on注册事件委托

```javascript
// 表示给$(selector)绑定代理事件，当必须是它的内部元素span才能触发这个事件，支持动态绑定
$(selector).on( 'click','span', function() {});
```



on注册事件的语法：

```javascript
// 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）
// 第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将由自己执行。
// 第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）
// 第四个参数：handler，事件处理函数
$(selector).on(events[,selector][,data],handler);
```

### 8.3 事件解绑

- unbind方式（不用）

```javascript
$(selector).unbind(); // 解绑所有的事件
$(selector).unbind('click'); // 解绑指定的事件
```

- undelegate方式（不用）

```javascript
$( selector ).undelegate(); // 解绑所有的delegate事件
$( selector).undelegate( 'click' ); // 解绑所有的click事件
```

- off方式（推荐）

```javascript
// 解绑匹配元素的所有事件
$(selector).off();
// 解绑匹配元素的所有click事件
$(selector).off('click');
```

### 8.5 触发事件

```javascript
$(selector).click(); // 触发 click事件
$(selector).trigger('click');
```

### 8.6 jQuery事件对象

jQuery事件对象其实就是js事件对象的一个封装，处理了兼容性。

```javascript
// screenX和screenY	对应屏幕最左上角的值
// clientX和clientY	距离页面左上角的位置（忽视滚动条）
// pageX和pageY	距离页面最顶部的左上角的位置（会计算滚动条的距离）

// event.keyCode	按下的键盘代码
// event.data	存储绑定事件时传递的附加数据

// event.stopPropagation()	阻止事件冒泡行为
// event.preventDefault()	阻止浏览器默认行为
// return false:既能阻止事件冒泡，又能阻止浏览器默认行为。
```



## 第9章 jQuery动画效果

- jQuery提供了三组基本动画，这些动画都是标准的、有规律的效果，jQuery还提供了自定义动画的功能。
- 演示动画效果  [08-演示jQuery动画（animate）.html]

### 9.1 三组基本动画

- 显示(show)与隐藏(hide)与切换(toggle)是一组动画：
- 滑入(slideUp)与滑出(slideDown)与切换(slideToggle)，效果与卷帘门类似
- 淡入(fadeIn)与淡出(fadeOut)与切换(fadeToggle)

```javascript
$obj.show([speed], [callback]);
// speed(可选)：动画的执行时间
	 // 1.如果不传，就没有动画效果。如果是slide和fade系列，会默认为normal
	 // 2.毫秒值(比如1000),动画在1000毫秒执行完成(推荐)
     // 3.固定速度字符串，slow(200)、normal(400)、fast(600)，如果传其他字符串，则默认为normal。
// callback(可选):执行完动画后执行的回调函数

slideDown()/slideUp()/slideToggle();同理
fadeIn()/fadeOut();fadeToggle();同理
```

### 9.2 自定义动画

- animate: 自定义动画

```javascript
$(selector).animate({params},[speed],[easing],[callback]);
// {params}：要执行动画的CSS属性，带数字（必选）
// speed：执行动画时长（可选）
// easing:执行效果，默认为swing（缓动）  可以是linear（匀速）
// callback：动画执行完后立即执行的回调函数（可选）
```

### 9.3 动画队列与停止动画

- 在同一个元素上执行多个动画，那么对于这个动画来说，后面的动画会被放到动画队列中，等前面的动画执行完成了才会执行（联想：火车进站）。

```javascript
// stop方法：停止动画效果
stop(clearQueue, jumpToEnd);
// 第一个参数：是否清除队列
// 第二个参数：是否跳转到最终效果
```



## 第10章 jQuery节点操作

### 10.1 创建节点

```javascript
// $(htmlStr)
// htmlStr：html格式的字符串
$('<span-这是一个span元素</span-');
```

### 10.2 添加节点

```javascript
append  appendTo		在被选元素的结尾插入内容   父.append(子)  子.appendTo(父)
prepend prependTo		在被选元素的开头插入内容   父.prepend(子) 子.prependTo(父)
before  insertBefore	在被选元素之后插入内容		后.before(前)  前.insertBefor(后)
after	insertAfter		在被选元素之前插入内容 	前.after(后)   后.insertAfter(前)
```

### 10.3 清空节点与删除节点

- empty：清空指定节点的所有元素，自身保留(清理门户)

```javascript
$('div').empty(); // 清空div的所有内容（推荐使用，会清除子元素上绑定的事件）
$('div').html('');// 使用html方法来清空元素，不推荐使用，绑定的事件不会被清除。
```

- remove：相比于empty，自身也删除（自杀）

```javascript
$('div').remove();
```



### 10.4 克隆节点

- 作用：复制匹配的元素

```javascript
// 复制$(selector)所匹配到的元素（深度复制）
// cloneNode(true)
// 返回值为复制的新元素，和原来的元素没有任何关系了。即修改新元素，不会影响到原来的元素。
$(selector).clone();//克隆元素本身及后代
$(selector).clone(true);//克隆元素本身及后代以及绑定的事件
```



## 第11章 jQuery工具方法

### 11. 1 数组和对象操作

①$.inArray(value, array, [fromIndex])  

确定第一个参数在数组中首次出现的位置，从0开始计数(如果没有找到则返回 -1 )。

value:用于在数组中查找是否存在

array:待处理数组。

fromIndex:用来搜索数组队列，默认值为0。

```
$.inArray(1,[1,2,3,1]);

$.inArray(1,[1,2,3,1],2);
```

②$(‘选择器’).toArray();	把jQuery集合中所有DOM元素恢复成一个数组。

```
$('div').toArray();
```

③$.merge(first, second); 合并数组

```
$.merge([1,2,3], [4,3,2]);
```

④$.parseJSON(str); 解析json字符串为对象，等价于 JSON.parse(str);

```
$.parseJSON('{"name":"zhangfei","age":30}');
```



### 11.2 字符串操作

$.trim(str) 去除字符串两边的空格， 等价于  str.trim()  

```
$.trim('  123   ');
```



### 11.3、类型操作

```
$.type(obj)  判断数据类型  typeof
 
$.isArray(obj) 判断是否数组

$.isFunction(obj) 判断是否函数

$.isEmptyObject(obj) 判断是否空对象（没有成员）
 
$.isPlainObject(obj) 判断是否纯对象（字面量语法{}或实例化new 构造函数 定义的对象）

$.isNumeric(obj) 判断是否数字（数字型或字符串型数字）
```



## 第12章 插件

### 12.1 jQuery插件开发语法

给jQuery增加方法的两种方式

```javascript
$.method = fn		静态方法
$.fn.method = fn	实例方法
```

### 12.2 常用插件

- 弹出层插件 layer
  
  - [layer插件](https://github.com/sentsin/layer)
- 放大镜插件
  
  - [jQuery.zoom](http://www.jacklmoore.com/zoom/)
- 轮播图插件
  - [http://sorgalla.com/jcarousel/](http://sorgalla.com/jcarousel/)
  - [https://github.com/OwlCarousel2/OwlCarousel2](https://github.com/OwlCarousel2/OwlCarousel2)
- 图片懒加载插件
  
  - [jQuery.lazyload](https://github.com/tuupola/jquery_lazyload)
- jQueryUI
  
- 常用的2-3个功能演示
  
- [图片放大](https://github.com/fat/zoom.js)

- [github上搜索](http://www.github.com)

  ### 案例

- 增加一个静态方法，实现两个数的和，插件

```javascript
(function ($) {
  $.add = function (a, b) {
    return a + b;
  }
})(jQuery)

$.add(5, 6);
```
