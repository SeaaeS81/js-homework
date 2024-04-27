
// for loop
for (let i = 20; i <= 32; i += 2) {
    console.log(i);
}
console.log('-------------------------');
// for of loop
let evenNumbers = [20, 22, 24, 26, 28, 30, 32];
for (let evenNumber of evenNumbers) {
    console.log(evenNumber);
}
console.log('-------------------------');
// for in loop
let evenNumber = [20, 22, 24, 26, 28, 30, 32];
for (let index in evenNumber) {
    console.log(evenNumber[index]);
}
console.log('-------------------------');
// while loop
let i = 20;
while (i <= 32) {
    console.log(i);
    i += 2;
}
console.log('-------------------------');
// do while loop
let j = 20;
do {
    console.log(j);
    j += 2;
} while (j <= 32);