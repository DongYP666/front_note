/**
 * Created by dongyp on 2017/12/23.
 */

// --------- jQuery ---------

var params = {"name":"sbzx","age":"11"};

$.post('../../../resource/txt/jsonObj.txt', params, function (data) {
    console.log("post", data);
});

$.ajax({
    type: 'POST',
    url: '../../../resource/txt/jsonObj.txt',
    data: params, //参数
    dataType: 'text', //返回值的类型
    success: function (data) {
        console.log("post", data);
    },
    error: function() {

    }
});

// --------- 原生JS实现 ---------

var request = new XMLHttpRequest();
request.open('POST', '../../../resource/txt/jsonObj.txt', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = request.responseText;
        console.log("post", data);
    } else {
        // We reached our target server, but it returned an error
    }
}

request.onerror = function() {
    // There was a connection error of some sort
};

request.send(params);

// --------- 注释 ---------

// ajax的datatype选项的值
// 1、"xml"：返回 XML 文档，可用 jQuery 处理。
// 2、"html":：返回纯文本 HTML 信息；包含的 script 标签会在插入 dom 时执行。
// 3、"script":：返回纯文本JavaScript 代码。不会自动缓存结果，除非设置了 "cache" 参数。注意：在远程请求时(不在同一个域下)，所有 POST 请求都将转为 GET 请求。（因为将使用 DOM 的 script标签来加载）
// 4、"json": 返回 JSON 数据 。
// 5、"jsonp": JSONP 格式。使用JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数，经常被用来同主域名下不同二级域名下的跨域请求。
// 6、"text": 返回纯文本字符串。