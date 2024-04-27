
//Уровень 6.4 задачника JavaScript
//№1

//Дан список ul. Сделайте так, чтобы по клику на любую li она удалялась из списка.
document.addEventListener('DOMContentLoaded', function() {
  let ul = document.querySelector('ul'); 
  if(ul) {
      ul.addEventListener('click', function(event) { 
          let target = event.target; 
          if (target.tagName == 'LI') { 
              ul.removeChild(target); 
          }
      });
  }
});
//№2

//Дан список ul и инпут. Сделайте так, чтобы по потери фокуса инпутом его текст становился новым пунктом списка.
document.addEventListener('DOMContentLoaded', function() {
  let input = document.querySelector('input'); 
  let ul = document.querySelector('ul'); 
  if(input && ul) {
      input.addEventListener('blur', function() { 
          let text = input.value; 
          if (text) { 
              let li = document.createElement('li'); 
              li.textContent = text; 
              ul.appendChild(li); 
              input.value = ''; 
          }
      });
  }
});
//№3

////Дана таблица из трех колонок, три инпута и кнопка. Сделайте так, чтобы по клику на кнопку в таблицу добавлялся новый ряд с текстами ячеек из инпутов.
document.addEventListener('DOMContentLoaded', function() {
  let inputs = document.querySelectorAll('input'); 
  let button = document.querySelector('button'); 
  let table = document.querySelector('table'); 
  if(button && table) {
      button.addEventListener('click', function() { 
          let row = table.insertRow(-1); 
          for (let i = 0; i < inputs.length; i++) { 
              let text = inputs[i].value; 
              if (text) { 
                  let cell = row.insertCell(i); 
                  cell.textContent = text; 
                  inputs[i].value = ''; 
              }
          }
      });
  }
});
//№4

//Дан инпут и ul. В инпут вводится год. Выведите в список даты всех пятниц 13-е в заданном году.
document.addEventListener('DOMContentLoaded', function() {
  let input = document.querySelector('input'); 
  let ul = document.querySelector('ul'); 
  if(input && ul) {
      input.addEventListener('blur', function() { 
          let year = Number(input.value); 
          if (year) { 
              ul.innerHTML = ''; 
              for (let month = 0; month < 12; month++) { 
                  let date = new Date(year, month, 13); 
                  if (date.getDay() == 5) { 
                      let li = document.createElement('li'); 
                      li.textContent = date.toLocaleDateString(); 
                      ul.appendChild(li); 
                  }
              }
          }
      });
  }
});