
// const splitString="Hello".split("");
// console.log(splitString);

const reverseString2 = "helloWorld".split("").reverse().join("");
console.log(reverseString2); 

String.prototype.reverse=function()
{
    return this.split("").reverse().join("");
}

const reverseString = 'Hello World'.reverse();
console.log(reverseString);