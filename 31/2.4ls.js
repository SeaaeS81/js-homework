
//Уровень 2.4 задачника JavaScript
//№1

let str1 = 'abc123';
let pos = str1.search(/\d/);
console.log(pos);

///Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

//№2
let obj = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj);
let values = Object.values(obj);
console.log(keys);
console.log(values);

//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

//№3
let num = 123456;
let count = num.toString().split('').filter(n => n % 2 === 0).length;
console.log(count);

//Дано число. Выведите в консоль количество четных цифр в этом числе.

//№4
let str2 = 'abcde';
let result2 = str2.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char).join('');
console.log(result2);

//Дана некоторая строка:

//'abcde'
//Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:

//'AbCdE'
//№5
let str = 'aaa bbb ccc';
let result = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
console.log(result);

//Дана некоторая строка со словами:

//'aaa bbb ccc'
//Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

//'Aaa Bbb Ccc'