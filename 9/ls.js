//* Розділяйте кожний пункт домашнього в коді коментарями.

//* Використовувати методи масивів

//1. Проітерувати масив [1, 5, true, 'hello', false, null, 'iiii', 54, null]

const array = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
array.forEach((element) => {
    console.log(element);
});
console.log('1-------------------------');

//2. Дано масив [1, 'iiii', 54, false], додати в кінець масиву 433

const arrays = [1, 'iiii', 54, false];
arrays.push(433);

console.log(arrays); 
console.log('2-------------------------');

//3. Дано масив [1, 'iiii', 54, false], додати в початок масиву 'Hello  ay'

const arrayu = [1, 'iiii', 54, false];
arrayu.unshift('Hello  ay');

console.log(arrayu);

console.log('3-------------------------');

//4. Дано масив [1, 'iiii', 54, false], видалити останній елемент з масиву

const arrayi = [1, 'iiii', 54, false];
arrayi.pop();

console.log(arrayi);

console.log('4-------------------------');

//5. Дано масив [1, 'iiii', 54, false], видалити перший елемент з масиву

const arrayk = [1, 'iiii', 54, false];
arrayk.shift();

console.log(arrayk);

console.log('5-------------------------');

//6. Дано масив [5, 44, true, 'he', true, 5, 6] вирізати *в новий масив* з 2 по 5 індекс

const arrayo = [5, 44, true, 'he', true, 5, 6];
const newArrayo = arrayo.slice(2, 6);

console.log(newArrayo);

console.log('6-------------------------');

//7. Дано масив [5, 44, true, 'he', true, 5, 6] вирізати з 2 по 5 індекс дані

const arraypp = [5, 44, true, 'he', true, 5, 6];
const newArraypp = arraypp.slice(2, 6);

console.log(newArraypp);

console.log('7-------------------------');

//8. Дано масив [5, 44, true, 'he', true, 5, 6] вирізати з 3 по 5 індекс та вставити 11, 101, 224

const arrayj = [5, 44, true, 'he', true, 5, 6];
const removedElements = arrayj.splice(3, 3, 11, 101, 224);

console.log(arrayj); 
console.log(removedElements);

console.log('8---------------------------------------------------------------------------------------------------------------');

//9. Дано масив [3, 54, 1, 14, 66, 11, 100, 44, 12, 11]; 
//Знайти елементи 3, 1, 100
const arr = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];
const elements = [3, 1, 100];
const filteredArr = arr.filter((el) => elements.includes(el));
console.log(filteredArr);

console.log('9-------------------------');

//10. Відфільтрувати елементи менше 10 і більше 50

const arrayh = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];
const filteredArrayh = arrayh.filter((element) => {
    return element < 10 || element > 50;
});

console.log(filteredArrayh);

console.log('10-------------------------');

//11. Перевірити чи всі елементи більше 0

const arrеее = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];
const allElementsGreaterThanZero = arrеее.every((element) => element > 0);
console.log(allElementsGreaterThanZero); 

console.log('11-------------------------');

//12. Перевірити чи будь який елемент менше 0

const arrlll = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];
const anyElementLessThanZero = arr.some((element) => element < 0);
console.log(anyElementLessThanZero);

console.log('12-------------------------');

//13. Відсортувати масив за зростанням і спаданням

const arrhhh = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];
arrhhh.sort((a,b) => b - a);
console.log(arrhhh);

console.log('13-------------------------');

//14. Знайти індекс і останній індекс числа: 14, 11, 66/

const arppp = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];
const index14 = arr.indexOf(14);
const lastIndex14 = arr.lastIndexOf(14);
const index11 = arr.indexOf(11);
const lastIndex11 = arr.lastIndexOf(11);
const index66 = arr.indexOf(66);
const lastIndex66 = arr.lastIndexOf(66);
console.log(`Index of 14: ${index14}`);
console.log(`Last index of 14: ${lastIndex14}`);
console.log(`Index of 11: ${index11}`);
console.log(`Last index of 11: ${lastIndex11}`);
console.log(`Index of 66: ${index66}`);
console.log(`Last index of 66: ${lastIndex66}`);

console.log('14-------------------------');