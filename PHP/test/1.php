<?php
//1、链接数据库
$link = mysqli_connect('localhost','root','root');
//2、判断是否链接成功
if($link){
    exit('数据库链接失败');
}
//3、设置字符集
mysqli_set_charset($link,'utf8');
//4、选择数据库
mysqli_select_db($link,'bbs');
//5、准备SQL语句
$sql = "select * from bbs_user";
//6、发生SQL语句
$res= mysqli_query($link,$sql);
//7、处理结果集
$result = mysqli_fetach_assoc($res);
//8、关闭数据库
mysqli_close($link);