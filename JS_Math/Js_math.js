// JavaScript Math

// If need a round figure
let num=20.340;
console.log(Math.round(Math.PI));
console.log(Math.round(3.9));
console.log(Math.ceil(num)); //দশমিক এর কোন নাম্বার থাকলে ১ যোগ হবে
console.log(Math.floor(num)); ///দশমিক এর কিছু থাকলে অ্যাড হবে নাহ

//!Sqaure Value
let num1=3;
console.log(Math.pow(num1,2));

//! Root Value
console.log(Math.floor(Math.sqrt(68)));
console.log(Math.sqrt(68));

//!Absulate value
console.log(Math.abs(-39));

//! Min and Max Value
console.log(Math.min(2,4,24,46,5));
console.log(Math.max(2,4,24,46,5));

//! sin/ cos এর মান
console.log(Math.cos((90 * Math.PI)/180));
console.log(Math.sin((90 * Math.PI)/180));
// console.log (Math.floor(Math.sin((120 * Math.PI)/180)));
// console.log (Math.floor(Math.cos((90 * Math.PI)/180)));

//!Random Number
console.log(Math.random())
console.log(Math.random().toFixed(2))
console.log(Math.random().toFixed(2)*10)
console.log(Math.random().toFixed(2)*10+2)
console.log(Math.floor(Math.random().toFixed(2)*10+2));

function roledice(){
    let randomNumber =Math.floor(Math.random()*6+1);
    let imageSource= "img/"+ randomNumber +".png";
    document.getElementById("ludu").src=imageSource;
}