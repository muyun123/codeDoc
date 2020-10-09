[toc]
# 连接电脑调试
## Install

在VS Code中菜单"查看"->"扩展"->输入"Auto.js"或"hyb1996"搜索，即可看到"Auto.js-VSCodeExt"插件，安装即可。插件的更新也可以在这里更新。

## Features

目前功能比较基础，仅支持：

- 在VS Code的开发者工具实时显示Auto.js的日志与输出
- 在VS Code命令中增加Run, Stop, Rerun, Stop all等选项。可以在手机与电脑连接后把Sublime编辑器中的脚本推送到AutoJs中执行，或者停止AutoJs中运行的脚本。

## Usage

### Step 1

按 `Ctrl+Shift+P` 或点击"查看"->"命令面板"可调出命令面板，输入 `Auto.js` 可以看到几个命令，移动光标到命令`Auto.js: Start Server`，按回车键执行该命令。

此时VS Code会在右上角显示"Auto.js server running"，即开启服务成功。

### Step 2

将手机连接到电脑启用的Wifi或者同一局域网中。通过命令行ipconfig(或者其他操作系统的相同功能命令)查看电脑的IP地址。在[Auto.js](https://github.com/hyb1996/Auto.js)的侧拉菜单中启用调试服务，并输入IP地址，等待连接成功。

### Step 3

之后就可以在电脑上编辑JavaScript文件并通过命令`Run`或者按键`F5`在手机上运行了。

## Commands

按 `Ctrl+Shift+P` 或点击"查看"->"命令面板"可调出命令面板，输入 `Auto.js` 可以看到几个命令：

- Start Server: 启动插件服务。之后在确保手机和电脑在同一区域网的情况下，在Auto.js的侧拉菜单中使用连接电脑功能连接。
- Stop Server: 停止插件服务。
- Run 运行当前编辑器的脚本。如果有多个设备连接，则在所有设备运行。
- Rerun 停止当前文件对应的脚本并重新运行。如果有多个设备连接，则在所有设备重新运行。
- Stop 停止当前文件对应的脚本。如果有多个设备连接，则在所有设备停止。
- StopAll 停止所有正在运行的脚本。如果有多个设备连接，则在所有设备运行所有脚本。
- Save 保存当前文件到手机的脚本默认目录（文件名会加上前缀remote)。如果有多个设备连接，则在所有设备保存。
- RunOnDevice: 弹出设备菜单并在指定设备运行脚本。
- SaveToDevice: 弹出设备菜单并在指定设备保存脚本。
- New Project（新建项目）：选择一个空文件夹（或者在文件管理器中新建一个空文件夹），将会自动创建一个项目
- Run Project（运行项目）：运行一个项目，需要Auto.js 4.0.4Alpha5以上支持
- Save Project（保存项目）：保存一个项目，需要Auto.js 4.0.4Alpha5以上支持

以上命令一些有对应的快捷键，参照命令后面的说明即可。

## Log

要显示来自Auto.js的日志，打开 VS Code上面菜单的"帮助"->"切换开发人员工具"->"Console"即可。