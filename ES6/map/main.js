let mymap= new Map();
mymap.set("key1","Banagladesh")
mymap.set("key2","pakistan")
mymap.set("key3","india")
mymap.set("key4","nepal")
mymap.set("key5","srilanka")
mymap.set("key6","thailand")

// console.log(mymap);
// console.log(mymap.values());
// console.log(mymap.keys());

//!delete method
mymap.delete("key1")
mymap.delete("key2")

//!clear mthod
// mymap.clear()

//!get method
// console.log(mymap.get('key4'));

//!has() method
if (mymap.has('key10')){
console.log("yes");
}else{
    console.log("nai Bhai");
}

for(let myvale of mymap.values()){
    console.log(myvale);
}

for(let mykey of mymap.keys()){
    console.log(mykey);
}
