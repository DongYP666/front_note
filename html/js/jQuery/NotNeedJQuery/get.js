/**
 * Created by dongyp on 2017/12/23.
 */

// --------- jQuery ---------

$.get('../../../resource/txt/jsonObj.txt', function (data) {
    console.log("get", data);
});

$.ajax({
    type: 'GET',
    url: '../../../resource/txt/jsonObj.txt',
    dataType: 'text', //返回值的类型
    success: function (data) {
        console.log("get", data);
    },
    error: function() {

    }
});

// --------- 原生JS实现 ---------

var request = new XMLHttpRequest();
request.open('GET', '../../../resource/txt/jsonObj.txt', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = request.responseText;
        console.log("get", data);
    } else {
        // We reached our target server, but it returned an error
    }
}

request.onerror = function() {
    // There was a connection error of some sort
};

request.send();