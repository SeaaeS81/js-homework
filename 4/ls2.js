
let arr = ["яблуко", "синій", "Іван", Math.floor(Math.random() * 100), 25];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log('-------------------------');
for (let fruit of arr) {
  console.log(fruit);
}
console.log('-------------------------');
for (let index in arr) {
  console.log(arr[index]);
}
console.log('-------------------------');
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}
console.log('-------------------------');
let k = 0;
do {
  console.log(arr[k]);
  k++;
} while (k < arr.length);

console.log(typeof arr);