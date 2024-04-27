//3. Викликайте ланцюжок виклку асинхронних функцій через Promise.
let b = [1,4,5,6,9,];

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