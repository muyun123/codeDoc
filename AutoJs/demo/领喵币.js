auto.waitFor();//auto.waitFor()则会在在无障碍服务启动后继续运行
var height = device.height;
var width = device.width;
toast("\n设备宽" + width + "\n" + "设备高" + height + "\n" + "手机型号" + device.model + "\n安卓版本" + device.release)//获取手机信息并输出
setScreenMetrics(width, height);lingqu();//缩放手机像素，并且
function lingqu() {
    // app.launchApp("手机淘宝");
    // toast("打开淘宝")
    // sleep(6000);
    // click(600, 1235);//进入活动页
    // sleep(6000);
 
    // click(900, 1320);
    // toast("领金币")
    // //id("_KivZw5").findOne().click();//点猫  领金币
    // // //浏览15秒领金币
    // sleep(1500);
    // while (text("去喂猫 赚更多喵币").exists()) {
    //     text("去喂猫 赚更多喵币").findOne().click();
    //     }
    // click(920, 2100);
    // toast("赚喵币")
 
    if (text("签到").exists()) {
        text("签到").findOne().click();
        sleep(1600);
        toast("签到成功")
    }
    sleep(1500);
    while (text("去进店").exists()) {
        //要支持的动作
        toast("存在去进店");
        text("去进店").findOne().click();
        sleep(2500);
        swipe(width / 2, height - 600, width / 2, 0, 500);//滑动手机（width / 2, height - 600）为开始坐标，后面的是结束坐标
        sleep(3500);
        swipe(width / 2, height - 600, width / 2, 0, 500);
        sleep(10000);
        swipe(width / 2, height - 600, width / 2, 0, 500);
        sleep(9000);
        back();//返回上级目录
        sleep(1000);//总的时间要凑够
    }
    while (text("去浏览").exists()) {
        //要支持的动作
        toast("存在去浏览");
        text("去浏览").findOne().click();
        sleep(1500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(2500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(10000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(8000);
        back();
        sleep(1600);
    }
    toast("结束");
}