# 【变量】
变量就是可以改变的量

变量就是一个盒子，专门存储东西的，在程序的执行过程当中是可以发生改变的在php当中必须要用5开头重点

命名规范
- 1、以5开始，后面可以接英文字符
- 2、严格区分大小写
- 3、不要以数字和特殊字符开头
- 4、它可以用中文，我强烈建议不要使用
- 5、下划线不属于特殊字符
- 6、数字可以加在中间或者结尾处
- 7、变量名字要有意义
- 8、要照着你们公司的规范来

命名规则：
>起名字一定要有意义不要给我5a sb$c谁这么写谁不要脸我除外遵循驼峰命名法或者变量声明时候等号两边加上空格

变量的操作
- 1、给变量赋值=
- 2、输出变量echo
- 3、判断一个变量是否存 isset（）；
- 4、销毁变量 unset（）；

# 【单引号和双引号的区别】
- 1、单引号不能解析变量，双引号可以解析变量2、双引号执行转译字符，单引号不转译\n Vr Vt\
- 3、它执行转译心和！
- 4、能使用单引号就不适用双引号，为什么？因为单引号效率要不双引号快
- 5、如果是字符串和变量一起的时候用，来链接
- 6、双引号里面插入单引号，单引号里面插入变量，变量会解析
- 7、如果双引号里面插入变量的时候请在后面加上空格或者，号，不然计算机会认为你是一体的或者用大括号抱起来注意，当变量和字符串想在一起的时候有黏粘的口水“点"来拼接

# 【数据类）
标量（四个）
 - 整型（int integer整数）
>1 12 43 -78
 - 浮点型（float）
>4.25 -0.12
- 布尔型
>bool boolean
真和假 true&&false
- 字符串（string）
>在程序里画你用单引号或者双引号引起来的东西就是字符申
- 混合类型（复合类型）以后会讲的
- 数组（array）
- 对象（object）
- 特殊类型
- 空（nul1）
- 资源（resource）
>资源就是咱们电脑上的图片avi rvmb mp3网络请求都是资源

# 【强制类型转换】
- intvwal（）//转为整型
- floatval（）/7转为浮点型
- atrval（）//转为字符串
- boolva1（）//转为布尔值

# 【强利类型转换总结】
- 1、空转化为整型会是0
- 2、空转化为浮点型变成浮点型的0
- 3、空转化为字符串会成为空字符串tip：中间不能有任何字符，包括空格
- 4、整型如果后面有字符串，会把字符串干掉留着前面的数字
- 5、浮点型如果后面有字符串，会把字符串干掉留着前面的数字包括小数点以后的123123.123

# 【判断数据类型常用函数】
- ia array（）；数组
- is string（）；字符串
- is_bool（）；有尔
- is_float（）；浮点
- is object（）；对象
- is int（）；整型
- is_numeric（）；数值
- is_resource（）；资源
- is_nul1（）；空
- is scalar（）；标量
- gettype（）；//它只获取类型var_dump（）；//输出值还有类型


# 【常量】
常量的定义

常量是程序运行的时候是不可以改变的量
>定义格式：define（’常量名字’，’常量的值’）；

注意事项
- 1、不能重复定义
- 2、常量的名字咱们一般用大写字母3、常量的值只能是标量
- 4、常量的作用域是全局的5、输出的时候没有$符号6、常量不能写到字符串中
# 【判断常量是否被定义】
defined（'常量名’）；
# 【系统常量】
- _FILE_//找打你的文件
- _LINE_//你代码所在的行数在第几个行的意思
- _DIR_//找到你当前访问文件所在的目录
- PHPOS//获取系统信息
- PHPVERSION//获取版本信息
- _FUNCTION_//获取当前函数名
- M_PI园周率

（了解）
- _MHTHOD_//获取当前成员方法名
- _NAMESPACE_//获取当前命名空间名字
- _TRAIT_/7获取当前TRAIT名字（多继承）
- _CLASS_//获取当前类名

# 【算术运算得】
\+  \-  \*   / %求模取余数
# 【赋值运算符】
=  -=  +=  *=  /+  %=  .=
# 【自增自减运算符】
++ --
# 【比较运算符】
\> < >= <= == === != !==

== 等于只判断值而不比较数据的类型

=== 不仅仅比较值还要比较类型

# 【逻辑运算符】
&&  ||  ！

&& 逻辑与并且有一个为假就是假多个为假的还是假只有同时为真的时候才是真

