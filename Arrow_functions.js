// Arrow fuction are same as fucntion with simple syntax 
// we difine function usiing function keyword but in Arrow function 
// we use => to create function 

const square = number => number * number

// the first part of const square is const variable or object to refer that function
// second = number is paramater which is only one if there is no parameter
// we write this as () empty paranthesis 
//then => expression saying that this is the function
// and after that number * number is return statement
// this is the complete function in one line 


// this line printing the output of the function and passing value to it by calling it
console.log(square(4));

//Lets take a look at a example 

const jobs = [

    {id:1,isActive:true},
    {id:2,isActive:true},
    {id:3,isActive:false}
];

// this is normal function
const jobActive = jobs.filter(function(job){
    return job.isActive;
});
console.log(jobActive);

// now try this with arrow function 
const jobActiveArrow = jobs.filter(job =>  job.isActive);

console.log(jobActiveArrow);
