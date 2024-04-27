//Уровень 9.4 задачника JavaScript
//№1

//Дана таблица. По нажатию на кнопку добавьте в эту таблицу новый ряд.
document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('button');
    let table = document.querySelector('table');
    if(button && table) {
        button.addEventListener('click', function() {
            let row = table.insertRow(-1);
            for(let i = 0; i < table.rows[0].cells.length; i++) {
                row.insertCell(i);
            }
        });
    }
});
//№2

//Дана таблица. По нажатию на кнопку добавьте в эту таблицу новую колонку.
document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('button');
    if(button) {
        button.addEventListener('click', function() {
            let table = document.querySelector('table');
            if(table) {
                for(let i = 0; i < table.rows.length; i++) {
                    table.rows[i].insertCell(-1);
                }
            } else {
                console.log('Таблица не найдена');
            }
        });
    } else {
        console.log('Кнопка не найдена');
    }
});
//№3

//Дана таблица. По нажатию на кнопку добавьте в эту таблицу и новый ряд, и новую колонку.
document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('button');
    if(button) {
        button.addEventListener('click', function() {
            let table = document.querySelector('table');
            if(table) {
                let row = table.insertRow(-1);
                for(let i = 0; i <= table.rows[0].cells.length; i++) {
                    row.insertCell(i);
                }
                for(let i = 0; i < table.rows.length - 1; i++) {
                    table.rows[i].insertCell(-1);
                }
            } else {
                console.log('Таблица не найдена');
            }
        });
    } else {
        console.log('Кнопка не найдена');
    }
});
//№4

//Дана таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования этой ячейки.
document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('button');
    if(button) {
        button.addEventListener('click', function() {
            let cells = document.querySelectorAll('td:not(.red)');
            if(cells.length > 0) {
                cells[0].classList.add('red');
            }
        });
    } else {
        console.log('Кнопка не найдена');
    }
});
//№5

//Дана таблица и кнопка. По нажатию на кнопку покрасьте в красный цвет случайную ячейку таблицы. Повторное нажатие на кнопку должно закрашивать новую незакрашенную ячейку, пока ячейки не закончатся.
document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('button');
    if(button) {
        button.addEventListener('click', function() {
            let cells = document.querySelectorAll('td:not(.red)');
            if(cells.length > 0) {
                let randomIndex = Math.floor(Math.random() * cells.length);
                if(!cells[randomIndex].classList.contains('red')) {
                    cells[randomIndex].classList.add('red');
                }
            }
        });
    } else {
        console.log('Кнопка не найдена');
    }
});