|| 逻辑或或者只要有一个为真就是真多个同时为假才是假的

！就是假变成真的真的变成假的

# 【为false几种情况】
- 1、整型的o在进行判断的时候为假，整型的1在判断的时候为真234
- 2、如果浮点的0.0000000都是假的只要后面有一个是非零的数字即为真
- 3、空字符串为假’’如果中间有一个字符都是真那怕是一个空格
- 4、空字符串的o即为假其他皆为真
- 5、空数组为假
- 6、nul1作为判断条件的时候是假的
# 【流程控制】
```
//单分支结构
```if（条件）{
    真区间
}
//双分支结构
if（条件）{真区间
}else{
假区间
}
```

# 【function】
定义函数的关键字
# 【函数命名规范】
写咱们的变量名几乎一样
- 1、函数名不区分大小写
- 2、函数名字使用英文，遵循规范
- 3、数字可以加在中间或者是后面
- 4、下划线不属于特殊符号
- 5、不用特殊符号
- 6、命名的时候要有意义
- 7、遵循驼峰或者下划线
- 8、不能使用系统给咱们的函数名还有系统给的关键字
# 【基本格式】
- 1、函数都要以关键字function 开始
- 2、函数名后面要紧跟小括号
- 3、小括号下面跟着大括号，大括号里面是函数体
- 4、函数调用需要函数名加上小括号；

【没有参数，没有返回值】

# 【有参数没有返回值】
```
function show（Sname=朴槿’，Sval=总统）//Sname="$val="；
{
    echo’你的名字是’，Sname.’我的属性是’，$val.'<br/>'；
}
```
参数就是name val 

如果你写多个的话，用逗号隔开 可以写多个 没有上线

就相当于朴槿惠赋值给变量name
# 【有参数有返回值】
重点
- return只是返回并没有输出
- return后面代码不执行
# 【return】
- 1、return关键字只要碰到立马结束，后面代码统统不执行
- 2、如果你想有多个返回值的时候，用数组去搞
- 3、函数调用表达式的值就是函数的返回值


# 【默认参数】
- 1、默认参数就是不传参的时候用的那个变量
- 2、如果你传了参数，就用传过来的值
- 3、如果形参带有默认参数，一般放到后面
- 4、如果没有默认参数，你必须给我传，不然会报错（js不是）
# 【注意事项】
- 1、函数必须要function开始定义
- 2、function 后面加空加函数名加空格加小括号
- 3、函数名与变量名字命名规则基本一样，唯一不一样的是不缺分大小写
- 4、函数名后面跟括号，括号里面跟参数（就是恋量）
- 5、如果有默认参数用等号等号后面是你要跟的值
- 6、调用函数的时候里面传入的值（实参）就是把函数体外的变量的值拿到函数体内来使用
- 7、函数体外的变量和函数体内的变量通常不是一个变量
- 8、函数可以有返回值，也可以没有返回值，你如果想返回的话，你用return 关键字返回
- 9、函数的调用跟你定义的顺序没有半毛钱关系但是变量不是
- 10、函数可以调用多次，没有事


# 【作用域】
定义：
就是一个变量的作用的范围，或者叫做生命周期
# 【内部变量】
就是函数体内声明的变量，内部变量的作用域只在函数体内生效，程序执行完事以后自动销毁（垃圾回收机制）
# 【外局变量】
外部变量就是在函数体外声明的变量，不能在函数体内使用函数体外的变量名字可以与函数体内的变量的名字一样，但是一般咱们不这么去做
# 【超全局变量】
外部变量和内部变量是同一个变量
>$GET $POST $FILE $COOKIE $SESSION $GLOBALS
# 【静态变量】
```
function total（）{
static $num=2；
$num*=2；
echo $num；
}
total（）；//4
total（）； //8
total（）；//16
```
这个变量只会初始化一次在运行的时候它会记录上一次的值static变量不会销毁

# 【形参和返回值的类型的药束】
```
function sum（int $numl，int $num2）//形参的
{
return $numl+$num2；
}
（sum（'2.3'，3））；
//小括号后面加上：加上数值类型把函数体返回的值给转成你限定的类型
function sum（Snum1，snum2）：string//返回值的
{
    return $numl+$num2：
}
（sum（4，5））；
//php 7.0新特性
function teat（...Sarx）
{
var_dump（Sarr）；
}
test（1，2，3，4，5，6，7）；
function test（Sa，$b，$c）
{
var_dump（Sa，$b，$c）；
}
$arr=[1，2，3]；
test（...Sarr）；
```
总结：
>...$arr这样传参的意思是把数组里面的值一一赋值给形参

# 【匿名函数】
所谓的匿名函数就是没有名字

//如果你想用，怎么办赋值给一个变量然后该这么调用就怎么调用变量加H（）跟普通函数调用一样
```
$func=function（）{}
$func（）；
```

# 数学函数：
随机：
- rand 
- mt_rand
小数：
- floox：不大于该数的最大整数
- cei1：不小于该数的最小整数
- round：四舍五入法取整
其它：
- abs：绝对值
- pi：团周率
- M_PI：常量，与pi（）函数的返回值相同
- pow：指数表达式
- max：最大值
- min：最小值

# 字符串函数：
大小写转换：
- strtolower：转换为小写
- strtoupper：转换为大写
- 1cfirat：首字母小写
- ucfirst：首字母大写
- ucworda：每个单词首字母大写
大小写转换：
- strtolower：转换为小写
- strtoupper：转换为大写
- 1cfirst：首字母小写
- ucfirst：首字母大写
- ucwords：每个单词首字母大写
空白处理：
- trim：去掉首尾的空白字符
- ltrim：去掉开头的空白字符
- rtrim/chop：去掉结尾的空白字符
查找定位：
- strstr/strchr：返回首次出现到结尾的内容
- strrchr：返回最后一次出现到结尾的内容
- stristr:strstr忽略大小写的版本
- strpos：返回首次出现的位置
- stripos:strpos忽略大小写的版本
- strrpos：返回最后一次出现的位置
- strripos:strrpos忽略大小写的版本
- substr：子串提取，可以通过下标方式获取单个字符（$str[n]）
- strpbrk：返回（字符列表中任意字符）首次出现到结尾的内容
比较：
- strcmp：二进制比较字符串
- strcasecmp:strcmp忽略大小写
- strnatcmp：自然顺序比较
- strnatcasecmp:strnatcmp的忽略大小写版本
顺序：
- str_shuffle：打乱顺序（舒服了）
- strrev：逆序字符串

# 组常用函数：
1、数组中元素指针的移动
- next：向后移动，指向下一个元素
- prev：向前移动，指向前一个元素
- end：指向最后一个元素
- reset：复位重新指向第一个元素
2、键和值相关的操作
- key：获取数组当前元素的键
- current/poa：获取数组当前元素的值
- array_keys：获取所有的键
- array_values：获取所有的值，并为其建立数字索引
- array_key_exists/key_exists：判断给定的键是否在数组中
- in_array：判断给定的值是否在数组中
- array_seaxch：根据值返回对应的键名
- array_count_values：统计数组中所有的值出现的次数
3、添加删除元素
- array_shift：将数组开头的元素移出数组
- array_unshift：问数组开头添加一个或更多个元素
- array_push：向数组末尾压入一个或多个元素
- array_pop：弹出数组末尾的一个元素
4、排序相关”
- shuffle：将数组打乱（转换为索引数组）
- sort：对数组进行排序（排序之后重新索引）
- rsort：对数组进行逆向排序
- asort：对数组进行排序并保持索引关系
- arsort：对数组进行逆向排序并保持索引关系
- natsort：用自然顺序算法对数组进行排序
- natcasesort:natsort忽略大小写的版本
- ksort：对数组按照键名进行排序
- krsort：对数组按照键名逆向排序
- usort：使用用户自定义的比较函数对数组的值进行排序
5、元素运算
- array sum：计算数组中所有值的和
- arrayproduct：计算数组中所有值的乘积
- count/sizeof：计算数组中元素的个数
6、创建数组
- range：建立一个包含指定范围单元的数组（可以指定步幅，可以指定递减）
- compact：创建一个包含变量与其值的数组
- extract：从数组中将变量导入到当前的符号表（与compact功能相反）
- array：新建一个数组
- array_merge：合并一个或多个数组（关联会覆盖，索引会重新索引，若想保留索引可以使用'+”）
- array_merge_recursivo：递归合并一个或多个数组
- array_combine：用一个数组的值作为键名，另一个数组的值作为值创建数组
7、其它
- array_chunk：将数组分割成指定长度的小数组
- array_map：将回调函数作用到每个元素上，返回处理的结果数组（新数组）
- array_walk：将回调函数作用到每个元素上（会改变原数组），返回真假
- array_filter：使用回调函数过滤数组（回调函数返回真的才会出现在结果中）
- array_flip：返回交换键和值后的新数组
- array_rand：随机从数组中抽取一个载多个元素的键
- array_replace；使用后面的数组中元素替换第一个数组中的元素
- array_reverae：返回一个单元顺序相反的数组（关联数组会保持键值对应，索引数组需要传递第2个参数
- array_unique：移出数组中重复的值

区别:include 和 require

include include_ once 包含

require require_once 必须

加_once和不加once的区别

_once 作用: 只引入 1 次,如果之前已引用过,不再重复引用

文件包含include（）报错能继续执行后面的代码

require（）不行

# 数组遍历
```php
foreach($arr as $key => $val){
    echo $key . '----' . $val
}

