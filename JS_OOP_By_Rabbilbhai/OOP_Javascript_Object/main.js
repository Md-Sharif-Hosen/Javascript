// ! JavaScript Object
//* An Object is a unique entity that contains properties like.
//! 🟪 Variable type properties
/*🟪 Method properties
  🟪 Object properties 
  🟪 Array properties
*/

// ? There are 3 ways to create objects.

/*
// * 1 By object literal(jason style)

const person={
    firstName:"SHarif",
    lastName:'hosen',
    fullName(){
        return this.firstName + " "+ this.lastName
    },
    greet:()=> `welcome ${person.fullName()}`
    
}
console.log(person.greet());
console.log(person.fullName());


//copy object
const newperson=Object.create(person);
newperson.firstName="Tamanna";
console.log( newperson.fullName());

*/


//* 2 By creating instance of Object
/*
const person =new Object();

person.firstName="Sharif";
person.lastName="Hosen";
person.fullName=function()
{
  return (`this is ${person.firstName} ${person.lastName}`);
}
console.log(person.fullName());
*/
// * 3 By using an Object constructor

function person(){
  this.firstName="Sharif";
  this.lastName="Hosen";
  this.fullName=function(){
    return `this is ${this.firstName} ${this.lastName}`;
  }
}
var person = new person();
console.log(person.fullName());