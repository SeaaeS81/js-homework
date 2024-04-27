
// 1. Створити 2 кубіка, при кліку на перший: другий повинен змінювати свій колір на рандомний.
const cube1 = document.createElement('div'); 
const cube2 = document.createElement('div'); 

cube1.style.width = '50px'; 
cube1.style.height = '50px'; 
cube1.style.backgroundColor = 'red'; 

cube2.style.width = '50px'; 
cube2.style.height = '50px'; 
cube2.style.backgroundColor = 'blue'; 

cube1.addEventListener('click', () => { 
  cube2.style.backgroundColor = getRandomColor(); 
});

document.body.appendChild(cube1); 
document.body.appendChild(cube2); 

function getRandomColor() { 
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 2. Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно "Текст неможливо скопіювати!!".
const textBlock = document.createElement('div'); 
textBlock.innerText = 'Спробуйте скопіювати цей текст.'; 

textBlock.addEventListener('copy', (event) => { 
  event.preventDefault(); 
  alert('Текст неможливо скопіювати!!'); 
});

document.body.appendChild(textBlock); // додати елемент до сторінки

// 3. Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь 
//    (r - X координата, g - Y координата, b - середнє арифметичне X+Y/2).
const cube3 = document.createElement('div'); 
cube3.style.width = '100px'; 
cube3.style.height = '100px'; 

document.addEventListener('mousemove', (event) => { 
  const x = event.clientX; 
  const y = event.clientY; 

  const r = x; 
  const g = y; 
  const b = (x + y) / 2; 

  cube3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
});

document.body.appendChild(cube3); // дод

//4. Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль (аналогічно лекції).

const cube11 = document.createElement('div'); 
const cube22 = document.createElement('div'); 
const cube33 = document.createElement('div'); 

cube11.style.width = '50px'; 
cube11.style.height = '50px'; 
cube11.style.backgroundColor = 'red'; 

cube22.style.width = '50px'; 
cube22.style.height = '50px'; 
cube22.style.backgroundColor = 'green'; 

cube33.style.width = '50px'; 
cube33.style.height = '50px'; 
cube33.style.backgroundColor = 'blue'; 

cube11.addEventListener('click', () => { 
  console.log('Це перший кубик!'); 
});

cube22.addEventListener('click', () => { 
  console.log('Це другий кубик!'); 
});

cube33.addEventListener('click', () => { 
  console.log('Це третій кубик!'); 
});

document.body.appendChild(cube11); 
document.body.appendChild(cube22); 
document.body.appendChild(cube33); 

//5. Створіть ще 3 кубіка які є один в одному, змініть напрямок виконання івенту, 
  // зупиніть виконання івентів на другому івенті (Див. лекцію).

const cube111 = document.createElement('div'); 
const cube222 = document.createElement('div'); 
const cube333 = document.createElement('div'); 

cube111.style.width = '50px'; 
cube111.style.height = '50px'; 
cube111.style.backgroundColor = 'red'; 

cube222.style.width = '50px'; 
cube222.style.height = '50px'; 
cube222.style.backgroundColor = 'green'; 

cube333.style.width = '50px'; 
cube333.style.height = '50px'; 
cube333.style.backgroundColor = 'blue'; 

cube111.addEventListener('click', () => { 
  console.log('Це перший кубик!'); 
});

cube222.addEventListener('click', (event) => { 
  console.log('Це другий кубик!'); 
  event.stopPropagation(); 
});

cube333.addEventListener('click', () => { 
  console.log('Це третій кубик!'); 
});

cube111.appendChild(cube222); 
cube222.appendChild(cube333); 

document.body.appendChild(cube111);

//6. Використайте будь яку форму з домашної про форми (в модулі HTML\CSS), та отримайте дані з неї у вигляді об'єкту,
  // виведіть об'єкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). 
  const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
  });
} else {
  console.error('Елемент form не знайдено!');
}