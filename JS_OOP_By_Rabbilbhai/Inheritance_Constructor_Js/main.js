// ! Inheritance Constructor

// *🟪 Constructor inside only parent class
/*
class father{
  
    constructor(){
    console.log(`THis is constructor of father class`);
   }
}
class child extends father{

}
const instance = new child();

//! 🟪 Constructor inside only parent class pass parameters

class father{
    constructor(msg){
        console.log(msg);
    }
}
class child extends father{

}
const obj =new child('This is father constructor extends child');
const objfather =new father('This is father constructor');



//! Constructor inside only child class

class Mehedi {}
class eusuf extends Mehedi {
  constructor() {
    super();
    console.log(`This is Eusuf Constructor`);
  }
}
const eusufobj = new eusuf();

// !🟪 Constructor inside only child class pass parameters

class SHimul {}
class Parthib extends SHimul {
  constructor(msg) {
    super();
    console.log(msg);
  }
}

const pathibobj = new Parthib("This is child Parthib constructor");

// !🟪 Constructor inside both parent & child class

class Mukta {
  constructor() {
    console.log(`THis is mukta constrator`);
  }
}
class Mithila extends Mukta {
  constructor() {
    super();
    console.log(`This is child mithila constractor`);
  }
}
const muktaobj = new Mukta();
const mithilaobj = new Mithila();
*/

// ! 🟪 Constructor inside both parent & child class pass parameters
class Mukta {
  constructor(msg) {
    console.log(msg);
  }
}
class Mithila extends Mukta {
  constructor(msg) {
    super();
    console.log(msg);
  }
}
const muktaobj = new Mukta(`THis is mukta constrator`);
const mithilaobj = new Mithila(`This is child mithila constractor`);
