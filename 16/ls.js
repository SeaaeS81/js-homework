
//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//1. Через функцію конструктор створити об'єкт Car з полями:
   //name, model, old, price, wheels
   //Вивести об'єкт в консоль.

   function Car(name, model, old, price, wheels) {
    this.name = name;
    this.model = model;
    this.old = old;
    this.price = price;
    this.wheels = wheels;
  }
  
  let car = new Car('Tesla', 'Model S', 2022, '$80,000', 4);
  console.log(car);
  console.log('1-------------------------');
//2. Через прототайп створити власні методи масивів: some, every, reduce, splice

Array.prototype.some = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  
  Array.prototype.every = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
  
  Array.prototype.reduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  };
  
  Array.prototype.splice = function(startIndex, deleteCount, ...items) {
    let deletedItems = [];
    let remainingItems = [];
    
    for (let i = 0; i < startIndex && i < this.length; i++) {
      remainingItems.push(this[i]);
    }
    
    for (let i = startIndex; i < startIndex + deleteCount && i < this.length; i++) {
      deletedItems.push(this[i]);
    }
    
    for (let item of items) {
      remainingItems.push(item);
    }
    
    for (let i = startIndex + deleteCount; i < this.length; i++) {
      remainingItems.push(this[i]);
    }
    
    while (this.length > remainingItems.length) {
      this.pop();
    }
    
    for (let item of remainingItems) {
      this.push(item);
    }
    
    return deletedItems;
  };
  
  const myArray = [1,2,3,4,5];
  console.log(myArray.some((x) => x > 2)); // true
  console.log(myArray.every((x) => x > 2)); // false
  console.log(myArray.reduce((accumulator, currentValue) => accumulator + currentValue)); //15
  console.log(myArray.splice(1,2,'a','b','c')); //[2,3]
  console.log(myArray); //[1,'a','b','c',4,5]
  console.log('2-------------------------');
//3. Через функцію конструктор створити об'єкт dog з полями:
  // name, model, year, cost
   //Вивести об'єкт в консоль.

   function Dog(name, model, year, cost) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.cost = cost;
  }
  
  let dog = new Dog('Buddy', 'Labrador Retriever', 2021, '$1,000');
  console.log(dog);
  console.log('3-------------------------');
//4. Через функцію конструктор створити об'єкт Parent, створити мінімум 3 поля,
   //та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

   function Parent(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  Parent.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}!`);
  };
  
  Parent.prototype.getAge = function() {
    console.log(`I am ${this.age} years old.`);
  };
  
  let parent = new Parent('John', 35, 'male');
  parent.greet(); // Hello, my name is John!
  parent.getAge(); // I am 35 years old.
  console.log('4-------------------------');
//5. Створити об'єкт Son, через прототип унаслідувати поведінку від об'єкту Parent
  // та додати власну поведінку (мінімум 2 методи).

  function Parent(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  Parent.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}!`);
  };
  
  Parent.prototype.getAge = function() {
    console.log(`I am ${this.age} years old.`);
  };
  
  function Son(name, age, gender) {
    Parent.call(this, name, age, gender);
  }
  
  Son.prototype = Object.create(Parent.prototype);
  Son.prototype.constructor = Son;
  
  Son.prototype.getGender = function() {
    console.log(`I am a ${this.gender}.`);
  };
  
  Son.prototype.getHobby = function() {
    console.log(`My hobby is reading.`);
  };
  
  let son = new Son('John', 25, 'male');
  son.greet(); 
  son.getAge(); 
  son.getGender(); 
  son.getHobby(); 
  console.log('5-------------------------');

//6. Створити КЛАС People із полями: name, age, isMarried, isChilds, job
  // створити 3 інстанси класу People і вивести їхні поля в консоль.
  class People {
    constructor(name, age, isMarried, isChilds, job) {
      this.name = name;
      this.age = age;
      this.isMarried = isMarried;
      this.isChilds = isChilds;
      this.job = job;
    }
  }
  
  let person1 = new People('John', 35, true, 2, 'Manager');
  let person2 = new People('Jane', 28, false, 0, 'Engineer');
  let person3 = new People('Bob', 42, true, 3, 'Doctor');
  
  console.log(person1);
  console.log(person2);
  console.log(person3);
  console.log('6-------------------------');
