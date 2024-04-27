

//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//1. Створити кубік 50х50px червоного кольору із текстом Hello через js.

const cube = document.createElement('div');
cube.id = 'myDiv';
cube.classList.add('kub');
cube.style.width = '50px';
cube.style.height = '50px';
cube.style.backgroundColor = 'red';
cube.innerText = 'Hello';

cube.style.color = 'black';
cube.style.fontFamily = 'Arial';

document.body.appendChild(cube);

//2. Створити кубік 100х100px який буде кожного разу рандомного кольору,який буде містити текст який написав юзер в prompt.

const cube2 = document.createElement('div'); // створити елемент div
cube2.style.width = '100px'; // задати ширину
cube2.style.height = '100px'; // задати висоту
cube2.innerText = prompt('Введіть текст:'); // задати текст з prompt
document.body.appendChild(cube2); // додати елемент до сторінки

function getRandomColor() { // функція для генерації випадкового кольору
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(() => { // функція для зміни кольору кожні 3 секунди
  cube2.style.backgroundColor = getRandomColor(); // задати колір фону
}, 3000);

  //3. Створити круг який при відкритті буде кожні 2сек робити відступ з ліва на 15px (лише 10 разів).

  const circle = document.createElement('div'); // створити елемент div
circle.style.width = '100px'; // задати ширину
circle.style.height = '100px'; // задати висоту
circle.style.borderRadius = '50%'; // задати радіус границі для створення круга
circle.style.backgroundColor = getRandomColor(); // задати колір фону
document.body.appendChild(circle); // додати елемент до сторінки

let count = 0; // лічильник для обмеження кількості ітерацій

const intervalId = setInterval(() => { // функція для зміни відступу кожні 2 секунди
  if (count === 10) { // якщо лічильник досягнув 10, зупинити анімацію
    clearInterval(intervalId);
    return;
  }
  circle.style.marginLeft = `${count * 15}px`; // задати відступ з ліва
  count++; // збільшити лічильник на одиницю
}, 2000);

//4. Створити 3 HTML елемента, отримати їх в js, засетати класи та id які завчасно простилізовані в css.
   //Кожні 3сек видаляти/додавати класи та id в елементи.

   const div1 = document.createElement('div'); 
const div2 = document.createElement('div'); 
const div3 = document.createElement('div'); 

document.body.appendChild(div1); 
document.body.appendChild(div2); 
document.body.appendChild(div3); 

div1.className = 'my-class'; 
div1.id = 'my-id'; 

setInterval(() => { 
  div1.classList.toggle('my-other-class'); 
  div2.classList.toggle('my-other-class'); 
  div3.classList.toggle('my-other-class'); 
}, 3000);
   