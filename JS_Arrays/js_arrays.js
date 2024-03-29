// JavaScript Arrays
/*
const language2 = new Array('HTML', 'CSS', 'JavaScript', 'PHP', true, 50);
console.log(language2);
*/
const language = ['HTML', 'CSS', 'JavaScript', 'PHP', true, 50];
language[4] = 'Tailwind CSS';
language[8] = 'react.js';
language[6] = 'vue.js';
language[7] = 'laravel';
language[10] = 'Bootstrap';

/*
*First Item
console.log(language[0]);

*Last Item
console.log(language.length);
console.log(language[language.length-1]);

* Add first
language.unshift('Basic Computing');

* ADD last item
language.push('Angular.js');


* Delete or Remove Last Item
language.pop();

 * Delete first item
language.shift();
console.log(language);

 * Find keys Values
console.log(language.at(5));
console.log(language[2]);

 * Array to string
console.log(language.toString());

 * Array in any types like
console.log(language.join(' * '));
*/

//* Any value add array keys
/*
language.splice(0,1, 'info', 'info2');
language.splice(2,0, 'info', 'info2');
console.log(language);

//* any value delete array
language.splice(2, 2);
language.splice(0, 2);
console.log(language);
*/
// * constructor Array(use not recommand)
/*
const person = [];
person['firstName'] = 'SHarif';
person['lastName'] = 'Hossain';
person[2] = 35;
console.log(person.length);
console.log(person);
console.log(person[2]);


 const num = [20];
const num = new Array(20);
const num = new Array(20,21);

 console.log(num);

*/

//* Array concate
/*
const x = [1, 2, 3, 4];
const y = [5, 6, 7, 8];
const p = [9, 10, 11];
const z = x.concat(y, p);
console.log(z);

const a = [
    [1, 2, 3, [3, 5, 8]],
    [4, 5,[33,44,44], 6],
    [2, 4, 6],
  ];
  console.log(a);
  console.log(a.flat());
*/