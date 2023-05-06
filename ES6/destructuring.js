//Destructuring - pha vo cau truc
var arr=[1,2,3,4];
var [x,y]=arr;
[x,y,z] = arr;

var person = {
    name: 'John',
    age: 34,
    address: '25vnp',
    phone: "123"
}
var {name,age,address} = person;
console.log(name);
console.log(age);
console.log(address);
var {name,age,address} = person;
console.log(name,age,address);