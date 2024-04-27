
//Створити форму в якій будуть оброблятись наступні дані:
//вік, посада, навички (чекбокс).

//Створити функцію яка буде обробляти цю форму і викликати функцію колбек doJob.

//doJob повинен обробляти поля які отримані: вік, посада, навички.
//- Якщо вік менше 18 або старше 65, тоді повертає в колбек помилку
//- Якщо вік менше 20 і навичок більше 3, тоді колбек повертає помилку
//- У всіх інших випадках колбек повертає інформаційне повідомлення про працівника

//. Відобразити результат роботи (повідомлення, помилки) всередині HTML, під формою.


 document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#myForm');
    const result2 = document.querySelector('#result');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const age = parseInt(form.elements.age.value);
      const position = form.elements.position.value;
      const skills = [
        form.elements.skill1.checked,
        form.elements.skill2.checked,
        form.elements.skill3.checked
      ];
  
      doJob(age, position, skills, function(err, data) {
        if (err) {
          result2.innerHTML = '<p>Помилка: ' + err + '</p>';
        } else {
          result2.innerHTML = '<p>' + data + '</p>';
        }
      });
    });
  
    function doJob(age, position, skills, callback) {
      if (age < 18 || age > 65) {
        callback('Вік повинен бути між 18 та 65');
        return;
      }
  
      if (age < 20 && skills.filter(Boolean).length > 3) {
        callback('Занадто багато навичок для віку');
        return;
      }
  
      const message = 'Інформація про працівника: Вік=' + age + ', Посада=' + position + ', Навички=' + skills.join(', ');
      callback(null, message);
    }
  });




