
//№1
let str1 = "Ваша строка здесь";
console.log(str1.split(' ').sort().join(' '));

//№2
let num1 = 45645646 ;
let divisors1 = [];
for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
        divisors1.push(i);
    }
}
console.log(divisors1);

//№3
let num2 = 3453 ;
let num3 = 456467 ;
let commonDivisors = [];
for (let i = 1; i <= Math.min(num2, num3); i++) {
    if (num2 % i === 0 && num3 % i === 0) {
        commonDivisors.push(i);
    }
}
console.log(commonDivisors);

//№4
let num4 = 66666 ;
let divisors2 = [];
for (let i = 2; i < num4; i++) {
    if (num4 % i === 0) {
        divisors2.push(i);
    }
}
console.log(divisors2.length === 1);

//№5
let str2 = "Ваша строка здесь";
console.log(Math.max(...str2.split(',').map(Number)));

//№6
arr11 = [999999999];
for (let i = 0; i < arr11.length; i++) {
    if (arr11[i] < 10) {
        arr11.splice(i, 0, arr11[i]);
        i++;
    }
}
console.log(arr11);

//№7
let str33 = "Ваша строка здесь";
console.log(str33.replace(/[aeiou]/gi, ''));

//№8
let str4 = "Ваша строка здесь";
console.log(str4.split(' ').map(word => word.slice(0, -1) + word.slice(-1).toUpperCase()).join(' '));

//№9
let data2 = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];

let sum7 = 0;
for (let obj of data2) {
    for (let key in obj) {
        sum7 += obj[key].reduce((a, b) => a + b, 0);
    }
}
console.log(sum7);