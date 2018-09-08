//Spread operator is represented using ... yes three dots 
//Spread operator work is to combine to arrays 

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

// const combine = num1.concat.num2; this is normal way without spread operator 
// now lets do that with spread operator
const combine1 = [...num1, ...num2];
console.log(combine1);

// advantage of spread operator over concat is you can add more element between or after them 
const combine = [...num1,"a" ,...num2,"c",10];
console.log(combine);
