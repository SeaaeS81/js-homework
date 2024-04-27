//5. Покажіть приклади використання Promise.all, Promise.allSetlled, Promise.race.
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // expected output: Array [3, 42, "foo"]
});

// Promise.allSettled
let promise4 = Promise.resolve(3);
let promise5 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'foo');
});

Promise.allSettled([promise4, promise5]).
  then((results) => results.forEach((result) => console.log(result.status)));

// Promise.race
let promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

let promise7 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise6, promise7]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});