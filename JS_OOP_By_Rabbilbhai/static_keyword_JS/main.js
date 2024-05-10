//  Static Keyword
// 🟪 The static keyword in JavaScript is used to define static methods and properties for a class
// 🟪 Static members (properties and methods) are called without instantiating their class and cannot be called through 
class Sharif{
  static  firstName="SHarif";
    static lastName="Hosen";
     fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    static  greet(){
        return `This is `+ this.firstName+ " " +this.lastName;
    }
}

console.log(Sharif.greet());