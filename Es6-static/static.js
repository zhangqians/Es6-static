/**
 * Created by Administrator on 2016/10/6.
 */
"use strict"
class People {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        return this.name;
    }
    static formatName(name) {
        return name[0].toUpperCase() + name[2].toLowerCase();
    }
}

console.log(People.formatName("toM")); // Tm
// console.log(People.sayName());//People.sayName is not a function
var man=new People("zhangqian"); //实例化
console.log(man.sayName()); //zhangqian
// console.log(man.formatName("zhang")); //man.formatName is not a function
// 静态方法不能被实例调用
