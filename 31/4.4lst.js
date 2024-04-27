//Уровень 4.4 задачника JavaScript
//№1

//Сделайте функцию, которая параметром будет принимать число, а количество его делителей.
function countDivisors(n) {
    let count = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            count++;
        }
    }
    return count;
}

//№2

//Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
function getZodiacSign(day, month) {
    let signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
    let last_day = [19, 18, 20, 20, 20, 20, 22, 22, 22, 22, 21, 21];
    return (day > last_day[month-1]) ? signs[month] : signs[month-1];
}

//№3


//Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.

function getDivisors(n) {
    let divisors = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

///№4

//Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function isPrime(n) {
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

//№5

//Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
function removeEvenDigits(n) {
    return parseInt(n.toString().split('').filter(digit => digit % 2 !== 0).join(''));
}

///№6

//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
function getRandomNumbers(n, min, max) {
    let numbers = [];
    for(let i = 0; i < n; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}