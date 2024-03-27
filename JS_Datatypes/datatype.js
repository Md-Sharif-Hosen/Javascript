// JavaScript Data Types
/*
? JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol => I will create a separate video on this 😊
8. Object
*/

/*
! 1. String:
 * You can use single or double quotes
 * The sequence \'  inserts a single quote in a string
 */
let firstName = 'Ahmed';
firstName = 'ShArif';
// let fullName = 'My Name is \'Ali\'';
let fullName = "My Name is 'Ali'";

let finalName = `My Name is ${firstName}`;

console.log(finalName);
console.log(typeof finalName)

/*
! 2.Number:
 * JavaScript has only one type of number
 */
let age = 30; // Without Decimals
let ageNew = 30.5; // With Decimals
let age2 = finalName + 5 + 10;
let calculation = age + age2 + firstName + age + age2;
console.log(calculation);
console.log(typeof age);

/*
 ! 3. BigInt:
 * To create a BigInt, append n to the end of an integer or call BigInt()
 * BigInt can not mix with other data types
 * A BigInt can not have decimals
 */
 let numberBig = 9n;
 let numberBig2 = BigInt(age);
 let result = numberBig * numberBig2
 console.log(result);
 console.log(typeof numberBig2)
 
 /*
 ! 4. Boolean:
 * Booleans can only have two values: true or false
 */
let ifAdult = false;
let sharif =true;

console.log(sharif);
console.log( typeof sharif);

/*
! 5. Undefined:
*/
let mrShrif;

console.log(mrShrif);
console.log(typeof mrShrif);

/*
! 6.Null:
*/
let mrsTamu =null;
console.log(mrsTamu);
console.log( typeof mrsTamu);

//DIfference between undefined and null
console.log(mrShrif == mrsTamu);
console.log(mrShrif === mrsTamu);

/* 
! 7.Symbol:
*/
const sym = Symbol("foo");
console.log(sym);
console.log(typeof sym)

/*
! 8.Object:
*/
let person = ["sharif", 26, true, null , undefined, 50n];
person[0]="Sharif AHmed";
console.log(person)
console.log(typeof person)

let car ={
   model:"BMW",
   year: 2024,
   country:"Bangladesh",
   available:true,
   stock:undefined,
   parse:null,
   price:10n
}
car.model="toyota";
console.log(car)
console.log( typeof car)

let a=10; b=10; c=10;
if(a==b==c)
{
    console.log("hello")
}else{
console.log("Bye bye")
}