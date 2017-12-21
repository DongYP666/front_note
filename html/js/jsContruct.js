/**
 * Created by dongyp on 2017/12/20.
 */

//创建一个构造函数
function contruct(name,age) {
    this.name = name;
    this.age = age;
    this.add = function () {
        this.age++ ;
    }
}

var testObj = new contruct("ddd",11);
testObj.add();
console.log(testObj);

//创建一个对象
var jsObj = new Object();
jsObj.name = "DYP";
jsObj.age = 111;
jsObj.sex = "男";
console.log(jsObj);

//遍历对象
for(attribute in jsObj){
    console.log(jsObj[attribute]);
}

//创建一个时间对象
var currentDate = new Date();
console.log(currentDate.getFullYear());

//创建一个数组对象
var array = new Array();
array[0] = 111;
array[1] = 222;
array[name] = 333;
array[2] = 333;
console.log(array);

//创建一个Boolean对象(这个有什么用？)
//如果省略 value 参数，或者设置为 0、-0、null、""、false、undefined 或 NaN，则该对象设置为 false。
//否则设置为 true（即使 value 参数是字符串 "false"）。
var boolObj = new Boolean("false");
console.log(boolObj.toString());

//Math（算数）对象的作用是：执行普通的算数任务。
//Math 对象提供多种算数值类型和函数。无需在使用这个对象之前对它进行定义。
console.log(Math.E,Math.PI);
console.log(Math.round(4.7));//四舍五入
console.log(Math.random());//返回一个介于 0 和 1 之间的随机数
console.log(Math.floor(8.4));//向下取整

//正则表达式    var patt=new RegExp(pattern,modifiers)
//或更简单的方法 var patt=/pattern/modifiers;
//i - 修饰符是用来执行不区分大小写的匹配。
//g - 修饰符是用于执行全文的搜索（而不是在找到第一个就停止查找,而是找到所有的匹配）。
var re = new RegExp("\\w+");
var re = /\w+/;

var str = "Is this all there is?";
var reg = /is/ig
console.log(str.match(reg));
console.log(reg.test(str)) //test()方法搜索字符串指定的值，根据结果并返回真或假。
console.log(reg.exec(str)) //exec() 方法检索字符串中的指定值。返回值是第一个被找到的值。如果没有发现匹配，则返回 null。