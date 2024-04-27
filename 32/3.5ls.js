
for (let i = 10; i <= 1000; i++) {
    if (parseInt(i.toString()[0]) % 2 === 0) {
        console.log(i);
    }
}


let arr44 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i += 2) {
    let temp = arr[i];
    arr44[i] = arr[i + 1];
    arr44[i + 1] = temp;
}
console.log(arr44);

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let sum99 = 0;
for (let key1 in obj) {
    for (let key2 in obj[key1]) {
        sum99 += obj[key1][key2];
    }
}
console.log(sum99);