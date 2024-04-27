
let arr = [];

for (let i = 17; i <= 39; i++) {
  arr.push(i);
}
console.log('-------------------------');
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}
console.log('-------------------------');
for (let num of arr) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}
console.log('-------------------------');
for (let index in arr) {
  if (arr[index] % 2 !== 0) {
    console.log(arr[index]);
  }
}
console.log('-------------------------');
let j = 17;
while (j <= 39) {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
}
console.log('-------------------------');
let k = 17;
do {
  if (k % 2 !== 0) {
    console.log(k);
  }
  k++;
} while (k <= 39);