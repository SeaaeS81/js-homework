
//1.  Вивести в консоль всі ключі об'єкту.

let obj =
   {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
  }
  let keys = Object.keys(obj); 
console.log(keys);

console.log('-------------------------');


//2.  Вивести в консоль всі значення об'єкту.

let valuesOfObj = Object.values(obj); 
console.log(valuesOfObj);

console.log('2-------------------------');


//3.  Вивести в консоль пару [ключ, значення] всіх полів.

let entrOfObj = Object.entries(obj); 
console.log(entrOfObj);

console.log('3-------------------------');


//4.  Скопіювати об'єкт вище в новий об'єкт.
let newObj = Object.assign({}, obj);
console.log(newObj);

console.log('4-------------------------');

//5.  Створити свій об'єкт і об'єднати із об'єктом вище.

let obj1 =
   {
    caк: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
  }

let myObj = {
    ca: true,
    nam: 'BMV',
    mode: 'x5',
    yea: 2023,
    whee: 5,
    engin: 3.5,
    parent: ['X1', 'X2', 'SportX6']
}

let sport = Object.assign( {}, obj1, myObj);
console.log(sport);

console.log('5-------------------------');

//6.  Перевірити чи об'єкт вище має наступні поля: 'car', 'age', 'wheel', 'data', 'parents'.

let str = obj.hasOwnProperty('car');
let str1 = obj.hasOwnProperty('age');
let str2 = obj.hasOwnProperty('wheel');
let str3 = obj.hasOwnProperty('data');
let str4 = obj.hasOwnProperty('parents');

console.log(str);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);


console.log('6-------------------------');

//7.  Заборонити об'єкту створювати та змінювати поля.

let os =
   {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
  }


Object.freeze(os);
os.engine = 1000;
console.log(os);


console.log('7-------------------------');

//8.  Заборонити об'єкту лише створювати нові поля.

let objjj =
   {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
  }

Object.seal(objjj);
objjj.sport = 'soccer';
console.log(objjj);


console.log('8-------------------------');

//9.  Створити новий об'єкт через Object.create (мінімум 6 полів).

let Obj = Object.create({}, {
  one: { value: 'one' },
  two: { value: 'two' },
  three: { value: 'three' },
  four: { value: 'four' },
  five: { value: 'five' },
  six: { value: 'six' }
});
console.log(Obj);

console.log('9-------------------------');

//10. Дано масив: [[true, 2], ['student', true], [null, null], [12, 'hello']]
//Створити із масиву об'єкт.

let myarray = [[true, 2], ['student', true], [null, null], [12, 'hello']];
let myobject = Object.fromEntries(myarray);
console.log(myobject);

console.log('10-------------------------');
    