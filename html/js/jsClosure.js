/**
 * Created by dongyp on 2017/12/19.
 */

//为了理解闭包

function add() {
    sum = 0;
    this.plus = function () { //这个this指向 add() 的一个调用
        sum++;
        console.log(sum);
    }
}

var obj = new add();
obj.plus();
obj.plus();
obj.plus();

function demo() {
    return this;    //这个this指向window
}
