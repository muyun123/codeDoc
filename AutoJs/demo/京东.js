auto.waitFor();//检查无障碍服务是否启动
console.show();
console.setPosition(500, 100);
sleep(100)
console.setSize(600, 600)


app.launchApp("京东")


// var accounT = ["账号1",
//     "账号2",
//     "账号3"
// ],
//     passworD = ["密码1",
//         "密码2",
//         "密码3"
//     ];


// for (let i = 0; i < accounT.length; i++) {
//     //log("开始登陆" + accounT[i]);
//     log("开始登陆：第" + (i + 1) + "个账号");
//     openJdToLogin()
//     sleep(500)
//     Login(accounT[i], passworD[i])
//     sleep(500)
//     togame()
//     sleep(500)
//     takeTask();
//     log("该号任务完成，切号...")
//     sleep(500)
//     quitGame()
// }

// log("全部完成")






// function openJdToLogin() {
//     var sy = desc("我的").findOne()
//     clickCenter(sy);
//     var sz = idContains("ag2").findOne()
//     clickCenter(sz);
//     //log('1')
//     var tc = text("退出登录").findOne()
//     sleep(1000)
//     clickCenter(tc);
//     sleep(1000)
//     //log('2')
//     var qd = text("确定").findOne()
//     clickCenter(qd);
//     sleep(1000)
//     //log('3')
//     var dl = text("登录/注册").findOne()
//     clickCenter(dl);
//     sleep(500)
//     //log('4')

//     var dl1 = text("账号密码登录").findOne()
//     clickCenter(dl1);
//     sleep(500)
//     //log('5')
// }

// function Login(name, password) {
//     setText(0, name);
//     sleep(500)
//     setText(1, password);
//     sleep(500)
//     var dl2 = text("登录").findOne()
//     clickCenter(dl2);
//     sleep(500)
//     //log('6')
//     var sy = desc("首页").findOne()
//     clickCenter(sy);
//     log('登录成功')

// }


// function togame() {
//     var game = desc("浮层icon").findOne();
//     if (game) {
//         clickCenter(game);
//         text("全民养红包").waitFor()
//         sleep(3000);
//         click(975, 1800)   //"领金币"的坐标
//         textContains("逛逛好店").waitFor();
//     }
// }

function takeTask() {
    sleep(1000)

    taskA()

    sleep(1000)

    taskB()

    sleep(1000)

    taskC()
    sleep(1000)

    taskD()
    sleep(1000)

    taskF()
}

function quitGame() {
    var fh = desc("返回").findOne();
    sleep(500)
    clickCenter(fh);

}

















function clickCenter(obj) {
    let b = obj.bounds()
    return (click(b.centerX(), b.centerY()))
}




function taskA()    //逛逛好店 25
{
    log('开始任务①...')
    var task1 = descContains("逛逛好店").findOne();

    var count;
    if (task1) {

        count = task1.desc().match(/\d+(?=\/)/);

        // count=count[0].match(/\d+/)[0];
    }
    log("已完成" + count + "次");


    for (i = parseInt(count); i <= 25; i++) {

        if (i == 25) {
            log("该任务已完成。")
            break;
        }


        clickCenter(descContains("逛逛好店").findOne());
        sleep(1000)

        var fh = idContains("fd").findOne();
        if (fh) {
            clickCenter(fh)
        }
        sleep(500)
        var ok = desc("朕知道了").findOne()

        sleep(1000)
        if (ok) {
            ok.click();
            log("已完成" + (i + 1) + "次");
        }
        sleep(1000)


    }
}

function taskB()//精彩会场 3
{
    log('开始任务②...')
    var task1 = descContains("精彩会场").findOne();

    var count;
    if (task1) {
        count = task1.desc().match(/\d+(?=\/)/);

        // count=count[0].match(/\d+/)[0];
    }
    log("已完成" + count + "次");


    for (i = parseInt(count); i <= 3; i++) {

        if (i == 3) {
            log("任务②已完成。")
            break;
        }

        clickCenter(textContains("精彩会场").findOne());
        sleep(1000)

        var fh = desc("返回").findOne();
        if (fh) {
            clickCenter(fh)
        }
        sleep(500)
        var ok = desc("朕知道了").findOne()

        sleep(1000)
        if (ok) {
            ok.click();
            log("已完成" + (i + 1) + "次");
        }
        sleep(1000)


    }
}

function taskC()//精选好物 25
{
    log('开始任务③...')
    var task1 = descContains("精选好物").findOne();

    var count;
    if (task1) {
        count = task1.desc().match(/\d+(?=\/)/);

        // count=count[0].match(/\d+/)[0];
    }
    log("已完成" + count + "次");


    for (i = parseInt(count); i <= 25; i++) {

        if (i == 25) {
            log("任务③已完成。")
            break;
        }

        clickCenter(descContains("精选好物").findOne());
        sleep(1000)

        var fh = desc("返回按钮").findOne();
        if (fh) {
            clickCenter(fh)
        }
        sleep(500)
        var ok = desc("朕知道了").findOne()

        sleep(1000)
        if (ok) {
            ok.click();
            log("已完成" + (i + 1) + "次");
        }
        sleep(1000)

    }
}


function taskD()//更多好玩互动 4
{
    log('开始任务④...')
    var task1 = descContains("更多好玩互动").findOne();

    var count;
    if (task1) {
        count = task1.desc().match(/\d+(?=\/)/);

        // count=count[0].match(/\d+/)[0];
    }
    log("已完成" + count + "次");


    for (i = parseInt(count); i <= 4; i++) {

        if (i == 4) {
            log("任务④已完成。")
            break;
        }

        clickCenter(descContains("更多好玩互动").findOne());
        sleep(1000)

        var fh = desc("返回").findOne();
        if (fh) {
            clickCenter(fh)
        }
        sleep(500)
        var ok = desc("朕知道了").findOne()

        sleep(1000)
        if (ok) {
            ok.click();
            log("已完成" + (i + 1) + "次");
        }
        sleep(1000)


    }
}




function taskF()//看京东推荐 4
{
    log('开始任务⑥...')
    var task1 = descContains("看京品推荐官").findOne();

    var count;
    if (task1) {
        count = task1.desc().match(/\d+(?=\/)/);

        // count=count[0].match(/\d+/)[0];
    }
    log("已完成" + count + "次");


    for (i = parseInt(count); i <= 4; i++) {

        if (i == 4) {
            log("任务⑥已完成。")
            break;
        }

        clickCenter(descContains("看京品推荐官").findOne());
        sleep(1000)

        var fh = idContains("a6h").findOne();
        if (fh) {
            clickCenter(fh)
        }
        sleep(500)
        var ok = desc("朕知道了").findOne()

        sleep(1000)
        if (ok) {
            ok.click();
            log("已完成" + (i + 1) + "次");
        }
        sleep(1000)


    }
}