var jsObj = new Object();
jsObj.name = "DYP";
jsObj.age = 111;
jsObj.sex = "男";

console.log(jsObj);

for(attribute in jsObj){
    console.log(jsObj[attribute]);
}

