<?php
//创建画布
$image = imagecreatetruecolor(600,600);
//创建颜色
$red = imagecolorallocate($image,255,0,0);
//用GD库给咱的函数去画画
iamgeline($imgae,0,0,600,600,$red);//线段
//告诉浏览器你的mime值
header("Content-type:image/png");
//输出到浏览器或者存放到你的本地
imagepng($image);
//销毁资源
imagedestroy($image);