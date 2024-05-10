//! Inheritance
class Abulkalam {
    firstName="Sharif";
    lastName="Hosen";
    fullName(){
        return this.firstName + this.lastName;    
    }
    nameobj(){
        return `this is abul kalam`;
    }
}
class Mehedi extends Abulkalam{

}
const Mehediobj = new Mehedi();
console.log(Mehediobj.fullName());
console.log(Mehediobj.nameobj());

class Sharif extends Abulkalam{
  nameobj(){
    return `this is Sharif`;
  }
}
const sharifobj = new Sharif();
console.log(sharifobj.fullName());
console.log(sharifobj.nameobj());

//! Methode overriding
class father{
    math(a=10,b=30,c=50){
        return a+b+c;
    }
}
class child extends father{
   
        math(a=10,b=30){
            return a+b;
        }
}

const obj= new child()
console.log( obj.math());