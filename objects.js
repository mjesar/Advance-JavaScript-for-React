//Object is key value pairs 
// we can define varibales and method function inside a Object
// and assign it to const variable
const x = {

    strValue:"String Value here ",
    numValue:12345,
    // a function is inside a object that is refer to as method 
    animal: function(){
        // method body
    },
    // two ways to create method or function inside object
    birds(){
        // method body
    }
};

// Two ways to accessing membrs 
// target member of a object like in my code it is string strValue

x["strValue"]="Ali";
// you can do this using a const varible 
const nV = 1111
x["numValue"]=nV;

// you can that member as simple as posible like calling method 
x.strValue = "Pass Any String Value";
// and call method of an object 
x.birds();