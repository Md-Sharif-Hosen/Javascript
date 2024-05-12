let myset=new Set();
myset.add("BAN")
myset.add("SRI")
myset.add("IND")
myset.add("PAK")
myset.add("CHI")
myset.add("NEP")
myset.add("BAN")

//! .clear() method
// myset.clear();

//!delete () method
// myset.delete("BAN");

//!size() method
console.log(myset.size);

//!values() method
// console.log(myset.values());

//!has() mathod
if(myset.has('BAN')){
    console.log("yes");
}else{
    console.log('NO');
}

console.log(myset);

//! Another way
let myset1=new Set(["a",'v','f','y']);
console.log(myset1);
