
//Уровень 7.4 задачника JavaScript
//№1

//Дан ul. Выведите в него дни текущего месяца. Текущий день, а также выходные, выделите другими цветами.
document.addEventListener('DOMContentLoaded', function() {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let ul = document.querySelector('ul');
    if(ul) {
        for(let i = 1; i <= daysInMonth; i++) {
            let li = document.createElement('li');
            li.textContent = i;
            if(i === date.getDate()) {
                li.style.color = 'red';
            } else if(new Date(year, month, i).getDay() % 6 === 0) {
                li.style.color = 'blue';
            }
            ul.appendChild(li);
        }
    }
});
//№2

//Дан абзац, содержащий текст со словами. Сделайте так, чтобы по клику на любое слово из этого абзаца, это слово выделялось красным цветом.
document.addEventListener('DOMContentLoaded', function() {
    let p = document.querySelector('p');
    if(p) {
        p.addEventListener('click', function(event) {
            let selection = window.getSelection();
            if(selection.rangeCount > 0) {
                let range = selection.getRangeAt(0);
                let span = document.createElement('span');
                span.style.color = 'red';
                span.appendChild(range.extractContents());
                range.insertNode(span);
            }
        });
    }
});
//№3

//Дан инпут и кнопка. В него вводится число из четного количества цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма половины цифр равна сумме второй половине цифр.
document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('button');
    let input = document.querySelector('input');
    if(button && input) {
        button.addEventListener('click', function() {
            let number = input.value;
            let digits = number.split('').map(Number);
            let half = digits.length / 2;
            let sum1 = digits.slice(0, half).reduce((a, b) => a + b, 0);
            let sum2 = digits.slice(half).reduce((a, b) => a + b, 0);
            console.log(sum1 === sum2);
        });
    }
});
//№4

//Дан инпут. В него вводится текст. Сделайте так, чтобы в инпут нельзя было ввести больше десяти символов. При превышении количества, символы просто не должны вводиться.
document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('input');
    if(input) {
        input.addEventListener('input', function() {
            if(this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });
    }
});
//№5

//Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку сделайте так, чтобы в абзаце начал тикать обратный отсчет от введенного в инпут числа до нуля.
document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('button');
    let input = document.querySelector('input');
    let p = document.querySelector('p');
    if(button && input && p) {
        button.addEventListener('click', function() {
            let count = Number(input.value);
            let intervalId = setInterval(function() {
                p.textContent = count--;
                if(count < 0) {
                    clearInterval(intervalId);
                }
            }, 1000);
        });
    }
});
//№6

//Напишите программу, которая сформирует следующий массив:

//[//
	//[1],
	//[1, 2],
	//[1, 2, 3],
	//[1, 2, 3, 4, 5],
	//[1, 2, 3, 4, 5, 6],
//]
let resultArray = [];
for(let i = 1; i <= 6; i++) {
    let array = [];
    for(let j = 1; j <= i; j++) {
        array.push(j);
    }
    resultArray.push(array);
}
console.log(resultArray);