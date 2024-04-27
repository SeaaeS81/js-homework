//4. Створити функцію яка через рест оператор приймає довільну кількість аргументів
  // та ітерацією показує їх в масиві.

  function myFunction(...args) {
    args.forEach(arg => console.log(arg));
  }
  
  myFunction(1, 2, 3);
  
  function myFunction() {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(arg => console.log(arg));
  }
  
  myFunction(1, 2, 3);
  console.log('4-------------------------');