foreach($arr as $val)

while(list($key,$val) = each($arr)){
echo $key . '----' . $val
}

```

# 【超全局数组】
$_GET $_POST $_REQUEST $_SERVER $_SESSION $_COOKIE

关于GET method-*get/post"

- 【$_GET】如果你的form表单里面不写提交方式，默认是get通过ur1传过去的如果你想用post方式去传参，你必须指定post方式你用get方式提交你必须用get接受
- 【$_posT】你用post方式提交你必须用post接受$_poST['username'1
- 【S_REQUEST】可以接受post提交过来的还能接受qet提交过来的

建议：你用什么方式提交，你就用什么方式接受

【$_SERVER】
- $_SERVER['REMOTE_ADDR']；//获取ip地址
- $_SERVER['HTTP_REFERER']；上级来源页


# 时间戳
```
1970年1月1日零时零分零秒-现在
所走的秒数
第一种方式-设置时区
date default_timezome_set（）：//PRC
第二种方式一设置时区（修改配置文件）
php.ini-》date.date.timezone ="UTC"·PRC'T
```
# PHP链接数据库
- 1、链接数据库
- 2、判断是否链接成功
- 3、设置字符集4、选择数据库
- 5、准备sQL语句6、发送sQL语句
- 7、处理结果集
- 8、释放资源（关闭数据库）

```php
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

 $result=mysqli_query（Slink,$sql）//返回一个对象
 mysq1i_fetch_assoc（$result）;//一个一个往下读的返回的时候一个一维的关联数组（必须记住）
 mysqli_fetch_row（$result）;//返回一个索引数组
 mysq1i_fetch_array（$result）;//返回一个有索引又有关联的数组
 mysq1i_num_rows（$result）;//返回查询时候的结果集的总条数
 mysqli_affected_rows（$1ink）;//返回你修改的，删除，添加的时候的受影响的行数
 mysqli_insertid（$1ink）;//返回的是你插入的当前的数据的自增的id
