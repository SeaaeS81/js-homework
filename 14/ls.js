
//1. Повторити написану кол-бек функцію на парі.

let a = [1, 4, 5, 6, 9];

function clearHouse(isClear, cb) {
    let reward = 500;

    if (isClear) {
        cb(null, reward);
    } else {
        cb('You should clear HOUSE!', 0);
    }
}

function byShort(money, cb) {
    let shortPrice = 300;

    setTimeout(() => {
        if (money >= shortPrice) {
            let rest = money - shortPrice;
            cb(null, rest);
        } else {
            cb('Money not enough !!!', money);
        }
    }, 1500);
}

function cafee(money, cb) {
    let eatPrice = 100;

    setTimeout(() => {
        if (money >= eatPrice) {
            let rest = money - eatPrice;
            cb(null, rest);
        } else {
            cb('You cant buy this meal!!!', money);
        }
    }, 1000);
}

clearHouse(true, (err, reward) => {
    if (err === null) {
        console.log('I get my reward ' + reward);

        byShort(reward,(errShort, rest) => {
            if (errShort === null) {
                console.log('I bought a charger and I have ' + rest);

                cafee(rest, (errCafe, restCafe) => {
                    if (errCafe === null) {
                        console.log('My stomach is full!!! Im glad! I have ' + restCafe);
                    } else {
                        console.log('Something went wrong ' + errCafe);
                    }
                });
            } else {
                console.log('Something went wrong ' + errShort);
            }
        });
    } else {
        console.log('I havent money ' + err);
    }
});


//2. Створити аналогічну кол-бек функцію яка буде складатись із трьох послідовних дій:
  // - Полагодив ПК, отримав нагороду (час виконання 3 сек)
  // - Купив зарядний пристрій (час виконання 1.5 сек)
  // - Купив продукти в магазині (час виконання 1 сек)

  function fixPC(callback) {
    setTimeout(function() {
        console.log('Полагодив ПК');
        callback();
    }, 3000);
}

function buyCharger(callback) {
    setTimeout(function() {
        console.log('Купив зарядний пристрій');
        callback();
    }, 1500);
}

function buyGroceries() {
    setTimeout(function() {
        console.log('Купив продукти в магазині');
    }, 1000);
}

fixPC(function() {
    buyCharger(function() {
        buyGroceries();
    });
});
