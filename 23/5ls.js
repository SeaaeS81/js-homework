//5. Створити довільний об'єкт та масив, вставити через спред оператор їх в інший об'єкт, масив.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const newObj = { ...obj1, ...obj2 };

console.log(newObj);

const arr1 = [1, 2];
const arr2 = [3, 4];
const newArr = [...arr1, ...arr2];

console.log(newArr);
console.log('5-------------------------');
