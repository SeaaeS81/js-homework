

//1. Створити функцію яка проітерує масив 

let arr = ['hello', 1, 7, true, 99];

function iterateArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  
  iterateArray(arr);
  console.log('1-------------------------');

//2. Створити функцію яка проітерує число від 0 до 10

function iter() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}
iter();
console.log('2-------------------------');

//3. Створити функцію на замиканнях яка буде містти число і вміти: додавати; віднімати; ділити ;множити.

function Calcul(initialNumber) {
    let num = initialNumber;
  
    function add(value) {
      num = num + value;
      return num;
    }
  
    function subtract(value) {
      num = num - value;
      return num;
    }
  
    function multiply(value) {
      num = num * value;
      return num;
    }
  
    function divide(value) {
      num = num / value;
      return num;
    }
  
    return {
      add,
      subtract,
      multiply,
      divide,
    };
  }
  
  let calculator = Calcul(10);
  console.log(calculator.add(5));     
  console.log(calculator.subtract(2)); 
  console.log(calculator.multiply(3)); 
  console.log(calculator.divide(6));  
console.log('4-------------------------');

//4. Створити кол бек функцію (по прикладу леції), яка працює як наступні методи масиву: filter; find; some ;every ;forEach.

function callbackExample(array, callback) {
    // Використовуємо метод filter
    const filteredArray = array.filter(callback);
    console.log('Метод filter:', filteredArray);
  
    // Використовуємо метод find
    const foundElement = array.find(callback);
    console.log('Метод find:', foundElement);
  
    // Використовуємо метод some
    const someResult = array.some(callback);
    console.log('Метод some:', someResult);
  
    // Використовуємо метод every
    const everyResult = array.every(callback);
    console.log('Метод every:', everyResult);
  
    // Використовуємо метод forEach
    array.forEach(callback);
  }
  
  
  const numbers = [1, 2, 3, 4, 5];
  
  function isEven(number) {
    return number % 2 === 0;
  }
  
  callbackExample(numbers, isEven);

