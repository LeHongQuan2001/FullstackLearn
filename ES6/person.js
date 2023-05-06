class Person{
    constructor(){
        this.name = "LE hon quan";
        this.age = 13;
    }
    getname(){
        return this.name;
    }
    getage(){
        return this.age;
    }
    setage(age){
        this.age=age;
    }
}
var person = new Person();
person.setage(23);
console.log("Ten: " + person.getname());
console.log("Tuoi: " + person.getage()); 