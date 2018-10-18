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

//have to give accumulated a value each time.
const result = newArray.reduce((acc, cv) => {
    return {
        min: acc.min === 0 || cv.age < acc.min.age ? cv : acc.min,
        max: acc.max === 0 || cv.age > acc.max.age ? cv : acc.max
    }
}, { min: 0, max: 0 })

console.log(result);

//console.log(`Youngest Object Name: ${youngestObject[0].name}, Age: ${youngestObject[0].age}`)
//console.log(`Oldest Object Name: ${oldestObject[0].name}, Age: ${oldestObject[0].age}`)