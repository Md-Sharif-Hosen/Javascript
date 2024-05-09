//?* Class
/*
🟪 Classes are blueprints of an Object
🟪 Class is a template while Objects are instances of the class
🟪 Using let or var to declare variables inside a class is unnecessary because class
properties are automatically scoped to the class instance and don't require explicit
variable declarations
*/
/*
class person{
    // properties
    first_name="Sharif"
    last_name="Hosen"

    // method
    fullName(){
        return (`This is ${this.first_name} ${this.last_name}`)
    }
}
const person1 =new person();
console.log(person1.fullName());
*/

//! Re-declaring Class
//* 🟪 A class can be declared once only. If we try to declare class more than one time, it throws an error.
/*
class person{
    // properties
    first_name="Sharif"
    last_name="Hosen"

    // method
    fullName(){
        return (`This is ${this.first_name} ${this.last_name}`)
    }
}
const person1 =new person();
console.log(person1.fullName());
*/
//* Another way to define a class is by using a class expression.
// *🟪 Here, it is not mandatory to assign the name of the class.
// *🟪 So, the class expression can be named or unnamed
/*
class Person {
//Properties
first_name='Jhon'
last_name='Dee'
//method
getName() {
return (`The name of the person is ${this.first_name} ${this.last_name}`)
}
}
const person1 = new Person();
console.log(person1.getName());
class Person {
//Properties
first_name='Jhon'
last_name='Dee'
//method
getName() {
return (`The name of the person is ${this.first_name} ${this.last_name}`)
}
}
const person1 = new Person();
console.log(person1.getName());
class Person{
}
let Person=class {
//Properties
first_name='Jhon'
last_name='Dee'
//method
getName() {
return (`The name of the person is ${this.first_name} ${this.last_name}`)
}
}
const person2 = new Person();
console.log(person2.getName());

*/





var Person = class {
  //Properties
  first_name = "Jhon";
  last_name = "Dee";
  //method
  getName() {
    return `The name of the person is ${this.first_name} ${this.last_name}`;
  }
};
const person1 = new Person();
console.log(person1.getName());
//Re-declaring Class
var Person = class {
  //Properties
  first_name = "Robin";
  last_name = "Hood";
  //method
  getName() {
    return `The name of the person is ${this.first_name} ${this.last_name}`;
  }
};
const person2 = new Person();
console.log(person2.getName());
