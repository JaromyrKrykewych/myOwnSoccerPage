class MyClass {

    prop1;
    prop2;

    constructor({prop1='', prop2=0}) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }

}

const myArr = ['a', 'b', 'c'];
const myArr2 = [];

myArr.map(item => myArr2.push(new MyClass({prop1:item})));

console.log(myArr2);