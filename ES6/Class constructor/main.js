class myClass {
  constructor() {
    console.log("Bangladesh");
  }
}
let obj = new myClass();



class myClass1{
    constructor(name) {
      console.log(name);
    }
  }
  let obj1 = new myClass1("Bangladesh");
  

  class myClass2{
    constructor(a,b) {
      this.firstNum=a;
      this.secondnumber=b;
    }
    sum(){
        let result =this.firstNum+this.secondnumber;
        console.log(result);
    }
  }
  let obj2 = new myClass2(50,40);
  obj2.sum()
  