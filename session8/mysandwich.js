const mySandwich = (param1, param2, callback) => {
    console.log('started eating:' + param1 + param2);
    callback();
}

const typeOfSandwich = () => {
    console.log('veggie')
}

mySandwich('ham', 'cheese', typeOfSandwich);


const getUser = (cb) => {
    setTimeout(() => {
        cb({name: 'sss'})
    })
}

getUser((user) => {
    console.log(user.name)
})


const getUser2 = (cb) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cb({name: 'newName'}))
        })
    })
}

getUser2((user) => {
    console.log(user.name)
})
    
