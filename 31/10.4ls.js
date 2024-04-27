//Уровень 10.4 задачника JavaScript
//№1

//Дан текст со словами. Перемешайте все слова этого текста в случайном порядке.
let text = 'This is a sample text with several words';
let words = text.split(' ');
for(let i = words.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
}
let shuffledText = words.join(' ');
console.log(shuffledText);
//№2

//Выведите на страницу обратный отсчет дней, часов, минут и секунд, оставшихся до Нового Года.
document.addEventListener('DOMContentLoaded', function() {
    let countdownElement = document.querySelector('#countdown');
    if(countdownElement) {
        let intervalId = setInterval(function() {
            let now = new Date();
            let nextYear = new Date(now.getFullYear() + 1, 0, 1);
            let diff = nextYear - now;
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);
            countdownElement.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
            if(diff < 0) {
                clearInterval(intervalId);
                countdownElement.textContent = 'Happy New Year!';
            }
        }, 1000);
    } else {
        console.log('Элемент с идентификатором "countdown" не найден');
    }
});
//№3

//Даны два числа. Выведите на экран процесс нахождения НОК, как в школе.
function lcm(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    for(let i = max; ; i += max) {
        console.log(`Trying ${i}...`);
        if(i % min === 0) {
            console.log(`LCM of ${a} and ${b} is ${i}`);
            return i;
        }
    }
}
lcm(4, 6);
//№4

//Даны два числа. Выведите на экран процесс нахождения НОД, как в школе.
function gcd(a, b) {
    while(b !== 0) {
        console.log(`Calculating GCD of ${a} and ${b}...`);
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log(`GCD is ${a}`);
    return a;
}
gcd(48, 18);
