
//2. Створити об'єкт* user із 3 рівнями вкладеностей (на кожному рівні не менше 3 поля)
//2.1  Вивести на 2 рівні 1 поле, 
//та на 3 рівні 2 поля в консоль


let user = {
  lev1: {
      f1: "v1",
      f2: "v2",
      f3: "v3",
      lev2: {
          f4: "v4",   //виправив
          f5: "v5",
          f6: "v6",
          lev3: {
              f7: "v7",
              f8: "v8",
              f9: "v9"
          }
      }
  }
};

console.log(user.lev1.f1);
console.log(user.lev1.lev2.f4);
console.log(user.lev1.lev2.lev3.f7);
console.log(user.lev1.lev2.lev3.f8);