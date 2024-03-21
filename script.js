/*//Primitive data type
let num=39;
let float=45.55;
let bulean=true;

console.log(num,float, bulean);

//non primitive data type
let names= "This is Sharif";
console.log(names);
let array =['Sharif' ,599,383.55 , "Ahmed"];
console.log(array);

/Non Primative Data type
 const person ={
    name:"Sharif",
    age:25,
    hobbies:["music","movie",'Sports'],
    address:{
        street:"600 fit ",
        city:"Dhaka",
        state:"DhA"
    },
 }
console.log(person);

//let variable
let n1= 20;
 n1=n1+ 20;
let n2= 30;
let n=n1+n2;
console.log(n);

//constant variable
const n3=40;
const n4=20;
const r= n3-n4;
console.log(r);



//Butoon click open and Close
const header1=document.getElementById('header1');
const header2=document.getElementById('header2');
const para1= document.querySelector('p');
const para2= document.querySelectorAll('p')[1];

header1.addEventListener('click',()=> {
    para1.style.display=para1.style.display === 'none'?"block":'none';
});
header2.addEventListener('click',()=> {
    para2.style.display= para2.style.display === "none"? 'block':"none";
});


//Mathmetical operator
const num1= 20;
const num2= 30;
const sum= num1+num2;
const mul= num1*num2;
const div= num1/num2;
const SUb= num1-num2;
console.log(sum,mul,div,SUb);


//Function  
const n1 =20;
const n2 = 30;
const result= add(n1,n2);
const result1= sub(n1,n2);
const result2= mul(n1,n2);
const result3= div(n1,n2);

function add(a,b){
    return a+b;
} 
function sub(a,b){
    return a-b;
} 
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
console.log(result,result1, result2 , result3);



// Array
const books= ['love','is ','power','love is','Money'];

console.log("Total Books "+ books.length); //coercion


//conversion
const n1= Number("40");
const n2 = 30;
const n =n1+n2;
console.log(n);

//Concatanation
let name= "sharif ";
let lastname="Ahmed";
let final=name+lastname; ///concatanation
console.log(final);



//Sting interpolation
const firstName= "Sharif ";
const lastName= "Ahmed ";
const age=25;
const output="Hey my name is " + firstName + lastName + "and age Of"+ age +"Years";
console.log( output);

//template literral
const output1=`Hey my name is ${firstName}  ${lastName}  and age Of ${age} Years`;
console.log( output1);


const num = 20;
const remainder = num%2;
if(remainder==0){
    console.log("the number is even")
}else{
    console.log('this number is ODD')
}
const a=10;
for(let i=0;i<=a;i++){
    console.log(i);
}
*/