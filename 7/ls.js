
//*Розділяйте кожний пункт домашнього в коді коментарями.

//*використовуйте аргументи і return

//1. Створіть функцію яка при вводі числа повертає квадрат цього числа (квадрат із 4 = 4 * 4)


function squareNumber(number) {
    return number * number;
  }
  
  console.log(squareNumber(4)); 

  console.log('-------------------------');

//2. Створіть функцію яка при вводі двох чисел повертає степінь другого числа
  // (якщо n1 = 2, n2 = 4, то повернути результат 2 в степені 4)

  function powerNumber(n1, n2) {
    return Math.pow(n1, n2);
  }
  console.log(powerNumber(2, 4)); 

  
  console.log('-------------------------');

//3. Створіть функцію калькулятор із діями +, -, *, /
let n1 = +prompt('nume1');
let operator = prompt(' (+, -, *, /)');
let n2 = +prompt('nume2');

function calculator(n1, operator, n2) {
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;
    default:
      return 'error';
  }
}

let result = calculator(n1, operator, n2);
console.log(result);

  console.log('-------------------------');


//4. Створіть функцію яка заокруглює дробові числа

function roundNumber(number) {
    return Math.round(number);
  }
  
  let userInput = +prompt('nume');
  console.log(roundNumber(userInput));

  console.log('-------------------------');

//5. Створіть функцію яка аргументом приймає масив і як результат повертає масив із продубльованими значеннями
  //(тими що повторюються в масиві)

  function duplicateValues(array) {
    return array.flatMap(item => [item, item]);
  }

  console.log(duplicateValues([1, 2, 3, 4, 5, 6 ,7])); 