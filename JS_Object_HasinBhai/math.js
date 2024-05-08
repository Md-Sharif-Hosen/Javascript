function mathX(){}
mathX.prototype.add=function(a,b){
    return a+b;
}
mathX.prototype.subtract=function(a,b){
    return a-b;
}
const m=new mathX();
const result=m.add(12,5);
console.log(result);
// const result = mathX.add(12,4);

const r = (new mathX()).add(12,4);
console.log(r);