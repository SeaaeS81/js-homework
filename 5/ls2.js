
let count = 0;

let arr2 = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110];

let sNum = 60;

let start = 0;
let end = arr2.length - 1;

let m;

let isFound = false;

while (isFound === false && start <= end) {
   m = Math.floor((start + end) / 2);
    console.log(m, 'fsdsd', arr2[m]);


   if (arr2[m] === sNum) {
    console.log(arr2[m]);
    isFound = true
  }
    
   if (arr2[m] > sNum) {
    console.log(100);
    end = m - 1;
  }  
    
    if (arr2[m] < sNum) {
    console.log(110);

    start = ++m;
  }


  ++count
}

if (isFound === false) {
    console.log("Element not found");
}