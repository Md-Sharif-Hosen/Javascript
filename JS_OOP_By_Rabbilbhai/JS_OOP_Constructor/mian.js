//!Deparameterrized Constructor
class person{
    constructor(){
        console.log("this is Deparameterized constrcuctor");
    }
}
const personins= new person();


//!Parameterrized Constructor
class user{
   
    constructor(name1, name2){  
        console.log(name1,name2);
    }
}
const newUser=new user('Sharif','Hosen');

class count {
    constructor(a,b){
        console.log(a+b);
    }
}
const sumation= new count(40,60);

// ! Change class properties value using constructor
var userprofile = class{
first_name ="Sharif"
last_name = "Hosen"
constructor(name1, name2){
    this.first_name=name1
    this.last_name=name2
    console.log(name1,name2);
}
greet(){
    return `This is ${this.first_name} ${this.last_name}`;
}
}
const userobject = new userprofile('Tamanna',"Hasan");
console.log(userobject.greet());