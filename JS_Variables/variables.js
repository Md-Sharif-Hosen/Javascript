//Javascript Variables

/*
 *1. JavaScript variable names are case-sensitive
 !2. Variable names cannot contain spaces.
 *3. Variables cannot be the same as reserved keywords such as `if` or `const`.
 *4. By convention, JavaScript variable names are written in camelCase.
 *5. Variables should be given descriptive names that indicate their content and usage (e.g. `sellingPrice` and `costPrice` rather than `x` and `y`).
 *6. You can not add number first
 *7. _, $ is acceptable but - not accaptable
 */

/*
 *Var Varables:
 *1. You can re declare
 *2. You can re assaign
 *3. Global Scooped
 *4. var is hosted
 */

// * You can re declare:
/*
var a =40;
var a=50;
var a ="Bangladesh";
console.log(a);

*You can re assign:

 var a=500;
 var b="sharif Bhai";
 b="Sharif AHmed";
 console.log(a);
 console.log(b);

*Global Scooped:

var a=50;
var b="Sharif";
{  
    c=150;
    var f=400;
    console.log(b);
    console.log(a);
}
console.log(c);
console.log(f);

*var is hosted:

console.log(hello);
var hello="sharif";
var hello;
console.log(hello)

*/

/*
 *let Varables:
  ! You can not re declare
 * You can re assaign
 ? Block Scooped
 ! let is not hosted
 

 ! You can not re declare:
 
let a=30;
let a="Bangladesh"; //not re declare
console.log(a);


*You can re assign:

let a=50;
a="Bangladesh";
console.log(a);

? Block Scoped

let a=500;
{   
    let b="Sharif";
    console.log(a);
    console.log(b);
}

*Let is not Hosated

console.log(a);
let a;              //not working

*/

/*
 * const Variable
 ! You can not re declare
 ! You can not re assaign
 ? Block Scooped
 ! const is not hosted


 ! You can not re declare:
const a =400;
const a="Taka" //not re declare
console.log(a)

! You can not re assaign:
const sharif=39;
sharif=59;  //not re assign
console.log(sharif);

 ? Block Scooped:

const a=500;
{
    const b="Taka"
    console.log(a+" "+b);
    console.log(b);
}

 ! const is not hosted

 console.log(sharif);
 const sharif;   //not hosted
*/

//const এর মধ্যে যদি কোন array,object থাকে তার keys গুলো change করা যাবে।
 const person={
 firstName:"Md. Sharif Ahemd",
 age:26,
 region:"Bangladesh"
 }
 person.age=25;
 person.qualification="BSc";
 console.log(person);
