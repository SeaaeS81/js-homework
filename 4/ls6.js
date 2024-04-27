
let arr = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
console.log('-------------------------');
sum = 0;
for (let elem of arr) {
  sum += elem;
}

console.log(sum);
console.log('-------------------------');
sum = 0;
for (let index in arr) {
  sum += arr[index];
}

console.log(sum);
console.log('-------------------------');
sum = 0;
let j = 0;
while (j < arr.length) {
  sum += arr[j];
  j++;
}

console.log(sum);
console.log('-------------------------');
sum = 0;
let k = 0;
do {
  sum += arr[k];
  k++;
} while (k < arr.length);

console.log(sum);