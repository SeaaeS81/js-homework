
function calculateFactorial(n) {   
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log(result);
}
calculateFactorial(5)

console.log('-------------------------');

function countSymb(sym) {
    let count = 0;
    for (let i = 0; i < sym.length; i++) {
        if (sym[i] !== ' ') {
            count++;
        }
    }
    console.log(count);
}
countSymb('Hello, world!');

console.log('-------------------------');

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(3)); 
console.log(isPrime(56)); 
console.log(isPrime(23));
console.log(isPrime(1.33)); 
console.log(isPrime(4.1)); 
console.log(isPrime(52.222));

console.log('-------------------------');

function passwordPrompt() {
    let password = prompt('Enter your password:');
    let confirmPassword = prompt('Confirm your password:');
    if (password === confirmPassword) {
        console.log('Success');
    } else {
        console.log('Failure');
    }
}
passwordPrompt(7);

console.log('-------------------------');

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function factorialRange(num1, num2, num3) {
    let result = {};
    for (let i = num1; i <= num2; i++) {
        result['num' + i] = factorial(i);
    }
    result['num' + num3] = factorial(num3);
    return result;
}

let nume1 = prompt('5');
let nume2 = prompt('10');
let nume3 = prompt('15');

console.log(factorialRange(Number(nume1), Number(nume2), Number(nume3)));

console.log('-------------------------');

let num11 = +prompt('5');
let num12 = +prompt('20');
let ac = prompt('+, -, *, /');

if (ac === '+') {
    console.log(num11 + num12);
 } else if (ac === '-') {
     console.log(num11 - num12);
 } else if (ac === '/') {
     console.log(num11 / num12);
 } else if (ac === '*') {
     console.log(num11 * num12);
 } else {
     console.log('Invalid operator');
 }

