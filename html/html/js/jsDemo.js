/**
 * Created by dongyp on 2017/12/13.
 */
function changeText() {
    if(document.getElementById("zx").innerHTML == "邹鑫大傻逼"){
        document.getElementById("zx").innerHTML = "易伟大傻逼";
        return;
    }
    document.getElementById("zx").innerHTML = "邹鑫大傻逼";
}

function verify() {
    // var value1 = document.forms.form1.something.value;
    var something = document.forms["form1"]["something"];
    if(something.value == undefined || something.value == null || something.value == ""){
        alert("不能为空！");
        return;
    }

    if(something.checkValidity()){
        alert("输入正确");
    }
}