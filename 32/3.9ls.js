

//№1
let str12 = "Your string here";
console.log(/^\d+$/.test(str12));

//№2
let str28 = "Your string here";
console.log(/^[02468]+$/.test(str28));

//№3
let numbersdd = [77777];
console.log(numbersdd.filter(num => num.toString().split('0').length <= 2));

//№4
let numsf = [];
for (let i = 1; i <= 1000; i++) {
    if (i.toString().split('').reduce((a, b) => a + parseInt(b), 0) === 13) {
        numsf.push(i);
    }
}
console.log(numsf);

//№5
let arrsa = [];
let count = 1;
for (let i = 0; i < 3; i++) {
    arrsa[i] = [];
    for (let j = 0; j < 3; j++) {
        arrs[i][j] = count++;
    }
}
console.log(arrsa);
