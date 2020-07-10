[toc]
# canvas
```html
<body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
</body>
<script type="text/javascript">
      function draw(){
        var canvas = document.getElementById('tutorial');
        //检查浏览器是否兼容
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
        }
      }
</script>
```
# API
## 矩形
- fillRect(x, y, width, height)  绘制一个填充的矩形
- strokeRect(x, y, width, height)  绘制一个矩形的边框
- clearRect(x, y, width, height)  清除指定矩形区域，让清除部分完全透明。

## 路径
- beginPath() 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
- closePath() 闭合路径之后图形绘制命令又重新指向到上下文中。
- stroke() 通过线条来绘制图形轮廓。
- fill() 通过填充路径的内容区域生成实心的图形。

>注意：当前路径为空，即调用beginPath()之后，或者canvas刚建的时候，第一条路径构造命令通常被视为是moveTo（），无论实际上是什么。出于这个原因，你几乎总是要在设置路径之后专门指定你的起始位置。

>注意：当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。

## 笔触
- moveTo(x, y)  将笔触移动到指定的坐标x以及y上。

## 线 
- lineTo(x, y)  绘制一条从当前位置到指定x以及y位置的直线。

## 圆弧
- arc(x, y, radius, startAngle, endAngle, anticlockwise)

画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。

radius为半径。startAngle以及endAngle参数用弧度定义了开始以及结束的弧度。这些都是以x轴为基准。参数anticlockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向
>arc()函数中表示角的单位是弧度，不是角度。角度与弧度的js表达式:
弧度=(Math.PI/180)*角度。(Math.PI = 3.14 = 180°)

## 二次贝塞尔曲线及三次贝塞尔曲线
- quadraticCurveTo(cp1x, cp1y, x, y)
绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。

- bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。

>笔触所在的位置就是开始点

## 样式颜色
- fillStyle = color
设置图形的填充颜色。

- strokeStyle = color
设置图形轮廓的颜色。
>注意: 一旦您设置了 strokeStyle 或者 fillStyle 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 fillStyle 或 strokeStyle 的值。
```
// 这些 fillStyle 的值均为 '橙色'
ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255,165,0)";
ctx.fillStyle = "rgba(255,165,0,1)";
```

- globalAlpha = transparencyValue
这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。
```
// 设置透明度值
  ctx.globalAlpha = 0.2;
```

## 线型 Line styles 线的样式
- lineWidth = value 设置线条宽度。

- lineCap = type 设置线条末端样式。
>type: butt(默认)，round 和 square

- lineJoin = type 设定线条与线条间接合处的样式。
>type:round, bevel 和 miter。默认是 miter。

- miterLimit = value 限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。

- getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。

- setLineDash(segments)  设置当前虚线样式。

- lineDashOffset = value  设置虚线样式的起始偏移量。

## 渐变
- createLinearGradient(x1, y1, x2, y2)
>createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。

- createRadialGradient(x1, y1, r1, x2, y2, r2)
>createRadialGradient 方法接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。

- gradient.addColorStop(position, color)
>addColorStop 方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF， rgba(0,0,0,1)，等等）

```
var lineargradient = ctx.createLinearGradient(0,0,150,150);
lineargradient.addColorStop(0,'white');
lineargradient.addColorStop(1,'black');
```

## 图案样式
- createPattern(image, type)
>该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。
```
var img = new Image();
img.src = 'someimage.png';
var ptrn = ctx.createPattern(img,'repeat');
```

## 阴影
- shadowOffsetX = float
>shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。

- shadowOffsetY = float
>shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。
- shadowBlur = float
>shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。
- shadowColor = color
>shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。

## 填充规则
我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。

两个可能的值：

 - "nonzero": non-zero winding rule, 默认值.
 - "evenodd":  even-odd winding rule.

```js
 ctx.fill("evenodd");
```

## 绘制文本
- fillText(text, x, y [, maxWidth])
在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.
- strokeText(text, x, y [, maxWidth])
在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.

```js
ctx.font = "48px serif";
ctx.fillText("Hello world", 10, 50);
ctx.strokeText("Hello world", 10, 50);
```
## 有样式的文本
- font = value
>当前我们用来绘制文本的样式. 这个字符串使用和 CSS font 属性相同的语法. 默认的字体是 10px sans-serif。
- textAlign = value
>文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值是 start。
- textBaseline = value
>基线对齐选项. 可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。
- direction = value
>文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。

## 预测量文本宽度
- measureText()
>将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。

```js
var text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
```
## 获得需要绘制的图片
canvas的API可以使用下面这些类型中的一种作为图片的源：

- HTMLImageElement
>这些图片是由Image()函数构造出来的，或者任何的<img>元素
- HTMLVideoElement
>用一个HTML的 <video>元素作为你的图片源，可以从视频中抓取当前帧作为一个图像
- HTMLCanvasElement
>可以使用另一个 <canvas> 元素作为你的图片源。
- ImageBitmap
>这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其它几种源中生成。

## 使用相同页面内的图片
我们可以通过下列方法的一种来获得与canvas相同页面内的图片的引用：

- document.images集合
- document.getElementsByTagName()方法
- 如果你知道你想使用的指定图片的ID，你可以用document.getElementById()获得这个图片

## 使用其它 canvas 元素
和引用页面内的图片类似地，用 document.getElementsByTagName 或 document.getElementById 方法来获取其它 canvas 元素。但你引入的应该是已经准备好的 canvas。