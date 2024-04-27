
//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//1. Створіть функцію, яка виводить текст "Hello, World!" в консоль з затримкою у 3 секунди за допомогою setTimeout.
 // Опишіть в console.info, як функція виконується асинхронно.

 function delayedHello() {
    setTimeout(() => {
        console.info('Hello, World!'); // Виводимо повідомлення після 3 секунд
    }, 3000);
}

delayedHello();
console.info('Функція виконується асинхронно.');

//2. Створіть промисіфіковані функції, і функцію яка виконує кілька запитів до різних промисифікованих функцій за допомогою
   //- Promise.all
   //- Promise.allSettled
  // - Promice.race
  // - Promice.any

  function delay(value, ms) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

// Приклад використання Promise.all
Promise.all([
    delay('First', 1000),
    delay('Second', 2000),
    delay('Third', 1500)
]).then(results => {
    console.log('Promise.all result:', results);
});

// Приклад використання Promise.allSettled
Promise.allSettled([
    delay('Resolved', 1000),
    Promise.reject('Rejected'),
    delay('Another resolved', 1500)
]).then(results => {
    console.log('Promise.allSettled result:', results);
});

// Приклад використання Promise.race
Promise.race([
    delay('Fast', 500),
    delay('Slow', 2000)
]).then(result => {
    console.log('Promise.race result:', result);
});

// Приклад використання Promise.any
Promise.any([
    delay('First', 1000),
    Promise.reject('Rejected'),
    delay('Second', 1500)
]).then(result => {
    console.log('Promise.any result:', result);
});

//3. Використовуючи асинхронний код, напишіть програму, 
  // яка виконує певну асинхронну операцію (наприклад, затримка за допомогою setTimeout) декілька разів у циклі.
  // Покажіть, як код виконується асинхронно та управляється з використанням:
  // - async/await
  // - Promise

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Асинхронна функція, яка виконує затримку у циклі
async function executeAsyncOperations() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Operation ${i} started`);
        await delay(1000); // Затримка на 1 секунду
        console.log(`Operation ${i} completed`);
    }
}

// Виклик асинхронної функції
executeAsyncOperations()
    .then(() => console.log('All operations finished'))
    .catch(error => console.error('Error:', error));

