//!! Encapsulation

//* Encapsulation Using Closures
/*
function profile() {
  let details = "Profile Details";
  return {
    update() {
      console.log("Profile Update");
    },
    photoupload: function () {
      console.log(`photo upload`);
    },
    passrest() {
      console.log(`password reset`);
    },
  };
}
const lernProfile = profile();
lernProfile.photoupload();
lernProfile.passrest();

//* Using Constructor Functions

function Car(make, model) {
  let mileage = 10;
  this.getMake = function () {
    return make;
  };
  this.getModel = function () {
    return model;
  };
  this.getMileage = function () {
    return mileage;
  };
  this.drive = function (distance) {
    mileage += distance;
  };
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getMake()); // Output: Toyota

console.log(myCar.getMileage()); // Output: 0
myCar.drive(100);
console.log(myCar.getMileage()); // Output: 100
console.log(myCar.mileage); // Output: undefined (mileage is encapsulated
*/
//! Using ES6 Classes
class BankAccount {
  #blance = 0; //# means private field

  deposit(amount) {
    this.#blance += amount;
  }
  withdraw(amount) {
    if (amount <= this.#blance) {
      this.#blance -= amount;
    } else {
      console.log("Insufficient Blance");
    }
  }
  getblance(){
    return this.#blance;
  }
}
const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getblance());
acc.withdraw(200);
console.log('new Blacce '+ acc.getblance());
// console.log(acc.#blance);// Output: Error (private field is encapsulated