//7. Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height
  // Додатково створити методи: changeName, addAge, changeSpeed, run
   //Вивести поля класу в консоль та використати методи.

   class Tiger {
    constructor(name, kind, age, speed, weight, height) {
      this.name = name;
      this.kind = kind;
      this.age = age;
      this.speed = speed;
      this.weight = weight;
      this.height = height;
    }
  
    changeName(newName) {
      this.name = newName;
    }
  
    addAge() {
      this.age++;
    }
  
    changeSpeed(newSpeed) {
      this.speed = newSpeed;
    }
  
    run() {
      console.log(`${this.name} is running at ${this.speed} mph!`);
    }
  }
  
  let tiger = new Tiger('Tony', 'Bengal', 5, 40, '500 lbs', '3 ft');
  console.log(tiger);
  tiger.changeName('Tigger');
  tiger.addAge();
  tiger.changeSpeed(50);
  tiger.run();
  console.log(tiger);
  console.log('7-------------------------');
//8. Перевірити всі створені об'єкти на те чи вони походять від кожного класу (чи ф-ції конструктора),
   //вивести результат в консоль.

   console.log(car instanceof Car);
   console.log(car instanceof Object);
   console.log(car instanceof Dog);
   console.log('8.1-------------------------');

   console.log(myArray instanceof Array);
   console.log(myArray instanceof Object);
   console.log(myArray instanceof Parent);
   console.log('8.2-------------------------');
   console.log(dog instanceof Dog);
   console.log(dog instanceof Object);
   console.log(dog instanceof People);
   console.log('8.3-------------------------');
   console.log(parent instanceof Parent);
   console.log(parent instanceof Object);
   console.log(parent instanceof Array);
   console.log('8.4-------------------------');
   console.log(son instanceof Son);
   console.log(son instanceof Object);
   console.log(son instanceof Dog);
   console.log('8.5-------------------------');
   console.log(person1 instanceof People);
   console.log(person1 instanceof Object);
   console.log(person1 instanceof Tiger);
   console.log('8.6-------------------------');

   console.log(tiger instanceof Tiger);
   console.log(tiger instanceof Object);
   console.log(tiger instanceof Car);
   console.log('8.7-------------------------');











   class Person {
   
      name;
      
      age;
      
      job;

      constructor(name,age,job) {
        this.name = name;
      
        this.age = age;
      
        this.job = job;

      }

         talk(topic) {

          console.log(`Im ${this.name} and i have ${this.age} and i will talk about $(topic)`);

         }

         go(where) {
          console.log(` I will go to $(where)`)
         }

    }





  
    changeName(newName) {
      this.name = newName;
    }
  
    addAge() {
      this.age++;
    }
  
    changeSpeed(newSpeed) {
      this.speed = newSpeed;
    }
  
    run() {
      console.log(`${this.name} is running at ${this.speed} mph!`);
    }
  }
  
  let tiger = new Tiger('Tony', 'Bengal', 5, 40, '500 lbs', '3 ft');
  console.log(tiger);
  tiger.changeName('Tigger');
  tiger.addAge();
  tiger.changeSpeed(50);
  tiger.run();
  console.log(tiger);







  class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    talk() {
        console.log(`${this.name} is talking.`);
    }
    go() {
        console.log(`${this.name} is going.`);
    }
    run() {
        console.log(`${this.name} is running.`);
    }
    work() {
        console.log(`${this.name} is working.`);
    }
}
class Programmer extends Person {
    writeCode() {
        console.log(`${this.name} is writing code.`);
    }
}
let person1 = new Person("John", 25, "Male");
person1.talk();
person1.go();
person1.run();
person1.work();
let programmer1 = new Programmer("Jane", 30, "Female");
programmer1.talk();
programmer1.go();
programmer1.run();
programmer1.work();
programmer1.writeCode();