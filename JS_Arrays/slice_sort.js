//! Array sort

let arr=[9,5,1,7,6];
let result=arr.sort();
console.log(result);
let result1=arr.reverse();
console.log(result1);

//!Array slice

let a=[9,5,1,7,6];
let item=arr.slice(1,3);
console.log(item);


//! Array Splice
let Array =[20,10,6,50,60];

//Array.splice(index.removecount,item)

//10,6 delete
// Array.splice(1,2);
// console.log(Array);

//add
Array.splice(3,0,70)
console.log(Array);
