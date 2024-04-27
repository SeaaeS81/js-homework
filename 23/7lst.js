
//7. Дано масив, через деструктиризацію дістати: 'fgf', true, 'ddd', 'dgsgsg', 1
//['fgf', 33, true, ['dsgs', 'ddd', 'dgsgsg', [1]]]

const arr = ['fgf', 33, true, ['dsgs', 'ddd', 'dgsgsg', [1]]];
const [name, , isCar, [salary, locati, , [a]]] = arr;

console.log(name); 
console.log(isCar); 
console.log(salary);
console.log(locati); 
console.log(a);
console.log('7-------------------------');