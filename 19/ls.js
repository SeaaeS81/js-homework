

//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//* Всі методи реалзовувати через геттери і сеттери (get, set)

//1. Створити клас Person, який буде містити дані людини (мінімум 4 поля) і також методи talk, go, run, work. 
//Реалізувати методи довільно.

class Person {
  constructor(name, age, gender, occupation) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._occupation = occupation;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  get gender() {
    return this._gender;
  }

  set gender(gender) {
    this._gender = gender;
  }

  get occupation() {
    return this._occupation;
  }

  set occupation(occupation) {
    this._occupation = occupation;
  }

  talk() {
    console.log(`${this.name} говорить.`);
  }

  go() {
    console.log(`${this.name} йде.`);
  }

  run() {
    console.log(`${this.name} біжить.`);
  }

  work() {
    console.log(`${this.name} працює.`);
  }
}
  let teacher = new Person("John", "30", "male", "teacher");
  teacher.talk(); 
  teacher.go(); 
  teacher.run(); 
  teacher.work(); 
  console.log('1-------------------------');
//2. Створити клас Programmer який буде наслідуватись від Person і реалізовувати метод writeCode, 
  // використати класи і вивести дані роботи в консоль.

  class Programmer extends Person {
    constructor(name, age, gender, occupation) {
      super(name, age, gender, occupation);
    }
  
    writeCode() {
      console.log(`${this.name} is writing code.`);
    }
  }
  
  class Pilot extends Programmer {
    constructor(name, age, gender, occupation) {
      super(name, age, gender, occupation);
    }
  }
  
  let pilot = new Pilot("Roma", "30", "male", "pilot");
  pilot.talk("name"); 
  pilot.go(); 
  pilot.run(); 
  pilot.work(); 
  
  let programmer = new Programmer("Max", "25", "female", "programmer");
programmer.talk(); 
programmer.go(); 
programmer.run(); 
programmer.work(); 
programmer.writeCode();
console.log('2-------------------------');
//3.  Створити клас Driver який буде наслідуватись від Person і реалізовувати метод driveCar, 
   //використати класи і вивести дані роботи в консоль.
  

   class Driver extends Person {
    constructor(name, age, gender, occupation) {
      super(name, age, gender, occupation);
    }
  
    driveCar() {
      console.log(`${this.name} is driving a car.`);
    }
  }

  let driver = new Driver("Alex", "24", "female", "driver");
driver.talk(); 
driver.go(); 
driver.run(); 
driver.work(); 
driver.driveCar();
console.log('3-------------------------');
//4. Створити клас Manager який буде наслідуватись від Person і реалізовувати метод manageData, використати класи і вивести дані роботи в консоль.
   

   class Manager extends Person {
    constructor(name, age, gender, occupation) {
      super(name, age, gender, occupation);
    }
  
    manageData() {
      console.log(`${this.name} is managing data.`);
    }
  }

  let manager = new Manager("John", "35", "male", "manager");
manager.talk(); 
manager.go(); 
manager.run(); 
manager.work(); 
manager.manageData();
console.log('4-------------------------');