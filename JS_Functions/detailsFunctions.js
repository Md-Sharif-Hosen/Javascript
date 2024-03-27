// JavaScript Functions

/* ==============================
* 1.Code-Driven Invocation:
? 2.Event driven invocation:
? 3.Functioned is invoked (called)
* 4. Called directly from other parts of the JavaScript code.
* 5.Used for tasks like calculations, data manipulation, and logic execution.
================================ */

// ! 1.Code-Driven Invocation:
/*
function myFunction(fullName, age, dateOfBirth = 1991) {
    console.log(
      'Hello ' + fullName + ' I am ' + age + ' My Date of Bith ' + dateOfBirth
    );
  }
  myFunction('Ali', 30, 1995);
  myFunction('Shovo', 35, true);
  */

//  ! 2.Event driven invocation:
/*
function issuscribed (){
    alert ( "suscribed");
}
document.getElementById('btn').addEventListener("click",issuscribed);
*/

// ? 3.Functioned is invoked (called)
/* ====================================
? Automatic (Self-Invoked) Invocation
* Executes immediately after being defined.
* Commonly used with Immediately Invoked Function Expressions (IIFEs).
======================================= */
/*
((x, y) => {
  alert(x + y);
})(30, 50);
*/

/* ===================
? Function Expression
===================== */
// Return a Value From a Function
// A function expression in JavaScript is a function that is stored as a value, and can be assigned to a variable or passed as an argument to another function.
let maths = function (x, y) {
    console.log('Testing if I am working of not');
    return x * y;
    // return undefined;
  };
  console.log(maths(3, 4));
  console.log(maths(4, 4));
  console.log(maths(4, 5));
  /*

? Local Variables
? Variables declared within a JavaScript function, become LOCAL to the function.
? Local variables can only be accessed from within the function.
*/
function newFunc() {
    let firstName = 'Ali';
    console.log(firstName);
  }
  
  newFunc();
  
  function newFuncs() {
    let firstName = 'Ali';
    console.log(firstName);
  }
  
  newFuncs();

  /* ===================
? Anonymous Function
===================== */
let numbers =[3,4,5,6,7];
let sqNumber=numbers.map(function(number){
      return number*number;
});
console.log(sqNumber)

/* ===================
? Arrow Functions
===================== */

/*
let add = function (x, y) {
  return x + y;
};
console.log(add(5, 6));
*/
let add = (x, y) => x + y;
console.log(add(5, 6));

/* ===================
? Nested Functions
===================== */
function greet(firstName) {
    function sayHello() {
      alert('Hello ' + firstName);
    }
    return sayHello();
  }
  greet('Sharif');