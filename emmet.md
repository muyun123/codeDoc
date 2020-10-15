# vscode Emmet 语法 速查表



**Emmet是一款文本编辑器用来快速生成复杂的HTML代码，只要掌握一些常用的语法（类似于CSS选择器），就可以减少重复编码的工作。**

------

#### 1.调用方法

> ##### Emmet使用Tab作为自动生成HTML代码的触发器。

###### 输入完生成HTML的缩写语句后，按下Tab，即可生成对应的HTML代码

#### 2.相关语法

> ##### 后代：>

------

##### Child: >

**缩写**：`div>ul>li`



```xml
    <div>
        <ul>
            <li></li>
        </ul>
    </div>
```

> ##### 兄弟：+

------

##### Sibling: +

**缩写**：`div+p+bq`



```xml
    <div></div>
    <p></p>
    <blockquote></blockquote>
```

> ##### 上级元素：^

------

##### Climb-up: ^

**缩写**：`div+div>p>span+em^bq`



```xml
    <div></div>
    <div>
        <p><span></span><em></em></p>
        <blockquote></blockquote>
    </div>
```

**缩写**：`div+div>p>span+em^^bq`



```xml
    <div></div>
    <div>
        <p><span></span><em></em></p>
    </div>
    <blockquote></blockquote>
```

> ##### 分组：（）

------

##### Grouping: ( )

**缩写**：`div>(header>ul>li*2>a)+footer>p`



```xml
    <div>
        <header>
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </header>
        <footer>
            <p></p>
        </footer>
    </div>
```

**缩写**：`(div>dl>(dt+dd)*3)+footer>p`



```xml
    <div>
        <dl>
            <dt></dt>
            <dd></dd>
            <dt></dt>
            <dd></dd>
            <dt></dt>
            <dd></dd>
        </dl>
    </div>
    <footer>
        <p></p>
    </footer>
```

> ##### 重复多份：*

------

##### Multiplication: *

**缩写**：`ul>li*5`



```xml
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```

> ##### 编号：$

------

##### Item numbering: $

**缩写**：`ul>li.item$*5`



```xml
    <ul>
        <li class="item1"></li>
        <li class="item2"></li>
        <li class="item3"></li>
        <li class="item4"></li>
        <li class="item5"></li>
    </ul>
```

**缩写**：`h$[title=item$]{Header $}*3`



```xml
    <h1 title="item1">Header 1</h1>
    <h2 title="item2">Header 2</h2>
    <h3 title="item3">Header 3</h3>
```

**缩写**：`ul>li.item$$$*5`



```xml
    <ul>
        <li class="item001"></li>
        <li class="item002"></li>
        <li class="item003"></li>
        <li class="item004"></li>
        <li class="item005"></li>
    </ul>
```

**缩写**：`ul>li.item$@-*5`



```xml
    <ul>
        <li class="item5"></li>
        <li class="item4"></li>
        <li class="item3"></li>
        <li class="item2"></li>
        <li class="item1"></li>
    </ul>
```

**缩写**：`ul>li.item$@3*5`



```xml
    <ul>
        <li class="item3"></li>
        <li class="item4"></li>
        <li class="item5"></li>
        <li class="item6"></li>
        <li class="item7"></li>
    </ul>
```

> ##### ID和类属性

------

##### ID and CLASS attributes

**缩写**：`#header`



```xml
    <div id="header"></div>
```

**缩写**：`.title`



```jsx
    <div class="title"></div>
```

**缩写**：`form#search.wide`



```jsx
    <form action="" id="search" class="wide"></form>
```

**缩写**：`p.class1.class2.class3`



```jsx
    <p class="class1 class2 class3"></p>
```

> ##### 自定义属性

------

##### Custom attributes

**缩写**：`p[title="Hello world"]`



```xml
    <p title="Hello world"></p>
```

**缩写**：`td[rowspan=2 colspan=3 title]`



```xml
    <td rowspan="2" colspan="3" title=""></td>
```

**缩写**：`[a='value1' b="value2"]`



```xml
    <div a="value1" b="value2"></div>
```

> ##### 文本：{ }

------

##### Text: { }

**缩写**：`a{Click me}`



```xml
     <a href="">Click me</a>
```

**缩写**：`p>{Click }+a{here}+{ to continue}`



```xml
    <p>Click <a href="">here</a> to continue</p>
```

> ##### 隐式标签

------

##### Implicit tag names

**缩写**：`.class`



```ruby
    <div class></div>
```

**缩写**：`em>.class`



```xml
    <em><span class="class"></span></em>
```

**缩写**：`ul>.class`



```xml
    <ul> <li class="class"></li></ul>
```

**缩写**：`table>.row>.col`



```xml
    <table>
        <tr class="row">
            <td class="col"></td>
        </tr>
    </table>
```

##### 3.HTML

> *所有未知的缩写都会转换成标签，例如，foo → <foo></foo>*
> **缩写**：`!`



```xml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

------

> 特别声明：**文中演示代码来自于官网API：[http://docs.emmet.io/cheat-sheet/]

