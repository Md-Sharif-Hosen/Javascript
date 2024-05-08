class person{
    constructor(firstName,lastName, email){
         this.firstName= firstName;
         this.lastName=lastName;
         this.email=email;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    greet(){
        return `Welcome ${this.fullName()}`;
    }
}

const person1=new person('Sharif','Ahmed','mdsharifkhan762@gmail.com');
const person2=new person('Tamanna','Ahmed','tamannasayma39@gmail.com');

console.log(person1.firstName);
console.log(person1.greet());

console.log(person2.firstName);
console.log(person2.greet());

