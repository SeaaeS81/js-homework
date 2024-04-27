//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//1. Через функцію конструктор створити об'єкт People з полями:
   //name, f_name, old, isMarried, hasPossition, children
   //Вивести об'єкт в консоль.

   function People(name, f_name, old, isMarried, hasPossition, children) {
    this.name = name;
    this.f_name = f_name;
    this.old = old;
    this.isMarried = isMarried;
    this.hasPossition = hasPossition;
    this.children = children;
  }
  
  let person = new People('John', 'Doe', 25, true, 'Manager', ['Tom', 'Jerry']);
  console.log(person);
  console.log('1-------------------------');
//2. Через прототайп створити власні методи масивів: filter, find, includes, join, slice

Array.prototype.filter = function(callback) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  };
  
  Array.prototype.find = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
  };
  
  Array.prototype.includes = function(searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true;
      }
    }
    return false;
  };
  
  Array.prototype.join = function(separator = ',') {
    let joinedString = '';
    for (let i = 0; i < this.length - 1; i++) {
      joinedString += `${this[i]}${separator}`;
    }
    joinedString += `${this[this.length - 1]}`;
    return joinedString;
  };
  
  Array.prototype.slice = function(startIndex, endIndex) {
    let slicedArray = [];
    startIndex = startIndex || 0;
    endIndex = endIndex || this.length;
    
    if (startIndex < 0) {
      startIndex += this.length;
      if (startIndex < 0) {
        startIndex = 0;
      }
    }
    
    if (endIndex < 0) {
      endIndex += this.length;
      if (endIndex < startIndex) {
        endIndex = startIndex;
      }
    }
  
    for (let i = startIndex; i < endIndex && i < this.length; i++) {
      slicedArray.push(this[i]);
    }
  
    return slicedArray;
  };
  
  const myArray = [1,2,3,4,5];
  console.log(myArray.filter((x) => x > 2)); 
  console.log(myArray.find((x) => x === 3)); 
  console.log(myArray.includes(2)); 
  console.log(myArray.join('-')); 
  console.log(myArray.slice(1,3)); 
  console.log('2-------------------------');
//3. Через функцію конструктор створити об'єкт Car з полями:
  // name, model, year, isNew, cost, wheels
  // Вивести об'єкт в консоль.

  function Car(name, model, year, isNew, cost, wheels) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.isNew = isNew;
    this.cost = cost;
    this.wheels = wheels;
  }
  
  let car = new Car('Tesla', 'Model S', 2022, true, '$80,000', 4);
  console.log(car);
  console.log('3-------------------------');
//4. Через функцію конструктор створити об'єкт Animal, створити мінімум 3 поля,
   //та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

   function Animal(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
  
  Animal.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}!`);
  };
  
  Animal.prototype.getAge = function() {
    console.log(`I am ${this.age} years old.`);
  };
  
  let animal = new Animal('Fluffy', 2, 'cat');
  animal.greet(); 
  animal.getAge(); 
  console.log('4-------------------------');
//5. Створити об'єкт Dog, через прототип унаслідувати поведінку від об'єкту Animal
   //та додати власну поведінку (мінімум 2 методи).

   function Animal() {
    this.animalProperty = 'I am an animal';
  }
  
  Animal.prototype.animalMethod = function() {
    console.log('This is an animal method');
  };
  
  function Dog() {
    Animal.call(this);
    this.dogProperty = 'I am a dog';
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.dogMethod1 = function() {
    console.log('This is dog method 1');
  };
  
  Dog.prototype.dogMethod2 = function() {
    console.log('This is dog method 2');
  };
  
  let myDog = new Dog();
  console.log(myDog.animalProperty); 
  console.log(myDog.dogProperty); 
  myDog.animalMethod(); 
  myDog.dogMethod1(); 
  myDog.dogMethod2(); 