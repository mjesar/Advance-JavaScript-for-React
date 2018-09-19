import { Person } from "./Module_1";
export class Teacher extends Person{
 constructor(name,digree){
    
    super(name);
    this.digree = digree;    
    }

    teach(){
        console.log("name: "+this.name+" digree: "+this.digree);
    }
} 