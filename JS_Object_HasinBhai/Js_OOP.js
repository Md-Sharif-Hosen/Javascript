const person={
    firstName: "Sharif",
    lastName: "Ahmed",
    email:"mdsharifhosen@gmail.com",
    emails:[],
    fullName:function(){
        // return this.firstName + " "+ this.lastName;
        // return person.firstName + " " +person.lastName;
        return `${this.firstName} ${this.lastName}`;
    },
    greet(){
        return `Welcome ${this.fullName()}`
    },
    howMnayEmails(){
         return this.emails.length;
    }

}
person.emails.push(`tamu@gmail.com`);
person.emails.push(`saru@gmail.com`);
person.emails.push(`samu@gmail.com`);

person.sayHi=function(){
    return "Hey Bro!";
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
console.log(person.greet());
console.log(person.howMnayEmails());
console.log(person.emails);
console.log(person.sayHi());

person2=Object.create(person);
person1=Object.create(person);

person1.firstName='Sayma';
person2.firstName='Tamanna';
console.log(person2.greet());
console.log(person1.greet());