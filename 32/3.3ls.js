
//Уровень 3.3 задачника JavaScript
//№1

//Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
let words = ['apple', 'cat', 'banana', 'dog', 'elephant'];
words = words.filter(word => word.length <= 3);
console.log(words);
//№2

///Дано некоторое число:

//1357
//Проверьте, что все цифры этого числа являются нечетными.
let num9 = 1357;
let isOdd = String(num9).split('').every(digit => digit % 2 !== 0);
console.log(isOdd);
//№3

//Дано некоторое слово:

//'abcba'
//Проверьте, что это слово читается одинаково с любой стороны.
let word = 'abcba';
let isPalindrome = word === word.split('').reverse().join('');
console.log(isPalindrome); 
//№4

//Дан массив:

//[
	//[
		//[11, 12, 13],
		//[14, 15, 16],
		//[17, 17, 19],
	//],
	//[
		//[21, 22, 23],
		//[24, 25, 26],
		//[27, 27, 29],
	//],
	//[
		//[31, 32, 33],
		//[34, 35, 36],
		//[37, 37, 39],
	//],
//]
//Найдите сумму элементов этого массива.
let arrk = [
    [
        [11, 12, 13],
        [14, 15, 16],
        [17, 17, 19],
    ],
    [
        [21, 22, 23],
        [24, 25, 26],
        [27, 27, 29],
    ],
    [
        [31, 32, 33],
        [34, 35, 36],
        [37, 37, 39],
    ],
];
let sum8 = arrk.flat(2).reduce((a, b) => a + b, 0);
console.log(sum8);