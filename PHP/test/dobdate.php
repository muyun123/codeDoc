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
$sql = "update bbs_user set username='$username',sex='$sex',age='$age',address='$address' where id='$id'";
$obj = mysqli_query($link,$sql);

if($obj&& mysqli_affected_rows($link)){
    echo '修改成功<a href="sql.php">返回</a>';
}else{
    echo '修改失败';
}
mysqli_close($link);