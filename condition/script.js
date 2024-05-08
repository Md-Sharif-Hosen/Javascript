/*type of Javascript condition:
* 1.Standard if else statement
* 2.Nested if-else statement
* 3.Multiple if-else statement
* 4.Ternary operator
* 5.Short-circuit evaluation.

//  * Standard if-else statement:

let age = 18;
if (age >= 18) {
  console.log("You are a Adult");
} else {
    alert("You are a Child.");
}


// * Nested if-else statement

let marks = 80;
let subject = "math";
if ((marks) => 80) {
  if (subject === "math") {
    console.log("Welcome to science");
  } else {
    console.log("You got arts");
  }
} else {
  console.log("You are Nothing");
}


//* Multiple if-else statement:
let marks = 8;
if (marks >= 80) {
  console.log("You got A+❤");
} else if (marks >= 70) {
  console.log("You got A");
} else if (marks >= 60) {
  console.log("You got A-");
} else if (marks >= 50) {
  console.log("You got B+");
} else if (marks >= 40) {
  console.log("You got B-");
} else {
  console.log("You are Fail😉");
}


// * Ternary Operator(Short hand if else/inline if-else):

let age=18;
age>=18?(console.log("You are Adult")):(console.log("You are Child"));



// * SHort-curcuit / logical && :

let islogin = true;
islogin && console.log("Yes Login");

// * Switch condition:
let day;
switch (new Date().getDay()) {
  case 0:
  console.log(day = "Sunday");
    break;
  case 1:
   console.log( day = "Monday");
    break;
  case 2:
   console.log (day = "Tuesday");
    break;
  case 3:
    console.log(day ="Wednesday");
    break;
  case 4:
   console.log (day ="Thursday");
    break;
  case 5:
   console.log(day ="Friday");
    break;
  case 6:
   console.log (day ="Saturday");
    break
}
*/
// let day;
// switch (new Date().getDay()) {
//   case 0:
//  day = "Sunday";
//     break;
//   case 1:
//    day = "Monday";
//     break;
//   case 2:
//    day = "Tuesday";
//     break;
//   case 3:
//    day ="Wednesday";
//     break;
//   case 4:
//    day ="Thursday";
//     break;
//   case 5:
//   day ="Friday";
//     break;
//   case 6:
//    day ="Saturday";
//     break
// }
// document.getElementById("demo").innerHTML="Today is "+ day;