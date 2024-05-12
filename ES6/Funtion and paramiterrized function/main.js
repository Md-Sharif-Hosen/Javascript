//!function
let name=function(){
    let a=40;
    let b=45
    let c =a+b;
    console.log('total '+c);
}
name();

//!parameterized function

function sum(x,y){
    let z=x+y;
    return z;
}
console.log("Total: "+sum(40,50)); 


//!rest perameter function
let jogkoto=function(x,y,...p){
    let sum=0;
    for(let i of p){
        sum=sum+i;
    }
    return sum;
}
console.log("Total: "+jogkoto(40,50,5,5,5,5)); 

console.log(+jogkoto(40,50,5,5,5,5) +sum(40,10)); 


// !return function
function fun1(){
    let z=10+40;
    return z;
}
function fun2(){
    return fun1()
}
console.log(fun2());

//! anonymous Function
 let hello=function(z,y,...p){
   x=z+y;
   return x;
 }
 console.log(hello(80,10,2,5,6,6,6));


 //!Arraw function
 const tamu=(x)=>{
    return x;
 }
 console.log(tamu('hello tamu'));
 const tamu1=(...x)=>{
    let sum=0;
    for(let i of x){
        sum=sum+i;
    }
    return sum;
    
 }
 console.log(tamu1(5,5,56,69,6));