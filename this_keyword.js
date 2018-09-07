// this key word referes to the current object

/* The this keyword in an object constructor 
does not have a value. It is only a substitute
 for the new object.The value of this will become
  the new object when the constructor is used to 
  create an object
 */
const person = {
    name: "Ali",

    profile(){
        console.log(this);
    }

};
// calling this method in differt ways can change this behave
// like calling this with object name referes the object
person.profile();

const profile = person.profile;
// but calling it with stand alone doesnt now about this  
profile();

//console.log(profile);