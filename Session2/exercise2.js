
//https://codeburst.io/jsnoob-ways-to-create-an-object-including-es6-way-565a0fdaddb7

function Person(name, age) {
    this.name = name;
    this.age = age;
}


let john = new Person('John', 25)

let ruth = new Person('Ruth', 55)

let peter = new Person('Peter', 55)

let youngestPerson = new Person('youngestPerson', 21)

let newArray = [john, ruth, peter, youngestPerson];
//console.log(newArray)

//youngest
let youngest = newArray[0].age
for (i = 0; i < newArray.length; i++) {
    if (newArray[i].age < youngest) {
        youngest = newArray[i].age;
    }
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