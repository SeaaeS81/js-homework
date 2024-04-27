//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//1. Через клас створити об'єкт People який всі дані отримує ззовні з полями:
   //name, f_name, old, isMarried, hasPossition, children
   //Вивести об'єкт в консоль.

   class People {
    constructor(name, f_name, old, isMarried, hasPossition, children) {
      this._name = name;
      this._f_name = f_name;
      this._old = old;
      this._isMarried = isMarried;
      this._hasPossition = hasPossition;
      this._children = children;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    get f_name() {
      return this._f_name;
    }
  
    set f_name(f_name) {
      this._f_name = f_name;
    }
  
    get old() {
      return this._old;
    }
  
    set old(old) {
      this._old = old;
    }
  
    get isMarried() {
      return this._isMarried;
    }
  
    set isMarried(isMarried) {
      this._isMarried = isMarried;
    }
  
    get hasPossition() {
      return this._hasPossition;
    }
  
    set hasPossition(hasPossition) {
      this._hasPossition = hasPossition;
    }
  
    get children() {
      return this._children;
    }
  
    set children(children) {
      this._children = children;
    }
  }
  
  let people = new People("John", "Doe", "35", true, true, ["Alice", "Bob"]);
  console.log(people);
  console.log('1-------------------------');
//2. Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice

class shortWork {
    constructor() {
      this._array = [];
    }
  
    get array() {
      return this._array;
    }
  
    set array(array) {
      this._array = array;
    }
  
    filter(callback) {
      return this.array.filter(callback);
    }
  
    find(callback) {
      return this.array.find(callback);
    }
  
    includes(element) {
      return this.array.includes(element);
    }
  
    join(separator) {
      return this.array.join(separator);
    }
  
    slice(start, end) {
      return this.array.slice(start, end);
    }
  }

  let sw = new shortWork();
sw.array = [1, 2, 3, 4, 5];
console.log(sw.filter((x) => x % 2 === 0)); 
console.log(sw.find((x) => x > 3)); 
console.log(sw.includes(3)); 
console.log(sw.join("-")); 
console.log(sw.slice(1, 4)); 
console.log('2-------------------------');
//3. Через клас створити об'єкт Car який всі дані отримує ззовні  з полями:
  // name, model, year, isNew, cost, wheels
   //Вивести об'єкт в консоль.

   class Car {
    constructor(name, model, year, isNew, cost, wheels) {
      this._name = name;
      this._model = model;
      this._year = year;
      this._isNew = isNew;
      this._cost = cost;
      this._wheels = wheels;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    get model() {
      return this._model;
    }
  
    set model(model) {
      this._model = model;
    }
  
    get year() {
      return this._year;
    }
  
    set year(year) {
      this._year = year;
    }
  
    get isNew() {
      return this._isNew;
    }
  
    set isNew(isNew) {
      this._isNew = isNew;
    }
  
    get cost() {
      return this._cost;
    }
  
    set cost(cost) {
      this._cost = cost;
    }
  
    get wheels() {
      return this._wheels;
    }
  
    set wheels(wheels) {
      this._wheels = wheels;
    }
  }
  
  let car = new Car("Toyota", "Camry", "2022", true, "$25,000", "4");
  console.log(car);
  console.log('3-------------------------');
//4. Через клас створити об'єкт Animal який отримує дані ззвоні, створити мінімум 3 поля,
  // та додати через прототайп поведінку для об'єкту (мінімум 2 методи).
  function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
  
  Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
  };
  
  Animal.prototype.sleep = function() {
    console.log(`${this.name} is sleeping.`);
  };
  
  let animal = new Animal("Max", "Dog", "3");
  animal.eat();
  animal.sleep();
  console.log(animal);
  console.log('4-------------------------');
//5. Створити клас Dog, через прототип унаслідувати поведінку від класу Animal
   //та додати власну поведінку (мінімум 2 методи).
   function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
  
  Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
  };
  
  Animal.prototype.sleep = function() {
    console.log(`${this.name} is sleeping.`);
  };

  function Dog(name, species, age) {
    Animal.call(this, name, species, age);
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} is barking.`);
  };
  
  Dog.prototype.fetch = function() {
    console.log(`${this.name} is fetching.`);
  };

  let dog = new Dog("Max", "Dog", "3");
dog.eat();
dog.sleep();
dog.bark();
dog.fetch();
console.log(dog);
console.log('5-------------------------');
//6. Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм.
class Poli {
    constructor() {}
  
    describe() {
      console.log(
        "Поліморфізм - це властивість об'єктно-орієнтованого програмування, яка дозволяє об'єктам одного класу використовуватися в коді так само, як і об'єкти іншого класу. Це означає, що об'єкти можуть виконувати однакові дії, але робити це по-різному."
      );
    }
  }
  
  let poli = new Poli();
  poli.describe();
  console.log('6-------------------------');

//7. Привести приклад поліморфізму.

class Animal1 {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog1 extends Animal1 {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat1 extends Animal1 {
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  let animals1 = [new Dog1("Max"), new Cat1("Misty"), new Dog1("Rocky")];
  
  animals1.forEach((animal1) => {
    animal1.speak();
  });
  console.log('7-------------------------');
//8. Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.

class Inc {
    constructor() {}
  
    describe() {
      console.log(
        "Інкапсуляція - це властивість об’єктно-орієнтованого програмування, яка дозволяє приховувати дані та методи від зовнішнього світу."
      );
    }
  }
  
  let inc = new Inc();
  inc.describe();
  console.log('8-------------------------');