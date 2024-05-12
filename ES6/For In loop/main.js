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
}


// for(let props in Sharif){
//     console.log(props+":"+Sharif[props]);
// }

// for(let props in Sharif){
//     if (props === 'cap' || props === 'brandModel' || props === 'shirt') {
//         console.log(`${props}:`, Sharif[props]);
//     }
// }


// const variable = ['age', 'color', 'height', 'hair', 'Haircolor', 'shirt'];
// for(let props in Sharif){
//     if(variable.includes(props)){
//         console.log(props+":"+ Sharif[props]);
//     }

// }

for (let key in Sharif) {
    if (typeof Sharif[key] === 'object') {
        console.log(`${key}:`);
        for (let nestedKey in Sharif[key]) {
            console.log(`  ${nestedKey}: ${Sharif[key][nestedKey]}`);
        }
    } else {
        console.log(`${key}: ${Sharif[key]}`);
    }
}