//using object.create();

const person = {
    name: 'defaultName',
    age: 2
}

const john = Object.create(person)
john.name = 'John'
john.age = 23;

const ruth = Object.create(person)
ruth.name = 'ruth'
ruth.age = 43;

const peter = Object.create(person)
peter.name = 'peter'
peter.age = 553;

let newArray = [john, ruth, peter];
//console.log(newArray)


//youngest
let youngest = newArray[0].age
for (i = 0; i < newArray.length; i++) {
    if (newArray[i].age < youngest) {
        youngest = newArray[i].age;
    }
}

function findYoungest() {
    return newArray.reduce((min, currentValue) => )
}

let youngestObject = newArray.filter(persons => persons.age <= youngest)

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