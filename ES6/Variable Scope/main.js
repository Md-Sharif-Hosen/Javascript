//!LOcal Scope
let sharif =function(){
    let name="Sharif hosen" //!local scpoe ভিতরেই কাজ করবে বাইরে থেকে কল করলে কাজ করবে নাহ । 
    console.log(name);
}
sharif();

//!Global Scope

let Tamu="Sharif HOsen";
let sariq=function(){
    console.log(Tamu);
}
console.log(Tamu);
sariq();