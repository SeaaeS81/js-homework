//1
let text = "Ваш текст здесь";
let words1 = text.split(' ');
let aWords1 = words1.filter(word => word[0] === 'a');
console.log(aWords1);

//2
let numbers1 = [];
let divisibleByFive = numbers1.filter(num => num % 5 === 0);
console.log(divisibleByFive);

//3
let numbers2 = [777];
let containsZero = numbers2.filter(num => num.toString().includes('0'));
console.log(containsZero);

//4
let numbers = [888];
let containsThree = numbers.some(num => num.toString().includes('3'));
console.log(containsThree);

//5
let num8 = 35142;
let sortedNum = parseInt(num.toString().split('').sort().join(''));
console.log(sortedNum);

//6
let str7 = '';
for (let i = 1; i <= 5; i++) {
    str7 += '-' + i;
}
str7 += '-';
console.log(str7);

//7
let obj66 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}

let sum6 = 0;
for (let key1 in obj66) {
    for (let key2 in obj66[key1]) {
        for (let key3 in obj66[key1][key2]) {
            sum6 += obj66[key1][key2][key3];
        }
    }
}
console.log(sum6);