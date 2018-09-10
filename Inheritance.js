// inheritance inherit all methods from parent class 

class Person {
    constructor(name){
        this.name = name;
    }
   
    walk(){
        console.log(this.name);
    }
}
 const person = new Person('Ali');
 person.walk();
 


 //extends keywork inherit parent class which is Person
class Teacher extends Person{

    
    constructor(name,digree){
    // for constructor we need to call parent class constructor with keyword super
    // this way we initilize name 
    super(name);
    // and this way we initize digree
    this.digree = digree;    
    }

    teach(){
        console.log("name: "+this.name+" digree: "+this.digree);
    }
} 

const teacher = new Teacher("Ali","BSIT");
teacher.teach();