const mySandwich = (param1, param2, callback) => {
    console.log('started eating:' + param1 + param2);
    callback();
}

const typeOfSandwich = () => {
    console.log('veggie')
}

mySandwich('ham', 'cheese', typeOfSandwich);