/**
 * Created by dongyp on 2017/12/20.
 */

function testThis() {
    console.log(this);
}

testThis(); //直接调用函数，那么函数的上一层为window，this=window实例对象
var testObj = new testThis(); //new testThis()创建一个对象，那么this=testObj实例对象