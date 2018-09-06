// var is accessable in whole funcion 





// let is only accessable inside the block like {}
function hello(){
    for (let i = 0; i < 5; i++){
        console.log(i);
        
    }
   // i can not accessable here so i shows error that i not found
   // console.log(i);

}
hello();

// varibale type const is where varible can be read only and which is constant 
// you cant reassign a const varible for example

const num = 1;
//num = 2; this line will show an error bcs we cant assign another vaible to const


