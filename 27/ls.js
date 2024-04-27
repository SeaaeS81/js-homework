//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//1. Зробити сторінку із довільним контентом і переходами на 3 сторінки:
   //users
  // posts
   //comments

  

//2. На сторінці users вивести в html список юзерів через fetch та XMLHttpRequest. 
   //Стилізувати відповідним чином. 
  // https://jsonplaceholder.typicode.com/users
  

  
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
         const usersList = document.getElementById('users-list');
          users.forEach(user => {
              const li = document.createElement('li');
              li.textContent = user.name;
              usersList.appendChild(li);
          });
      })
      .catch(error => console.error('Помилка отримання даних для користувачів:', error));

//3. На сторінці posts вивести в html список постів через fetch та XMLHttpRequest. 
  // Стилізувати відповідним чином. 
   //https://jsonplaceholder.typicode.com/posts

   fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                const postsList = document.getElementById('posts-list');
                posts.forEach(post => {
                    const listItem = document.createElement('li');
                    listItem.textContent = post.title;
                    postsList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Помилка отримання даних:', error));

 

//4. На сторінці comments вивести в html список коментарів через fetch та XMLHttpRequest. 
   //Стилізувати відповідним чином. 
   //https://jsonplaceholder.typicode.com/comments

   async function fetchComments() {
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/comments');
          const comments = await response.json();

          const commentsList = document.getElementById('comments-list');
          comments.forEach(comment => {
              const li = document.createElement('li');
              li.textContent = comment.name;
              commentsList.appendChild(li);
          });
      } catch (error) {
          console.error('Помилка при отриманні коментарів:', error);
      }
  }

  fetchComments();

//5. Привести приклад використання call, apply, bind. 
   //Вивести в консоль пояснення кожного з перелічених методів.
   function greet(name) {
      console.log(`Hello, ${name}! I am ${this.title}.`);
  }
  
  const person = { title: 'Mr.' };
  greet.call(person, 'John');

  function sum(a, b) {
   console.log(a + b);
}

sum.apply(null, [5, 3]);

function logMessage(message) {
   console.log(`[${this.logLevel}] ${message}`);
}

const logger = { logLevel: 'INFO' };
const logInfo = logMessage.bind(logger, 'User logged in');
logInfo();
