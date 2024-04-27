
let arr = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let product = 1;

for (let i = 0; i < arr.length; i++) {
  product *= arr[i];
}

console.log(product);
console.log('-------------------------');
product = 1;
for (let elem of arr) {
  product *= elem;
}

console.log(product);
console.log('-------------------------');
product = 1;
for (let index in arr) {
  product *= arr[index];
}

console.log(product);
console.log('-------------------------');
product = 1;
let j = 0;
while (j < arr.length) {
  product *= arr[j];
  j++;
}

console.log(product);
console.log('-------------------------');
product = 1;
let k = 0;
do {
  product *= arr[k];
  k++;
} while (k < arr.length);

console.log(product);