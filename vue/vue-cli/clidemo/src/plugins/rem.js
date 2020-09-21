(()=>{
    function resize(){
        var baseFontSize = 100 //设计稿100px想当于1rem,(16px/100)
        var designWidth = 750;//设计稿宽度
        var width = window.innerWidt;//屏幕宽度
        var currentsFontSize = (width/designWidth)*100;
        document.querySelector('html').style.fontSize = currentsFontSize+'px'

    }

    //rem布局设置
    window.onresize=()=>{
        resize()
    }
    window.addEventListener('DOMContentLoaded',resize)

})()