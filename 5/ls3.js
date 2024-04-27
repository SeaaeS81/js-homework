
let arr3 = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];



for (let i = 0; i < arr3.length; i++) {
    for (let j =0; j < arr3.length; j++) {
        if (arr3[j] > arr3[j + 1]) {
            
            let tmp = arr3[j];
            arr3[j] = arr3[j+1];
            arr3[j+1] = tmp;

        }
    }
}
  console.log(arr3);