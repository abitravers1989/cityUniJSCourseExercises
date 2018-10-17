function Person(name, age) {
    //because this is node this is scoped to this function and =Person
    // console.log(this)
    this.name = name;
    this.age = age;
}

let john = new Person('John', 25)

let ruth = new Person('Ruth', 55)

let peter = new Person('Peter', 55)

let youngestPerson = new Person('youngestPerson', 21)

let newArray = [john, ruth, peter, youngestPerson];


//why does function scope not inheret from global scope es5

const calculateYoungest = () => {
    //USE REDUCE with conditional (ternary) operator
    // let youngest = newArray[0].age
    // //console.log(this.name)
    // //this should be var as global scoped 
    // for (i = 0; i < newArray.length; i++) {
    //     return (newArray[i].age < youngest ? youngest = newArray[i].age : youngest)
    // }
    let youngest = newArray[0].age
    const reducer = (accumulator, currentValue) => { if (currentValue.age <= youngest) { youngest = currentValue.age } }
    newArray.reduce(reducer)
    return youngest;
}


let youngestObject = newArray.filter(persons => persons.age <= calculateYoungest())

//oldest
let oldest = newArray[0].age
for (i = 0; i < newArray.length; i++) {
    if (newArray[i].age > oldest) {
        oldest = newArray[i].age;
    }
}
let oldestObject = newArray.filter(persons => persons.age >= oldest)

console.log(`Youngest Object Name: ${youngestObject[0].name}, Age: ${youngestObject[0].age}`)
console.log(`Oldest Object Name: ${oldestObject[0].name}, Age: ${oldestObject[0].age}`)

