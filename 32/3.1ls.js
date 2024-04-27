
//Уровень 3.1 задачника JavaScript
// №1
function isIncreasing(num) {
    let digits = String(num).split('').map(Number);
    for(let i = 0; i < digits.length - 1; i++) {
        if(digits[i] > digits[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(isIncreasing(12345)); 

// №2
let arr = [1, '', 2, 3, '', 5];
arr = arr.filter(item => item !== '');
console.log(arr);
// №3
let arr3 = [
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
];
arr3 = arr3.map(subArr => subArr.sort((a, b) => a - b));
console.log(arr3);

//№4
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
if(arr1.length > arr2.length) {
    arr1.length = arr2.length;
} else {
    arr2.length = arr1.length;
}
console.log(arr1, arr2);