```

# 会话
## cookie
```php
setcookie('name','',time()+60,'/');//设置cookie
setcookie('name','',time()-1,'/');//设置cookie
var_dump($_COOKIE);//打印
```
## session
```php
session_start();//使用session必须开启
$_SESSION['user']='111';//设置
unset($_SESSION['user']);//删除session
session_destroy();//关闭
var_dump($_SESSION);//打印
```

# GD库
```php
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
```

# 类
```php
//简单使用
class Father{
   public $name;
   public function a()
}
$obj = new Father();
$obj->name='aa';
$obj->name;
$obj->a()
```

```php
class Father{
   public $name;
   //构造方法
   public function __construct($name){
       $this->name = $name;//this调用内部属性/方法
   }
}
$obj = new Father('aaa');
```

## 继承
```php
基本语法
    extends：继承
    格式：class Children extends Father{}
访问权限
    public 公共的 //在类的外部可以直接访问，可被继承
    protected 受保护的 //只能在类里调用 ，可被继承
    private  私有的  //无法被继承
```

## 重载
```php
父类的的方法不适合子类使用，那么子类可以重写父类的方法、

class Father{
    public function a(){
        echo '111'
    }
}

class Children extends Father{
    public function a(){
        echo '222' //当调用子类的a（）只会输出 222，方法被完全重写
    }
}

class Children extends Father{
    public function a(){
        parent::a(); //这里调用了父类的方法，然后在下面增加自己的功能
        echo '222' //当调用子类的a（）先输出 111 后输出 222
    }
}
//重写方法的权限只能放大不能缩小
```
## 魔术方法
```php
系统在特定的时机自动调用的方法就是魔术方法

常用魔术方法
__get
    触发时机：对象在外部访问私有成员或者受保护属性时调用
    该方法有一个参数：参数就是调用的属性名
