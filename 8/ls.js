//1 і 3. Мало бути через forEach

//4 і 5. Я говорив на лекції  кілька разів цього не робити:
//typeof item === 'number' && item % 2 === 0. Парні (не парні) елементи масиву а не числа, не копіюйте неправильний код попередніх дз!

//8. На лекції я це завдання писав використовуючи for of, тут треба було так само через forEach

//1. Напишіть цикл, який виводить всі парні числа від 20 до 32. через цикл forEach.
//-------------
for (let i = 20; i <= 32; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log('-------------------------');
//2. Створіть масив зі списком:

  // вашого улюбленого фрукту,
  // вашого улюбленого кольору,
   //ім'я,
  // рандомного числа,
   //вашого віку.

  // Виведіть цей проітерований масив на консоль і визначте його тип даних. через цикл forEach.

  let myArray = ["apple", "green", "Yevhen", 777, 42];

    myArray.forEach(function(item) {
    console.log(item);
    });

console.log(typeof myArray);

console.log('-------------------------');
//--------3. Напишіть цикл forEach. який виводить всі непарні числа від 17 19 21 23 25 27 29 31 33 35 37 39. через цикл forEach.

for (let i = 17; i <= 39; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log('-------------------------');
//4------------------------------. 
//Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи через цикл forEach.

let array = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let index = 0; index < ar.length; index++) {
    if ((index + 1) % 2 !== 0)
}



//array.forEach(function(item) {
    //if (typeof item === 'number' && item % 2 === 0) {
       // console.log(item);
 //   }
//});
console.log('-------------------------');
//5-----------------------------. 
//Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи через цикл forEach.
let arrays = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

arrays.forEach(function(item) {
    if (typeof item === 'number' && item % 2 !== 0) {
        console.log(item);
    }
});
console.log('-------------------------');

//6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву. через цикл forEach.

let arrayt = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let sum = 0;

arrayt.forEach(function(item) {
    sum += item;
});

console.log(sum);
console.log('-------------------------');

//7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву. через цикл forEach.
let arrayn = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let product = 1;

arrayn.forEach(function(item) {
    product *= item;
});

console.log(product);
console.log('-------------------------');

//8---------------------------
//. Створіть prompt в якому потрібно проітерувати число з 0. 
   //Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
   //Якщо це числа 100 і більше, завершити ітерацію. 
   for (let i = 0; i <= 100; i++) {
    if ([5, 6, 7, 8, 9, 10].includes(i)) {
        continue;
    } else if (i >= 100) {
        break;
    }
    console.log(i);
}

console.log('-------------------------');
//* Використовуємо Math

//9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.

function roundDown(number) {
    return Math.floor(number);
}

console.log(roundDown(1.34)); 
console.log(roundDown(55.43)); 
console.log('-------------------------');

//10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.
function roundUp(number) {
    return Math.ceil(number);
}

console.log(roundUp(1.34)); 
console.log(roundUp(55.43)); 
console.log('-------------------------');

//11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.
function getRandomNumber() {
    return Math.floor(Math.random() * 1001);
}

console.log(getRandomNumber());
console.log('-------------------------'); 

//12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.

function power(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(power(2, 3)); 
console.log(power(5, 2)); 
console.log('-------------------------'); 

//13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.

function roundSquareRoot(number) {
    return Math.floor(Math.sqrt(number));
}

console.log(roundSquareRoot(1.34)); 
console.log(roundSquareRoot(55.43));
console.log('-------------------------'); 

//* Використовувати методи масивів

//14. Дано масив [1, 5, true], додати в кінець масиву 'Hello'
const arrayns = [1, 5, true];
arrayns.push('Hello');

console.log(arrayns);
console.log('-------------------------'); 

//15. Дано масив [1, 5, true], додати в початок масиву 'HelloArray'

const arraypp = [1, 5, true];
arraypp.unshift('HelloArray');

console.log(arraypp);
console.log('-------------------------'); 

//16. Дано масив [1, 5, true], видалити останній елемент з масиву

const arrayq = [1, 5, true];
arrayq.pop();

console.log(arrayq);

console.log('-------------------------'); 

//17. Дано масив [1, 5, true], видалити перший елемент з масиву
const arrayi = [1, 5, true];
arrayi.shift();

console.log(arrayi);
console.log('-------------------------'); 

//18. Дано масив [5, true, 'hello', false, null, 5] вирізати *в новий масив* з 1 по 5 індекс

const arrayw = [5, true, 'hello', false, null, 5];
const newArrayw = arrayw.slice(1, 6);

console.log(newArrayw);
console.log('-------------------------'); 

//19. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс дані

const arrayu = [5, true, 'hello', false, null, 5];
const newArrayu = array.slice(1, 6);

console.log(newArrayu);
console.log('-------------------------');

//20. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222

const arrayp = [5, true, 'hello', false, null, 5];
arrayp.splice(1, 5, 10, 100, 111, 222);

console.log(arrayp);