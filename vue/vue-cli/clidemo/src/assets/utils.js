/** * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
    可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
    Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423      
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04      
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04      
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04      
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18      
 */        
Date.prototype.pattern=function(fmt) {         
    var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
    "H+" : this.getHours(), //小时         
    "m+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "/u65e5",         
    "1" : "/u4e00",         
    "2" : "/u4e8c",         
    "3" : "/u4e09",         
    "4" : "/u56db",         
    "5" : "/u4e94",         
    "6" : "/u516d"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;         
} 

//获取QueryString的数组
function getQueryString(){
    var result = location.search.match(new RegExp("[\?\&][^\?\&]+=[^\?\&]+","g")); 
    if(result == null){
        return "";
    }
    for(var i = 0; i < result.length; i++){
        result[i] = result[i].substring(1);
    }
    return result;
}

//获取当前 URL 参数
//返回的是对象形式的参数  
function getUrlArgObject(){  
    var args=new Object();  
    var query=location.search.substring(1);//获取查询串  
    var pairs=query.split("&");//在&处断开  
    for(var i=0;i<pairs.length;i++){  
        var pos=pairs[i].indexOf('=');//查找name=value  
        if(pos==-1){//如果没有找到就跳过  
            continue;  
        }  
        var argname=pairs[i].substring(0,pos);//提取name  
        var value=pairs[i].substring(pos+1);//提取value  
        args[argname]=unescape(value);//存为属性  
    }  
    return args;//返回对象  
}  

//年月日时分秒补0函数
function addZero(num){
    let newtime = num>9?num:'0'+num;
    return newtime
}

//判断数据类型

function type(object){
    //ie9下调用toString.call(undefined)报错
    if(typeof object ==="undefined"){
        return "undefined"
    }
    let map = {
        '[object String]':'string',
        '[object Number]':'number',
        '[object Boolean]':'boolean',
        '[object Object]':'object',
        '[object Array]':'array',
        '[object RegExp]':'regExp',
        '[object Function]':'function',
        '[object Promise]':'promise',
        '[object GeneratorFunction]':'generatorFunction',
        '[object Null]':'null'
    }
    let typestring ='';
    if(object instanceof Element){
        typestring = 'element'
    }else{
        typestring = map[Object.prototype.toString.call(object)]
    }
    return typestring;
}