__set
    触发时机：对象在外部设置私有或者受保护的成员属性值的时候调用
    该方法有两个参数：
        参数1：调用的成员属性名
        参数2：要设置的值

子啊外部可以通过unset销毁对象中的public属性
__unset
    触发时机：对象在外部销毁私有或者受保护成员属性的时候调用
    该方法有一个参数：参数就是私有成员的属性名
__isset
    触发时机：对象在外部判断私有或者受保护成员属性的时候调用
    该方法有一个参数：参数就是私有成员的属性名
__construct：构造方法
    触发时机：在创建对象的时候自动调用
__destruct :析构方法,对象销毁时调用
__toString
    触发时机：echo一个对象的时候触发
    该函数需要return一个字符串
__debugInfo
    触发机制：var_dump一个函数的时候触发
    该函数需要return一个数组
__call
    触发时机：当调用一个不存在对象方法的时候触发
    参数1：函数名
    参数2:是一个数组，函数中的参数都被存放到这个数组中
__callStatic
    触发时机：当调用一个不存在静态方法的时候触发
    参数1：函数名
    参数2：是一个数组，函数中的参数都被存放到这个数组中
    【注】该方法也是static方法
serialize：序列化
unserialize：反序列化

__sleep（了解）
    触发时机：在序列化一个对象的时候调用
    返回值：必须是一个数组，数组中写你想要序列的成员属性名
__wakeup（了解）
    触发时机：在反序列一个对象的时候调用
    反序列成功之后，想要让对象执行一些初始化方法，可以写到这个函数中
__clone（了解）
    触发时机：在克隆一个对象的时候调用
    在这里面可以对克隆出来的对象的属性做一些操作
__autoload（这是唯一的一个写在类外的魔术方法）
    触发时机：new一个对象的时候，当前脚本没有这个类，那么会触发这个方法
    参数：就是该类的类名字符串


```
## 常量
```php
类常量 const a = 3
调用方法
    类外部：    类名：：常量名 （或者  $obj::常量名）
    类内部：    self：：常量名  （或者  $this::常量名）
self：就是当前常量名
在类的外部可以使用define和const定义常量。但是在类的内部只能使用const定义常量   常量前面不能加修饰符

静态属性和方法
static 如果用来修饰属性和方法之后，那么该属性和方法是属于整个类，不是属于某个对象的
>public static $name;
静态属性调用方法
    类外
        类名：：静态属性名 （或者 $obj：：静态属性名）
    类内：
        self：：静态属性名  （或者  $this::静态属性名）
静态方法调用方法
     类外
        类名：：静态方法名 （或者 $obj：：静态方法名  $obj->静态方法名）
    类内：
        self：：静态方法名  （或者  $this::静态方法名  $this->静态方法名）
        
静态方法中不能出现$this关键字
```

## 抽象类、接口
```php
【注1】抽象类不能实例化对象
【注2】抽象类存在的目的是为了让子类继承
【注3】抽象类的定义和普通类的定义一样，只不过前面加了一个关键字，abstract
【注4】抽象类里面一般都要有抽象方法，抽象方法是用来让子类实现的，而且子类必须实现，不实现就报错
【注5】抽象方法只能是public或者protected
【注6】抽象方法如果有参数，参数有默认值，那么实现该方法的时候参数和默认值也都要有
【注7】抽象类可以继承抽象类，子类在实现的时候所有的抽象方法都得实现

接口（抽象的抽象类）
interface：接口
implements：实现
接口中的方法都是抽象方法，所以abstract可以省略不写
接口中的方法必须是public
接口中只能规定方法，不能写属性，（接口中可以写常量）
一个类可以实现多个接口，中间用逗号隔开
一个类可以先继承父类，然后再实现接口
接口可以继承接口，但是里面的方法都要实现
/*
abstract calss Test{}
interface Test{}
calss Tr implements Test{}
*/
```

## trait和命名空间
```php
1、trait（特性）trait就是用来模拟实现多继承的
instance：实例
定义trait要以trait关键字开头，然后里面的写法和类的写法一模一样
一般情况下，在trait中我们不加成员属性，只加成员方法
trait不能实例化
trait中的方法想让（子类）来使用，该方法必须是public 
trait可以嵌套trait
方法名冲突
use Dun，Sword{
Dun:：attack insteadof Sword；
Dun:：attack as DunAttack；
Sword:：attack as Sattack；
}
/*
trait Sword{function a(){}}
class Hero{use Sword}
$a = new Hero()
$a ->  a()
*/
```

2、命名空间
```php
在一个文件中如果出现了Person类，能不能再定义一个Person类命名空间就是文件夹。在不同的命名空间下面就可以有相同的类名namespace：命名空间 use:使用

