//! find integer
let num=7;
let num1=7.7;
console.log(Number.isFinite(num)); //সসীম নাম্বার
console.log(Number.isFinite(num1)); //integer

//! convert float to integer
let num2= "7.8";
console.log(Number.parseFloat(num2));

//! convert float to integer
console.log(Number.parseInt(num2));

//! toFIx

let num3=4.666655;
console.log(num3.toFixed(3));

//! TOstring()
console.log(num3.toString());