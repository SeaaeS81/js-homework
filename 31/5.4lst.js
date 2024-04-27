
//Уровень 5.4 задачника JavaScript
//№1

//Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'.
let paragraphs = document.getElementsByTagName('p');
for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener('click', function() {
        this.innerHTML = '!';
    });
}

//№2

//Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.
document.addEventListener('DOMContentLoaded', function() {
    let myButton1 = document.getElementById('myButton');
    if(myButton1) {
        myButton1.addEventListener('click', function() {
            let links = document.getElementsByTagName('a');
            let hrefs = [];
            for(let i = 0; i < links.length; i++) {
                hrefs.push(links[i].getAttribute('href'));
            }
            console.log(hrefs);
        });
    }
});


//№3

//Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац.
document.addEventListener('DOMContentLoaded', function() {
    let myButton2 = document.getElementById('myButton');
    if(myButton2) {
        myButton2.addEventListener('click', function() {
            let str = '';
            for(let i = 1; i <= 9; i++) {
                str += i;
            }
            let myParagraph = document.getElementById('myParagraph');
            if(myParagraph) {
                myParagraph.innerHTML = str;
            }
        });
    }
});
//№4

//Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день.
document.addEventListener('DOMContentLoaded', function() {
    let date = new Date();
    let year = document.getElementById('year');
    let month = document.getElementById('month');
    let day = document.getElementById('day');
    if(year) {
        year.innerHTML = date.getFullYear();
    }
    if(month) {
        month.innerHTML = date.getMonth() + 1;
    }
    if(day) {
        day.innerHTML = date.getDate();
    }
});
//№5


//Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.
document.addEventListener('DOMContentLoaded', function() {
    let myButton3 = document.getElementById('myButton');
    if(myButton3) {
        myButton3.addEventListener('click', function() {
            let href = document.getElementById('myLink').getAttribute('href');
            document.getElementById('myParagraph').innerHTML = href;
        });
    }
});