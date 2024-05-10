//! Array_filter
let numarray=[34,45,656,76,36,80];

let result=numarray.filter(function(item){
     return item>50
})
console.log(result);
let result1=numarray.filter(function(item){
    return item<50
})
console.log(result1);