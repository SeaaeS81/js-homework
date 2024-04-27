
let numbersss = [777];
let filteredNumbers = numbersss.filter(num => num.toString().length <= 3);
console.log(filteredNumbers);

let nums = 12345;
let isGreaterThanZero = nums.toString().split('').every(digit => digit > 0);
console.log(isGreaterThanZero);

let arrs = [123, 456, 789];
let newArr = [].concat(...arrs.map(num => num.toString().split('').map(Number)));
console.log(newArr);

let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];

let sums = 0;
for (let obj of data) {
    for (let key in obj) {
        sums += obj[key];
    }
}
console.log(sums);