// class is blueprint of some code like metheds
// where we can define some methods and then resue it and
// if there is a bug we have a single place where we modifi it

class Person {
    // constructor is method of a class which name is reverseved as class name 
    constructor(name){
        // this refers to current object which is created inside  
        this.name = name;
    }
   
    walk(){
        console.log(this.name);
    }
}
 const person = new Person('Ali');
 person.walk();
 