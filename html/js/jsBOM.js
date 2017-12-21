/**
 * Created by dongyp on 2017/12/20.
 */
//1440*900

// var w=window.innerWidth
//     || document.documentElement.clientWidth
//     || document.body.clientWidth;
// var h=window.innerHeight
//     || document.documentElement.clientHeight
//     || document.body.clientHeight;

console.log(window.innerWidth); //浏览器窗口的内部宽度(包括滚动条)
console.log(window.innerHeight); //浏览器窗口的内部高度(包括滚动条)


// window.open() //- 打开新窗口
// window.close() //- 关闭当前窗口
// window.moveTo() //- 移动当前窗口
// window.resizeTo() //- 调整当前窗口的尺寸

console.log(screen.availWidth); //可用的屏幕宽度
console.log(screen.availHeight); //可用的屏幕高度，以像素计，减去界面特性，比如窗口任务栏。

console.log(location.hostname); //返回 web 主机的域名
console.log(location.pathname); //返回当前页面的路径和文件名
console.log(location.port); //返回 web 主机的端口 （80 或 443）
console.log(location.protocol); //返回所使用的 web 协议（http:// 或 https://）

// window.location.assign("https://www.baidu.com/")

// history.back() //- 与在浏览器点击后退按钮相同
// history.forward() //- 与在浏览器中点击向前按钮相同

txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
txt+= "<p>浏览器名称: " + navigator.appName + "</p>";
txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>";
txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
txt+= "<p>硬件平台: " + navigator.platform + "</p>";
txt+= "<p>用户代理: " + navigator.userAgent + "</p>";
txt+= "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
console.log(txt);

// 确认框通常用于验证是否接受用户操作。
// 当确认卡弹出时，用户可以点击 "确认" 或者 "取消" 来确定用户操作。
// 当你点击 "确认", 确认框返回 true， 如果点击 "取消", 确认框返回 false。
var r=confirm("按下按钮");
if (r==true) {
    console.log('你按下了"确定"按钮!');
} else {
    console.log('你按下了"取消"按钮!');
}

// 提示框经常用于提示用户在进入页面前输入某个值。
// 当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。
// 如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。
var person=prompt("请输入你的名字","Harry Potter");
if (person!=null && person!="") {
    console.log("你好 " + person + "! 今天感觉如何?");
}

// JavaScript 计时事件
// window.setInterval("javascript function",milliseconds);
// setInterval() 第一个参数是函数（function）。
// 第二个参数间隔的毫秒数
function interval(){
    var d=new Date();
    var t=d.toLocaleTimeString();
    console.log(t);
}
var i = setInterval(interval,1000);
clearInterval(i);
//clearInterval() 方法用于停止 setInterval() 方法执行的函数代码。
//window.clearInterval(intervalVariable)
//要使用 clearInterval() 方法, 在创建计时方法时你必须使用全局变量

//setTimeout() 方法
//等待3秒,在控制台输出当前时间
var t = setTimeout(interval,3000);
clearInterval(t);
//clearTimeout() 方法用于停止执行setTimeout()方法的函数代码。

document.cookie="username=John Doe";
document.cookie="username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/"; //修改值
// document.cookie="username=" //删除值
console.log(document.cookie);

console.log(getCookie("username"));

function getCookie(cookieName){
    var name = cookieName + "=";
    var cookieArray = document.cookie.split(";");
    for(var i=0; i<cookieArray.length; i++){
        var cookie = cookieArray[i].trim();
        if(cookie.indexOf(name) == 0){
            return cookie.substring(name.length,cookie.length);
        }
    }
}