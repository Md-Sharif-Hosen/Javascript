/*
//Javascript Function

5 Types of Function:

  1.general function
  2.Anonymous function
  3.Arraw function
  4.Imedieatly invoked function expresstion(IIFE)

1.General Function:

function addTwonumber(){
    let a=10;
    let b=20;
    let result=a+b;
    document.write(result);
}
addTwonumber();
addTwonumber();

//function parameter pass
function addTwonumber(num1,num2){
    let a=num1;
    let b=num2;
    let result=a+b;
    let resul1=a-b;
    let resul2=a*b;
    let resul3=a/b;
    document.write(result ," ",resul1," ",resul2," " ,resul3);
}
addTwonumber(100,300);



//Function Return
 function myfuntion1(){
    let a=100;
    let b=30;
    return result=a+b;
 }
 function myfuntion2(){
    let a=10;
    let b=40;
    return result=a-b;
 }
 let x=myfuntion1()+myfuntion2();
 let y=myfuntion1()-myfuntion2();
 let z=myfuntion1()* myfuntion2();
 let u=myfuntion1() / myfuntion2();
 alert(x);
 alert(y);
 alert(z);
 alert(u);
 

 

2.Anonymous Function নাম বিহিন ফাংশন

const username = function (name ,sec){
    alert ("Hello " +name +" "+sec);
}
username('Sharif', "Ahmed");

3. Arraw Function(lamda FUnction)


const myName = (a, b) => {
  alert("Hello " + a + b);
};
myName("Sharif ","Ahmed");


4.Imedieatly invoked function expresstion(IIFE)

(()=>{
    alert("Hello Bhaijan");
    document.write("WhatsApp");
})();


5.Constructor FUnction

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather.firstName);
// Display age
document.getElementById("demo").innerHTML =
"My father is " + myFather.age + "." +"His Favourite color is "+ myFather.eyeColor; 

*/