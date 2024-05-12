
// function myFunction(...numbers){
//     let sum=0;
//     for(let i of numbers){
//         sum=sum+i;
//     }
//     console.log(sum);
//  }
//  myFunction(5,5444,9,8);


 //rest parametter with parameter
 
function myFunction(a,b,...numbers){
    let sum=0;
    for(let i of numbers){
        sum=sum+i;
    }
    console.log(sum);
 }
 myFunction(5,5444,9,8);