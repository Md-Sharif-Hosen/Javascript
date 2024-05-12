let Sharif={
    age:26,
    color:"chocholate",
    height:"6'8",
    wight:70,
    hair:"yes",
    Haircolor:"Black",
    shirt:{
        color:"offwhite",
        length:28,
        body:39
    },
    cap:{
        color:'red',
        price:400
    },
    brandModel:function(){
        return "this is sharif";
    }
}
console.log(Sharif);
console.log(Sharif.cap);
console.log(Sharif["shirt"]["color"]);
console.log(Sharif.brandModel());