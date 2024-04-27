
//5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

let sport = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for(let i = 0; i < sport.length; i++) {
    if (i % 2 === 0) {
        console.log(sport[i]);
    }
}