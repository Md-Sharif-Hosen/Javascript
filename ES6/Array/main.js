// let arr=['Sharif','hosen',26,'Single'];
// for(let item of arr){
//     console.log(item);
// }
// let country= new Array( "Bangladesh",'India','Pakistan');
// for(let item of country){
//     console.log(item);
// }

// console.log(arr);
// console.log(arr[2]);
// console.log(country[2]);


//!multidimetional Array
let a=['a','d','c','g','t'];
let arr1=['a','c','g','t'];
let arr2=['a','d','c','g','t'];

let resut=[a,arr1,arr2];
console.log(resut);
console.log(resut[2][4]);

//!array de structuring
var contries=['BNG',"IND","PAK","SRI"];
var [,,,b]=contries;
console.log(b);