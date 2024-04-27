
//Уровень 3.2 задачника JavaScript
// №1
for(let i = 10; i <= 1000; i++) {
    let digits = String(i).split('').map(Number);
    if(digits[digits.length - 2] % 2 === 0) {
        console.log(i);
    }
}

// №2
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr = ar.filter((_, index) => (index + 1) % 5 !== 0);
console.log(ar);

// №3
let num = 5;
let str = '0'.repeat(num);
console.log(str);

// №4
let str3 = 'aaa bbb ccc eee fff';
str3 = str3.split(' ').filter((_, index) => index % 2 === 0).join(' ');
console.log(str3);

// №5
let arr11 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let sum = arr11.flat().reduce((a, b) => a + b, 0);
console.log(sum);