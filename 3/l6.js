
//6. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

let rray = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let i = 0; i < rray.length; i++) {
    if (i % 2 === 1) {
        console.log(rray[i]);
    }
}