
let arr = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' && arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
console.log('-------------------------');
for (let elem of arr) {
  if (typeof elem === 'number' && elem % 2 === 0) {
    console.log(elem);
  }
}
console.log('-------------------------');
for (let index in arr) {
  if (typeof arr[index] === 'number' && arr[index] % 2 === 0) {
    console.log(arr[index]);
  }
}
console.log('-------------------------');
let j = 0;
while (j < arr.length) {
  if (typeof arr[j] === 'number' && arr[j] % 2 === 0) {
    console.log(arr[j]);
  }
  j++;
}
console.log('-------------------------');
let k = 0;
do {
  if (typeof arr[k] === 'number' && arr[k] % 2 === 0) {
    console.log(arr[k]);
  }
  k++;
} while (k < arr.length);