
//№1
let numb = [888888888];
console.log(numb.every(num => num.toString().includes('3')));

//№2
let kebabCase = "Your string here";
console.log(kebabCase.replace(/-/g, '_'));

//№3
let snakeCase1 = "Your string here";
console.log(snakeCase1.replace(/(_\w)/g, match => match[1].toUpperCase()));

//№4
let camelCase = "Your string here";
console.log(camelCase.replace(/([A-Z])/g, "_$1").toLowerCase());

//№5
let arrr = [];
for (let i = 0; i < 5; i++) {
    arrr[i] = [1, 2, 3];
}
console.log(arrr);