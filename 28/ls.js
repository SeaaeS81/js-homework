//* Розділяти всі завдання коментарями і писати що треба робити в завданні.

//1. Написати функцію генератор яка приймає як аргумент масив і кожного разу при виклику next(),
   //повертає елемент масиву на конкретній ітерації. Масив: [1, 2, 5, true, 'fff]

   function* arrayGenerator(array) {
    let index = 0;
    while (index < array.length) {
        yield array[index++];
    }
}

let gen = arrayGenerator([1, 2, 5, true, 'fff']);

console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

//2. Написати довільний об'єкт (мінімум 5 полів), 4 полям призначити дискриптор даних, 1 дискриптор доступу.

let obj = {};

Object.defineProperties(obj, {
    'field1': {
        value: 'Hello',
        writable: true,
        enumerable: true,
        configurable: true
    },
    'field2': {
        value: 42,
        writable: false,
        enumerable: true,
        configurable: false
    },
    'field3': {
        value: true,
        writable: true,
        enumerable: false,
        configurable: true
    },
    'field4': {
        value: null,
        writable: true,
        enumerable: true,
        configurable: true
    },
    'field5': {
        get: function() { return this.field1; },
        set: function(newValue) { this.field1 = newValue; },
        enumerable: true,
        configurable: true
    }
});

console.log(obj.field1); // 'Hello'
console.log(obj.field2); // 42
console.log(obj.field3); // true
console.log(obj.field4); // null
console.log(obj.field5); // 'Hello'

obj.field5 = 'World';
console.log(obj.field1); // 'World'
console.log(obj.field5); // 'World'

//3. Написати регулярний вираз який приймає рядок від 1 до 10 символів включаючи лише латинські літери та цифри.
  // Перевіряти через prompt рядок.
  let regex = /^[A-Za-z0-9]{1,10}$/;

let str = prompt("Введіть рядок:");
if (regex.test(str)) {
    alert("Рядок відповідає регулярному виразу.");
} else {
    alert("Рядок не відповідає регулярному виразу.");
}

//4. Наведіть приклад використання: Map, Set, WeakMap, WeakSet.

let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // 'value1'
console.log(map.has('key2')); // true

// Set
let set = new Set();
set.add('value1');
set.add('value2');
console.log(set.has('value1')); // true
console.log(set.size); // 2

// WeakMap
let weakMap = new WeakMap();
let obj1 = {};
let obj2 = {};
weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');
console.log(weakMap.get(obj1)); // 'value1'

// WeakSet
let weakSet = new WeakSet();
let obj3 = {};
let obj4 = {};
weakSet.add(obj3);
weakSet.add(obj4);
console.log(weakSet.has(obj3)); 