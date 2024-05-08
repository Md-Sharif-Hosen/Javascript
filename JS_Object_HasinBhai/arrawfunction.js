const person = {
    firstName:'Sharif',
    lastName:'Ahmed',
    email:'mdsharif@gmail.com',
    fullName:()=>`${person.firstName} ${person.lastName}`,
    greet:()=> `welcome ${person.fullName()}`
}
// const result =person.fullName();
// console.log(result);
console.log(person.fullName());