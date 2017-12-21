// 原型
// 原型包含一个对象（"prototype"对象），是构造函数特有的属性。
// 将所有实例对象共享的属性和方法放在里面，不需要共享的属性和方法则放在构造函数里面。它能继承私有和共享属性和方法。
// 创建实例时是根据构造函数的原型来创建实例对象模型的。

//创建一个构造函数
function Person(name){
    this.name = name;
}

//创建两个实例并输出
var p1 = new Person("张三");
var p2 = new Person("李四");
console.log(p1.name, p2.name);

//给实例p1一个属性sex,那么这个属性就是p1私有的,p2不会有
p1.sex = "男";
console.log(p1, p1.name, p1.sex); /* 输出男 */
console.log(p2, p2.name, p2.sex); /* 输出undefined */

//Person.prototype 和 p2._proto_ 指向的是同一个对象原型
Person.prototype.age = 11;
p2.__proto__.age = 12;
console.log(p1, p1.name, p1.age);
console.log(p2, p2.name, p2.age);

//创建一个Student的构造函数
function Student(name,age) {
    //调用Person的构造函数
    Person.apply(this,arguments);
    this.age = age;
}
//继承Person的原型
Student.prototype = Person.prototype;

//
var s1 = new Student("学生一",20);
var s2 = new Student("学生二",21);
console.log(s1, s1.name, s1.age, s1.__proto__.age);
console.log(s2, s2.name, s2.age, s2.__proto__.age);

//总结一下：原型属性和对象属性是不同的，原型属性共享，而对象属性私有
//原型属性需要通过 函数.prototype 或者 对象._proto_ 来进行设置，设置完成后所有对象共享
//对象属性是对象私有的,改变自己的属性不会影响其他对象的属性

// http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html

