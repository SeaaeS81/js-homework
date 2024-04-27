
//Уровень 8.4 задачника JavaScript
//№1

//Дана кнопка и блок с текстом. Текст по высоте не влазит в блок и скрыт. По клику на кнопку распахните блок на всю высоту.
document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('button');
    let block = document.querySelector('.block');
    if(button && block) {
        button.addEventListener('click', function() {
            block.style.height = 'auto';
        });
    }
});
//№2

//Дана строка с текстом. Получите процентное содержание каждого символа текста в виде объекта, в котором ключами будут символы, а значениями - их процентное содержание.
function getCharPercentages(text) {
    let charCounts = {};
    for(let char of text) {
        if(charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }
    let charPercentages = {};
    let totalChars = text.length;
    for(let char in charCounts) {
        charPercentages[char] = (charCounts[char] / totalChars) * 100;
    }
    return charPercentages;
}
//№3

//Дан список ul и инпут. По мере ввода текста в инпут оставляйте видимыми только те li, текст которых начинается на текст, введенный в инпут.
document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('input');
    if(input) {
        input.addEventListener('input', function() {
            let filter = this.value;
            let lis = document.querySelectorAll('li');
            for(let li of lis) {
                if(li.textContent.startsWith(filter)) {
                    li.style.display = '';
                } else {
                    li.style.display = 'none';
                }
            }
        });
    }
});
//№4

//Выведите на экран следующую пирамидку:

//1
//22
//333
//4444
//55555
//666666
//7777777
//88888888
//999999999
for(let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

//№5

//Дан список городов и их стран, хранящийся в следующей структуре:

//let data = [
	//{
		//country: 'country1',
		//city:    'city11',
	//},
	//{
		//country: 'country2',
		//city:    'city21',
	//},
	//{
		//country: 'country3',
		//city:    'city31',
	//},
	//{
		//country: 'country1',
		//city:    'city12',
	//},
	//{
		//country: 'country1',
		//city:    'city13',
	//},
	//{
		//country: 'country2',
		//city:    'city22',
	//},
	//{
		//country: 'country3',
		//city:    'city31',
	//},
//]
//Напишите код, которой переделает структуру данных вот в такую:

//{
	//'country1': [
	//	'city11', 'city12', 'city13',
	//],
	//'country2': [
		//'city21', 'city22'
	//],
	//'country3': [
		//'city31', 'city32'
	//],
//}
let data = [
    {
        country: 'country1',
        city:    'city11',
    },
    {
        country: 'country2',
        city:    'city21',
    },
    {
        country: 'country3',
        city:    'city31',
    },
    {
        country: 'country1',
        city:    'city12',
    },
    {
        country: 'country1',
        city:    'city13',
    },
    {
        country: 'country2',
        city:    'city22',
    },
    {
        country: 'country3',
        city:    'city31',
    },
];

let resultData = {};
for(let item of data) {
    if(resultData[item.country]) {
        resultData[item.country].push(item.city);
    } else {
        resultData[item.country] = [item.city];
    }
}
console.log(resultData);