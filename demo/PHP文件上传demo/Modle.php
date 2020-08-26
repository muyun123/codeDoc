<?php
class Modle{
    // 主机名
    protected $host;
    // 用户名\
    protected $user;
    // 密码
    protected $pwd;
    // 数据库名
    protected $dbname;
    // 字符集
    protected $charset;
    // 表前缀
    protected $prefix;
    // 数据库连接资源
    protected $link;
    // 数据表名
    protected $tableName;
    // SQL语句
    protected $sql;
    // 操作数组 存放查询条件
    protected $options;

    // 构造方法，初始化
    function __construct($config)
    {
        $this->host = $config['DB_HOST'];
        $this->user = $config['DB_USER'];
        $this->pwd = $config['DB_PWD'];
        $this->dbname = $config['DB_DBNAME'];
        $this->charset = $config['DB_CHARSET'];
        $this->prefix = $config['DB_PREFIX'];

        // 链接数据库
        $this->link = $this->connect();

        // 得到数据表名
        $this->tableName = $this->getTableName();

        // 初始化options数组
        $this->initOptions();
    }
    protected function connect(){
        $link = mysqli_connect($this->host,$this->user,$this->pwd);
        if(!$link){
            die('数据库链接失败');
        }
        mysqli_select_db($link,$this->dbname);
        mysqli_set_charset($link,$this->chartset);
        return $link;
    }
    protected function getTableName(){
        // 如果有设置成员变量
        if(!empty($this->tableName)){
            return $this->prefix.$this->tableName;
        }
        // 如果没有设置成员变量，通过类名来获得表名
        // 得到当前类名
        $className = get_class($this);
        $table= strtolower(substr($className,0,-5));
        return $this->prefix . $table;
    }
    protected function initOptions(){
        $arr = ['where','table','field','order','group','having','limit'];
        foreach($arr as $value){
            // 将options值初始化
            $this->options[$value] = '';
            if($value == 'table'){
                $this->options[$value]= $this->tableName;
            }
        }

    } 
    // field方法
    function field($field){
        if(!empty($field)){
            if(is_string($field)){
                $this->options['field'] = $field;
            }
            if(is_array($field)){
                $this->options['field'] = join(',',$field);
            }
        }
        return $this;
    }
    // table方法
    function table($table){
        if(!empty($table)){
                $this->options['table'] = $table;
        }
        return $this;
    }
    // where方法
    function where($where){
        if(!empty($where)){
                $this->options['where'] ='where '.$where;
        }
        return $this;
    }
    // group方法
    function group($group){
        if(!empty($group)){
                $this->options['group'] ='group by ' .$group;
        }
        return $this;
    }
    // having方法
    function having($having){
        if(!empty($having)){
                $this->options['having'] ='having ' .$having;
        }
        return $this;
    }
    // order方法
    function order($order){
        if(!empty($order)){
                $this->options['order'] ='order by ' .$order;
        }
        return $this;
    }
    // limit方法
    function limit($limit){
        if(!empty($limit)){
            if(is_string($limit)){
                $this->options['limit'] ='limit ' .$limit;
            }
            if(is_array($limit)){
                $this->options['limit'] = join(',',$limit);
            }
        }
        return $this;
    }
    // select方法
    function select(){
        // 先预写一个带有占位符的SQL语句
        $sql = 'select %FIELD% from %TABLE% %WHERE% %GROUP% %HAVING% %ORDER% %LIMIT%';
        // 将option中对应的值依次的替换上面的占位符
        $sql = str_replace(['%FIELD%','%TABLE%','%WHERE%',' %GROUP%','%HAVING%','%ORDER%','%LIMIT%'],
        [$this->options['field'],$this->options['table'],$this->options['where'],$this->options['group'],$this->options['having'],$this->options['order'],$this->options['limit']],$sql);
        // 保存一份SQL语句
        $this->sql = $sql;
        // 执行SQL语句
        return $this->query($sql);
    }
    // query方法
    function query($sql){
        $result = mysqli_query($this->link,$sql);
        if($result&& mysqli_fetch_row($result)){
            while($data = mysqli_fetch_assoc($result)){
                $newData[]=$data;
            }
        }
        return $newData;
    }
    // exec方法
    function exec(){

    }

    function __get($name){
        if($name == 'sql'){
            return $this->sql;
        }
        return false;
    }
}