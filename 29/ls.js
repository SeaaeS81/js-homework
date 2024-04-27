//1. Опирайтесь на код лекцій 27-28 (про колбеки).
//let a = [1,4,5,6,9,];

//function clearHouse(isClear, cb) {
   // setTimeout(() =>  {
      //  let reward = 500;
       // if (isClear) {
           // cb(null,reward)
        //} else {
          //  cb('You should clear HOUSE!', 0)
       // }
   // }, 2000)
//};

//function byShort(money, cb) {
   // setTimeout(() =>  {
      //  let shortPrice = 300;
       // if (money >= shortPrice) {
          //  let rest = money - shortPrice;
           // cb(null,rest)
       // } else {
           // cb('Money not enough !!!', money)
      //  }
   // }, 1000)
//};

//function cafee(money,cb) {
   // setTimeout(()=> {
      //  let eatPrice = 100;
       // if (money>= eatPrice) {
         //   let rest = money - eatPrice;
          //  cb(null,rest);
       // } else {
            //cb('You cant buy this meal!!!', money)
       // }
    //}, 1500)
//};



//clearHouse(true, (err,reward) => {
    //if (err === null) {
       // console.log('I get my reward' + reward);
       // byShort(reward,(errShort, rest) => {
            //if (errShort === null) {
              //  console.log('I bought short, and i have' + rest);
              //  cafee(rest, (errCafe, restCafe) => {
                  //  if (errCafe === null) {
                       // console.log('My stomach is full!!! Im glad! I have' + restCafe);
                   // } else {
                      //  console.log('Smth went wrong' + errCafe);
                   // }
               // })
            //} else {
               // console.log('Smth went wrong' + errShort);
            //}
       // })
   // } else {
       // console.log('I havent money' + err);
    //}
//})



//2. Промисифікуйте функції.

let a = [1,4,5,6,9,];

function clearHouse(isClear) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>  {
            let reward = 500;
            if (isClear) {
                resolve(reward);
            } else {
                reject('You should clear HOUSE!');
            }
        }, 2000)
    });
};

function byShort(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>  {
            let shortPrice = 300;
            if (money >= shortPrice) {
                let rest = money - shortPrice;
                resolve(rest);
            } else {
                reject('Money not enough !!!');
            }
        }, 1000)
    });
};

function cafee(money) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let eatPrice = 100;
            if (money>= eatPrice) {
                let rest = money - eatPrice;
                resolve(rest);
            } else {
                reject('You cant buy this meal!!!');
            }
        }, 1500)
    });
};

clearHouse(true)
    .then(reward => {
        console.log('I get my reward' + reward);
        return byShort(reward);
    })
    .then(rest => {
        console.log('I bought short, and i have' + rest);
        return cafee(rest);
    })
    .then(restCafe => {
        console.log('My stomach is full!!! Im glad! I have' + restCafe);
    })
    .catch(err => {
        console.log('I havent money' + err);
    });


