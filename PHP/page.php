 <?php
 $list = new Page(5,20);
 var_dump($list->allUrl());
 class Page{
    //  每页显示数据量
     protected $number;
    // 一共有多少条数据
    protected $totalCount;
    // 当前页
    protected $page;
    // 总页数
    protected $totalPage;
    protected $url;
    public function __construct($number,$totalCount){
        $this ->number = $number;
        $this ->totalCount = $totalCount;
        // 得到总页数
        $this->totalPage = $this->getTotalPage();
        // 得到当前页
        $this->page = $this->getPage();
        // 得到URL
        $this ->url = $this->getUrl();
    }
    protected function getTotalPage(){
        return ceil($this->totalCount / $this->number);
    }
    protected function getPage(){
        if(empty($_GET['page'])){
            $page = 1;
        }else if($_GET['page']>$this->toalPage){
            $page = $this->toalPage;
        }else if($_GET['page']<1){
            $page = 1;
        } else{
            $page = $_GET['page'];
        }
        return $page;
    }
    protected function getUrl(){
            $scheme = $_SERVER['REQUEST_SCHEME'];
            $host = $_SERVER['SERVER_NAME'];
            $port = $_SERVER['SERVER_PORT'];
            $uri = $_SERVER['REQUEST_URI'];

            $uriArray =parse_url($uri);
            $path = $uriArray['path'];

            if(!empty($uriArray['query'])){
                // 首先将请求字符串变为关联数组
                parse_str($uriArray['query'],$array);
                // 清除掉关联数组中的page键值对
                unset($array['page']);
                // 将剩下的参数拼接为请求字符串
                $query = http_build_query($array);
                // 将字符串并拼接到路径的后面
                if($query!=''){
                    $path = $path.'?'.$query;
                }
            }
            return $scheme.'://'.$host.':'.$port.$path;
    }
    protected function setURL($str){
        if(strstr($this->url,'?')){
            $url = $this->url.'&'.$str;
        }else{
            $url = $this->url.'?'.$str;
        }
        return $url;
    }
    public function allUrl(){
        return [
            'first'=>$this->first(),
            'next'=>$this->next(),
            'prev'=>$this->prev(),
            'end'=>$this->end(),
        ];
    }
    public function first(){
        return $this->setUrl('page=1');
    }
    public function next(){
        if($this->page+1 > $this->totalPage){
            $page = $this->totalPage;
        }else{
            $page = $this->page+1;
        }
        return $this->setUrl('page='.$page);
    }
    public function prev(){
        if($this->page-1 < 1){
            $page =1;
        }else{
            $page = $this->page-1;
        }
        return $this->setUrl('page='.$page);
    }
    public function end(){
        return $this->setUrl('page='.$this->totalPage);
    }
    public function limit(){
        $offset = ($this->page-1)*$this->number;
        return $offset.','.$this->number;
    }
 }