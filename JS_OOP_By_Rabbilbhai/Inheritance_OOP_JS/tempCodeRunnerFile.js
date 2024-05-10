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