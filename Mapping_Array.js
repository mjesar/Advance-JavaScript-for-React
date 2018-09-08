// MAP function for array used to render lists 

// simple array of color
const colors = ["Red", "Green", "Blue", "Orange"];
// 1: normal function to render array items in list
const item= colors.map(function (color){
 
    return  "<li>" + color + "</li>"

});
console.log("With normal fucntion");
console.log(item);

// using same colors array we apply arrow function just for practice that make it simpler
const item1 = colors.map(color => "<li>" + color + "</li>");
console.log("With Arrow fucntion");
console.log(item1);

// we can make it much simpler by concatenating it will `` is called templete litrals
// method is define a templete for a string and render array items

const item2 = colors.map(color => `<li>${color}</li>`);
console.log("With templete ");
console.log(item2);

