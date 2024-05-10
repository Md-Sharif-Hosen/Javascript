//* Array concate

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
  const arr1 = [1,3,4];
  const arr2=[5,6,7];
  const b=arr2.concat(arr1);
  console.log(b);