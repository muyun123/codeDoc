<?php
$id = $_GET['id'];
$username = $_GET['username'];
$address = $_GET['address'];
$sex = $_GET['sex'];
$age = $_GET['age'];
$link = mysqli_connect('localhost','root','root');
if(!$link){
    exit('数据库链接失败');
}
mysqli_set_charset($link,'utf8');
mysqli_select_db($link,'bbs');
$sql = "insert into bbs_user(username,address,sex,age) value ('$username','$address','$sex','$age')";

$obj = mysqli_query($link,$sql);

if(mysqli_insert_id($link)){
    echo '添加成功<a href="sql.php">返回</a>';
}else{
    echo '添加失败';
}
mysqli_close($link);