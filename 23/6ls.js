
//6 Дано об'єкт, через деструктиризацію дістати: name, isCar, salary, location, a.

const ob = {
    nam: 'fgf',
    age: 33,
    isCar: true,
    job: {
        position: 'dsgs',
        salary: 'ddd',
        locatio: 'dgsgsg',
        career: {
            ab: 1
        }
    }
};

const { nam, isCa, job: { salar }, job: { locatio }, job: { career: { ab } } } = ob;

console.log(nam); 
console.log(isCa); 
console.log(salar); 
console.log(locatio); 
console.log(ab);
console.log('6-------------------------');