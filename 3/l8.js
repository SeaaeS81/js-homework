
//8. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

let myray = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let product = myray.reduceRight((a, b) => a * b);
document.write(product);