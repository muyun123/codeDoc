<?php
$id = $_GET['id'];
$link = mysqli_connect('localhost','root','root');
if(!$link){
    exit('数据库链接失败');
}
mysqli_set_charset($link,'utf8');
mysqli_select_db($link,'bbs');
$sql = "select * from bbs_user where id = $id";
$obj = mysqli_query($link,$sql);
$rows = mysqli_fetch_assoc($obj);


?>
<html>
<body>
    <div>
        <form action="dobdate.php?id=<?php echo $id ?>">
        <input type="hidden" value="<?php echo $id ?>" name="id">
        用户名：<input value="<?php echo $rows['username'] ?>" type="text" name="username"><br>
        地址：<input value="<?php echo $rows['address'] ?>" type="text" name="address"><br>
        性别：<input value="<?php echo $rows['sex'] ?>" type="text"name="sex"><br>
        年龄：<input value="<?php echo $rows['age'] ?>" type="text" name="age"><br>
        <input type="submit" name="" id="" value="确定修改">        
        </form>
    </div>
</body>
</html>