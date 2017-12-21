/**
 * Created by dongyp on 2017/12/20.
 */
// 函数的自调用
(function jsonObj() {
    var jsonStr = '{"person":[{"name":"邹鑫"},{"name":"易伟"},{"test":"傻逼"}]}'
    var obj = JSON.parse(jsonStr);
    console.log(obj);

    var str = JSON.stringify(obj);
    console.log(str);
})();