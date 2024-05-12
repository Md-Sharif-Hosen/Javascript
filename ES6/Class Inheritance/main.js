// class parent{
//     name="SHarif";
// //   static  myfun(name){
// //         console.log(name);
// //     }
//      myfun(name){
//         console.log(name);
//     }
// }

// class child extends parent{

// }

// // child.myfun("static keyword");
// const objchild=new child()

// objchild.myfun("object create call")


//!inhertitance overriding
// class parent1{
//     sharif(){
//         console.log("this is SHarif");
//     }
// }
// class child1 extends parent1{
//     sharif(){
//         console.log("this is his son");
//     }
// }
// let obj2=new parent1()
//  obj2.sharif();
// let obj1=new child1()
// obj1.sharif();

///!Super keyword
// class parent1{
//     sharif(){
//         console.log("this is SHarif");
//     }
//     hosen(){
//         console.log("this is Hosen");

//     }
// }
// class child1 extends parent1{
//     demo(){
//         super.sharif();
//         super.hosen();
//     }
// }
// let obj1=new child1()
// obj1.demo();

//!constructor heheritance
// class x{
//     constructor(a){
//         console.log(a)
//     }
// }
// class y extends x{

// }
// const object=new x('Rahim')
// const object1=new y("SHakib")

//!another way
// class x{
   
// }
// class y extends x{
//     constructor(a){
//         super();
//         console.log(a)
//     }
// }
// const object=new x()
// const object1=new y("SHakib")


//!another way
class x{
    constructor(a){
        console.log(a)
    }
}
class y extends x{
    constructor(a){
        // super();
        console.log(a)
    }
}
const object=new x("Hello");
const object1=new y("SHakib")


