const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(...nums);
console.log(result);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1];
let newArr1 = arr1;
let newArr2 = [...arr1, 10, ...arr2];

console.log(newArr);
console.log(newArr === arr1);
console.log(newArr1 === arr1);

newArr1.push(4);
console.log(newArr1, arr1);

newArr.push(5);
console.log(newArr, arr1);

console.log(newArr2);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = "John";

console.log(newObj, obj);

const restA = (...argA) => console.log(argA);
restA(1, 3, 4);

const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4);
