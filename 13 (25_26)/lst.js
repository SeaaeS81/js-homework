
//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//https://code.mu/ru/javascript/tasker/stager

//Виконати завдання починаючи з підрозділу 1.2 і до самого розділу  1.8  (включно)



//  Уровень 1.2 задачника JavaScript

//№1 Дано число. Выведите в консоль первую цифру этого числа.

let numbe = 12345;
let firstDigi = numbe.toString()[0];
console.log(firstDigi);
console.log('Уровень 1.2 задачника JavaScript 2.1-------------------------');

//№2Дано число. Выведите в консоль последнюю цифру этого числа.

let numb = 12345;
let lastDigi = numb.toString()[numb.toString().length - 1];
console.log(lastDigi);
console.log('2.2-------------------------');

//№3Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let number = 12345;
let firstDig = number.toString()[0];
let lastDig = number.toString()[number.toString().length - 1];
console.log(parseInt(firstDig) + parseInt(lastDig));
console.log('2.3-------------------------');

//№4Дано число. Выведите количество цифр в этом числе

function countDigits(n) {
    return n.toString().length;// число в строку
  }
let num = 12345;
let digitCount = countDigits(num);
console.log(digitCount);
console.log('2.4-------------------------');

//№5Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let numberr1 = 12345;
let numberr2 = 223456;
if (numberr1.toString()[0] === numberr2.toString()[0]) {
  console.log("совпадают");
} else {
  console.log(" не совпадают");
}
console.log('2.5-------------------------');

//   Уровень 1.3 задачника JavaScript

//№1Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let str = "example string";
if (str.length > 1) {
  let secondLastChar = str.charAt(str.length - 2);
  console.log(secondLastChar);
}
console.log(' Уровень 1.3 задачника JavaScript 3.1-------------------------');

//№2Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let num1 = 10;
let num2 = 2;
if (num1 % num2 === 0) {
  console.log("Первое число делится на второе без остатка.");
} else {
  console.log("Первое число не делится на второе без остатка.");
}
console.log('3.2-------------------------');

//   Уровень 1.4 задачника JavaScript

//№1Выведите в консоль все целые числа от 1 до 100.
for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
  console.log('Уровень 1.4 задачника JavaScript 4.1-------------------------');

//№2Выведите в консоль все целые числа от -100 до 0.

for (let i = -100; i <= 0; i++) {
    console.log(i);
  }
  console.log('4.2-------------------------');

//№3Выведите в консоль все целые числа от 100 до 1.

for (let i = 100; i >= 1; i--) {
    console.log(i);
  }

  console.log('4.3-------------------------');

//№4Выведите в консоль все четные числа из промежутка от 1 до 100.

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }

  console.log('4.4-------------------------');

//№5Выведите в консоль все числа кратные трем в промежутке от 1 до 100

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
  console.log('4.5-------------------------');

  //Уровень 1.5 задачника JavaScript

  //№1Найдите сумму всех целых чисел от 1 до 100.

  function sumIntegers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumIntegers());
  console.log('Уровень 1.5 задачника JavaScript5.1-------------------------');

  //№2Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

  function sumEvenIntegers() {
    let sum = 0;
    for (let i = 2; i <= 100; i += 2) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumEvenIntegers());
  console.log('5.2-------------------------');

  //№3Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100

  function sumOddIntegers() {
    let sum = 0;
    for (let i = 1; i <= 100; i += 2) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumOddIntegers());
  console.log('5.3-------------------------');

  //№4Даны два целых числа. Найдите остаток от деления первого числа на второе.

  let a = 10;
let b = 3;
let remainder = a % b;
console.log(remainder);
console.log('5.4-------------------------');

//№5Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
      console.log(str[i]);
    }
  }
  
  reverseString("некоторая строка");

  console.log('5.5-------------------------');

  // Уровень 1.6 задачника JavaScript

  //№1Дан массив с числами. Найдите сумму квадратов элементов этого массива.

  function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] ** 2;
    }
    return sum;
  }
  
  console.log(sumOfSquares([1, 2, 3, 4, 5]));

  console.log('Уровень 1.6 задачника JavaScript 6.1-------------------------');

  //№2Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

  function sumOfSquareRoots(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Math.sqrt(arr[i]);
    }
    return sum;
  }
  
  console.log(sumOfSquareRoots([1, 2, 3, 4, 5]));

  console.log('6.2-------------------------');

  //№3Дан массив с числами. Найдите сумму положительных элементов этого массива.

  let arr = [1, -2, 3, -4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
  }
}
console.log(sum);

console.log('6.3-------------------------');

//№4Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

function sumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && arr[i] < 10) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  console.log(sumOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  console.log('6.4-------------------------');

  //Уровень 1.7 задачника JavaScript

  //№1Дана строка:'abcde'Получите массив букв этой строки.

  const strq = 'abcde';
  const arrq = strq.split('');
  console.log(arrq);

  console.log('Уровень 1.7 задачника JavaScript7.1-------------------------');

  //№2Дано некоторое число:12345Получите массив цифр этого числа.

  const nu = 12345;
  const st = nu.toString();
  const ar = st.split('').map(Number);
  console.log(ar);

  console.log('7.2-------------------------');

  //№3Дано некоторое число:12345 Переверните его:54321

  const nump = 12345;
  const reversedNum = parseInt(nump.toString().split('').reverse().join(''));
  console.log(reversedNum);

  console.log('7.3-------------------------');

  //№4Дано некоторое число:12345Найдите сумму цифр этого числа.

  const numu = 12345;
  const sumu = numu.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);
  console.log(sumu);

  console.log('7.4-------------------------');

  //Уровень 1.8 задачника JavaScript

  //№1Заполните массив целыми числами от 1 до 10.

  const arrl = Array.from({length: 10}, (_, i) => i + 1);
  console.log(arrl);

console.log(' Уровень 1.8 задачника JavaScript 8.1-------------------------');

//№2 Заполните массив четными числами из промежутка от 1 до 100.

const arrd = Array.from({length: 50}, (_, i) => (i + 1) * 2);
console.log(arrd); // [2, 4, 6, ..., 98, 100]

console.log('8.2-------------------------');

//№3Дан массив с дробями:[1.456, 2.125, 3.32, 4.1, 5.34]Округлите эти дроби до одного знака в дробной части.

const arru = [1.456, 2.125, 3.32, 4.1, 5.34];
const roundedArr = arru.map(num => num.toFixed(1));
console.log(roundedArr);
console.log('8.3-------------------------');





