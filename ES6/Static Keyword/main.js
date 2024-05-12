class staticClass{
    myfun(name){
        console.log(name);
    }
   static myfun1(name){
        console.log(name);
    }
}
staticClass.myfun1("hell0");

// const obj=new staticClass();
// obj.myfun1("hello")