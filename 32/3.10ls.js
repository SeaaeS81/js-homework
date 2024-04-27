
//№1
let arr1s = [5555];
console.log(arr1s.reduce((acc, num) => acc.concat([num, num]), []));

//№2
let arr2s = [777777];
let num1s = 46456;
console.log(arr2s.filter(n => num1s % n === 0));

//№3
let num2s = 46456;
let num3s = 456456;
console.log([...new Set(num2s.toString().split(''))].filter(digit => num3.toString().includes(digit)));

//№4
let num4s = 546464;
let positions = [];
let strw = num4s.toString();
for (let i = 1; i < strw.length - 1; i++) {
    if (strw[i] === '3') {
        positions.push(i);
    }
}
console.log(positions);

//№5
let arr3g = [45353];
console.log(arr3g.filter(num => new Set(num.toString().split('')).size === num.toString().length));

//№6
let arrq = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(arrq.reduce((acc, val) => acc.concat(val), []));