
//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//1. Створити функцію калькулятор із 4 діями *, +, -, \. Написати до функції юніт тести

// Функція калькулятора
function calculator(a, b, operation) {
    switch(operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if(b != 0) {
                return a / b;
            } else {
                return 'Помилка: Ділення на нуль не допускається';
            }
        default:
            return 'Помилка: Операція не підтримується';
    }
}

console.assert(calculator(1, 2, '+') === 3, 'Test 1 Failed');
console.assert(calculator(3, 2, '-') === 1, 'Test 2 Failed');
console.assert(calculator(2, 3, '*') === 6, 'Test 3 Failed');
console.assert(calculator(6, 3, '/') === 2, 'Test 4 Failed');
console.assert(calculator(1, 0, '/') === 'Помилка: Ділення на нуль не допускається', 'Test 5 Failed');
console.assert(calculator(1, 2, '^') === 'Помилка: Операція не підтримується', 'Test 6 Failed');



//2. Створити масив, написати юніт тести до методів масиву: filter, find, some, every//
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.assert(JSON.stringify(array.filter(num => num > 5)) === JSON.stringify([6, 7, 8, 9, 10]), 'Test 1 Failed');

console.assert(array.find(num => num > 5) === 6, 'Test 2 Failed');

console.assert(array.some(num => num > 5) === true, 'Test 3 Failed');

console.assert(array.every(num => num > 5) === false, 'Test 4 Failed');


