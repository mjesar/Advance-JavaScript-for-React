export class Person {
    constructor(name){
        this.name = name;
    }
   
    walk(){
        console.log(this.name);
    }
}
 const person = new Person('Ali');
 person.walk();