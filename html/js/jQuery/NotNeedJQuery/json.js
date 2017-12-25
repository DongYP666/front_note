/**
 * Created by dongyp on 2017/12/23.
 */

// --------- jQuery ---------

$.getJSON('../../../resource/txt/jsonObj.txt', function(data) {
    console.log("json", data);
});

// --------- 原生JS实现 ---------

var request = new XMLHttpRequest();
request.open('GET', '../../../resource/txt/jsonObj.txt', true);  //true（异步）

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log("json", data);
    } else {

        // We reached our target server, but it returned an error
    }
};

request.onerror = function() {
    // There was a connection error of some sort
};

request.send();

// --------- 注释 ---------

// status状态
// 由服务器返回的 HTTP 状态代码
// 1xx:信息响应类，表示接收到请求并且继续处理。(所有拉去的货，工厂还没有加工完毕)
// 2xx:处理成功响应类，表示动作被成功接收、理解和接受。。(所有拉去的货工厂全部加工完毕)
// 3xx:重定向响应类，为了完成指定的动作，必须接受进一步处理 。(所有拉去的货，工厂设备不够，让其他工厂帮忙加工)
// 4xx:客户端错误，客户请求包含语法错误或者是不能正确执行 。(这十车货有质量问题，工厂不能正常加工)
// 5xx:服务端错误，服务器不能正确执行一个正确的请求。(工厂在加工到一半过程中断电，不能继续加工)
// 当 readyState 小于 3 的时候读取这一属性会导致一个异常。

// responseText
// 目前为止为服务器接收到的响应体（不包括头部），或者如果还没有接收到数据的话，就是空字符串。
// readyState 小于 3，这个属性就是一个空字符串。
// readyState 为 3，这个属性返回目前已经接收的响应部分。
// readyState 为 4，这个属性保存了完整的响应体。