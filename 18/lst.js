
//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//1. Створити клас калькурятор на геттерах і сеттерах з діями *, /, +, -, вираховувати степінь, факторіал, корінь
   //Клас повинен містити поле date яке буде обновляти конкретну дату і час використання калькулятора.

   class Calculator {
    constructor() {
      this._date = new Date();
    }
  
    get date() {
      return this._date;
    }
  
    set date(newDate) {
      this._date = newDate;
    }
  
    addition(a, b) {
      return a + b;
    }
  
    subtraction(a, b) {
      return a - b;
    }
  
    multiplication(a, b) {
      return a * b;
    }
  
    division(a, b) {
      if (b === 0) {
        return "Error: Division by zero";
      }
      return a / b;
    }
  
    power(a, b) {
      return Math.pow(a, b);
    }
  
    factorial(a) {
      if (a < 0) {
        return "Error: Factorial of a negative number";
      }
      if (a === 0 || a === 1) {
        return 1;
      }
      let result = a;
      for (let i = a - 1; i >= 1; i--) {
        result *= i;
      }
      return result;
    }
  
    root(a, b) {
      if (a < 0 && b % 2 === 0) {
        return "Error: Even root of a negative number";
      }
      return Math.pow(a, 1 / b);
    }
  }
  const calculator = new Calculator();
  
  document.write(calculator.date);
  console.log('1-------------------------');
//2. Запишіть створений об'єкт створений в класі з дати і числа в localStorage, sessionStorage.

class DateAndNumber {

  constructor(date, number) {

    this.date = date;

    this.number = number;
  }
}

const myDateAndNumber = new DateAndNumber(new Date(), 42);

const myDateAndNumberString = JSON.stringify(myDateAndNumber);

localStorage.setItem('myDateAndNumber', myDateAndNumberString);

const myDateAndNumberString2 = localStorage.getItem('myDateAndNumber');

const myDateAndNumber2 = JSON.parse(myDateAndNumberString2);

console.log(myDateAndNumber2);

console.log('2-------------------------');

//3. Самостійно попрактикуйте використання JSON, localStorage, sessionStorage.

class DateAndNumber2 {
  constructor(date, number) {
    this.date = date;
    this.number = number;
  }
}

const dateAndNumber = new DateAndNumber2( Date(), 77);
const dateAndNumberString1 = JSON.stringify(dateAndNumber);
localStorage.setItem('DateAndNumber', dateAndNumberString1);

const dateAndNumberString2 = localStorage.getItem('DateAndNumber');
const dateAndNumber2 = JSON.parse(dateAndNumberString2);
console.log(dateAndNumber2);

console.log('3-------------------------');

