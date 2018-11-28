const clientData = {
    id: 094545,
    fullName: "Not Set",
    setUserName: (firstNanme, lastName) => {
        this.fullName = firstNanme + " " + lastName;
        console.log(this)
    }
}

const getUserInput = (firstName, lastName, callback) => {
    callback(firstName, lastName)
}

getUserInput("snakes", "magee", clientData.setUserName)

console.log(clientData.setUserName)
console.log(global.fullName)



const makePoem = (name, gender) => {
    console.log(name + "has the gender" + gender)
}

const getUserInput2 = (firstName, lastName, gender, callback) => {
    const fullName = firstName + lastName;

    if (typeof callback === "function") {
        callback(fullName, gender)
    }
}

getUserInput2("michal", "snn", "male", makePoem)


const firstMethod = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('first method completed');
            resolve({data: '123'})
        }, 2000)
    })
    return promise;
}

const value = firstMethod()
.then(() => {console.log('value data2 ' + value.data)})






class Api {
    constructor() {
        this.user = { id: 1, name: 'test'}
        this.friends = [ this.user, this.user ]
    }

    getUser () {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.user), 200)
        })
    }
}

const asyncAwait = async () => {
    const api = new Api()
    const user = await api.getUser()
    //this works
    console.log(user)
    //this didn't work
    //console.log('user is: ' + user)
    //but this does
    console.log('user is: ', user)
    //that is becuase i was trying to add a promise to a string.
}

asyncAwait()