1、第一个命名空间的命名：前面不能有任何的代码
2、根空间、子空间
根空间\
你的he11o空间其实就是\hel1o
你的wor1d空间其实就是\world
你在wor1d空间下 hello\Dog ===>world\hello\Dog
3、use使用(引入)，as使用(取别名) 
use\hello\test\Dog as SmallDog；
use\world\Dog as BigDog；
```
```
<?php
namespace hello
class Person{}

namespace world
class Person{}

$new = new \hello\Person
$new = new \wprld\Person
?>
```

# 杂项
```php
1、函数
    call_user_func
    call_user_func_array
    spl_autoload_register
2、常量和有关函数
    _NAMESPACE_当前命名空间名
    _CLASS_当前类名
    _METHOD_当前方法名
    instanceof判断一个对象是否属于当前类
    class_alias给类起别名
    Class_exists 判断类是否存在I
    get_class_methods得到类所有的方法
    get_class_vars得到类所有的属性
    get_class根据对象得到当前类名
    interface_exists 判断接口是否存在
    trait_exists判断trait是否存在
    method_exists判断方法是否存在
    property_exists 判断属性是否存在

```

# 异常处理
```php
try{
    echo '早上起床<br/>';
    throw new Exception('拉肚子了'，10);
    echo'先吃早点<br/>';
}catch(Exception $e){
    echo $e->getMessage();
    echo $e->getCode();
}
echo '开始上班';

```

# PDO
```php
1、概述
数据库有很多种 mysql sqserver oracle db2I通过php去连接数据库怎么链接呢，不同的数据库连接的时候使用的扩展库不一样有没有一套扩展库可以直接用来连接所有的数据库呢？有pDO（php data object）
mysq1i 
pdo
驱动

2、使用（手册）
    主要是这3个类 PDO PDOStatement PDoException的学习
    dsn（data source name）
        1、字符串形式
            $dsn = 'mysql:host=localhost；dbname=bingbing；charset=utf8';
            $pdo = new PDO($dsn,usernsme,password);
        2、文件形式
            $pdo =new PDO（'uri:file:///C:/wamp64/www/1604/day14/dsn.txt'，'root'，'123456'）；
        3、php.ini 
            pdo.dsn.lala="mysql:host=localhost；dbname=bingbing；charset=utf8"
            $pdo=new PDO（'lala'，'root'，'123456'）；

    获取和设置信息
        setAttribute 
            PDO:：ATTR_CASE
            PDO:：ATTR_CASE 
            PDO:：ATTR_AUTOCOMMIT 
        getAttribute
        数组

    错误模式
        1、默认
        2、警告
            $pdo->setAttribute(PDO:：ATTR ERRMODE，PDO:：ERRMODE WARNING);
        3、异常
            $pdo->setAttribute(PDO:：ATTR ERRMODE，PDO:：ERRMODE EXCEPTION);

    PDo执行sq1语句
        $pdo->exec($sql) 执行不要结果集的语句比如增删改

        $pdo->query() 执行要结果集的语句比如查desc
       $pdo->lastInsertId() 最后插入语句的id号号了

    事务处理
        什么叫做事务？银行转账
        【注】表引擎有两种myisam（不支持）innodb（支持）
        $pdo->beginTransaction（）；开启一个事务
        $pdo->commit（）；提交事务
        $pdo->rollback（）；回滚到初始状态

    预处理
        <?php
            $stmt = $dbh->prepare("INSERT INTO REGISTRY (name, value) VALUES (:name, :value)");
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':value', $value);

            // 插入一行
            $name = 'one';
            $value = 1;
            $stmt->execute();

            //  用不同的值插入另一行
            $name = 'two';
            $value = 2;
            $stmt->execute();
        ?>
        或者
        <?php
            $stmt = $dbh->prepare("INSERT INTO REGISTRY (name, value) VALUES (:name, :value)");
            $stmt->execute([':name'=>'one',':value'=>'1']);
            $stmt->execute([':name'=>'two',':value'=>'2']);
        ?>
    
    获取结果集
        <?php
            $stmt = $dbh->prepare("SELECT * FROM REGISTRY where name = ?");
            if ($stmt->execute(array($_GET['name']))) {
            while ($row = $stmt->fetch()) {
                print_r($row);
            }
            }
        ?>
```
