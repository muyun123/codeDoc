<?php
$up = new Upload();
$up ->uploadFile('fm');
// var_dump($up->errorNumber);
var_dump($up->erroInfo);
class Upload{
    // 文件上传保存
    protected $path = './upload/';
    // 允许的后缀
    protected $allowSuffix = ['jpg','jpeg','gif','wbmp','png'];
    // 允许的mime
    protected $allowMime = ['image/jpeg','image/gif','imagewbmp','image/png'];
    // 允许的文件大小
    protected $maxSize = 2000000;
    // 是否随机名字
    protected $isRandName = true;
    // 允许的文件前缀
    protected $prefix = 'up_';
    // 错误号码和错误信息
    protected $errorNumber;
    protected $errorInfo;

    //文件信息
    protected $oldName;
    protected $suffix;
    protected $size;
    protected $mime;
    protected $tmpName;

    // 文件新名字
    protected $newName;

    public function __construct($arr = []){
        foreach($arr as $key => $value){
            $this->setOption($key,$value);
        }
    }
    // 判断$key是否是成员属性
    protected function setOption($key,$value){
        $keys = array_keys(get_class_vars(__CLASS__));
        if(in_array($key,$keys)){
            $this->$key = $value;
        }
    }
    // 文件上传,$key就是你input的name属性值
    public function uploadFile($key){
        // 判断有没有设置路径 path
        if(empty($this->path)){
            $this->setOption('errorNumber',-1);
            return false;
        }
        // 判断该路径是否存在，是否可写
        if(!$this->check()){
            $this->setOption('errorNumber',-2);
            return false;
        }
        // 判断$_FILES   里面的error是否为0；如果为0，说明文件信息在服务器端可以直接获取，提取信息保存到成员属性
        $error = $_FILES[$key]['error'];
        if($error){
            $this->setOption('errorNumber',$error);
            return false;
        }else{
            // 提取相关信息保存到成员属性
         $this->getFileInfo($key);   
        }
        // 判断文件的大小、mime、后缀是否符合
        if(!$this->checkSize()||!$this->checkMime()||!$this->checkSuffix()){
            return false;
        }
        // 得到新的文件名字
        $this->newName = $this->creactNewName();
        // 判断是否是上传文件，并且移动上传文件
        if(is_uploaded_file($this->tmpName)){
            if(move_uploaded_file($this->tmpName,$this->path.$this->newName)){
                return $this->path.$this->newName;
            }else{
                $this->setOption('errorNumber',-7);
                return false;
            }
        }else{
            $this->setOption('errorNumber',-6);
            return false;
        }
    }
    protected function check(){
        // 文件夹不存在或者不是目录，创建文件夹
        if(!file_exists($this->path)||!is_dir($this->path)){
            return mkdir($this->path,0777,true);
        }
        // 判断是否可写
        if(!is_writeable($this->path)){
            return chmod($this->path,0777);
        }
        return true;
    }
    protected function creactNewName(){
        if($this->isRandName){
            $name = $this->prefix.uniqid().'.'.$this->suffix;
        }else{
            $name = $this->prefix.$this->oldName;
        }
        return $name;
    }
    protected function getFileInfo($key){
        // 得到文件名字
        $this->oldName = $_FILES[$key]['name'];
        $this->mime = $_FILES[$key]['type'];
        // 得到文件临时路径
        $this->tmpName = $_FILES[$key]['tmp_name'];
        $this->size = $_FILES[$key]['size'];
        // 得到文件后缀
        $this->suffix = pathinfo($this->oldName)['extension'];
    }
    protected function checkSize(){
        if($this->size>$this->maxSize){
            $this->setOption('errorNumber',-3);
            return false;
        }
        return true;
    }
    protected function checkMime(){
        if(!in_array($this->mime,$this->allowMime)){
            $this->setOption('errorNumber',-4);
            return false;
        }
        return true;
    }
    protected function checkSuffix(){
        if(!in_array($this->suffix,$this->allowSuffix)){
            $this->setOption('errorNumber',-5);
            return false;
        }
        return true;
    }
    public function __get($name){
        if($name=='errorNumber'){
            return $this->errorNumber;
        }else if($name == 'erroInfo'){
            return $this->getErrorInfo();
        }
    }
    protected function getErrorInfo(){
        switch($this->errorNumber){
            case -1:
                $strm='文件路径没有设置';
                break;
            case -2:
                $strm='文件路径不是目录或没有权限';
                break;
            case -3:
                $strm='文件大小超过指定范围';
                break;
            case -4:
                $strm='文件mime不符合';
                break;
            case -5:
                $strm='文件后缀不符合';
                break;
            case -6:
                $strm='不是上传文件';
                break;
            case -7:
                $strm='文件上传失败';
                break;
            case 1:
                $strm='超出php.ini设置大小';
                break;
            case 2:
                $strm='文件超出html表单大小';
                break;
            case 3:
                $strm='文件部分上传';
                break;
            case 4:
                $strm='没有文件上传';
                break;
            case 6:
                $strm='找不到临时文件';
                break;
            case 7:
                $strm='文件写入失败';
                break;
            default :
                $strm = "文件上传成功";
            break;
        }
        return $strm;
    }
}