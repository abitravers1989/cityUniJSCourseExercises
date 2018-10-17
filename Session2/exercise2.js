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

//have to give accumulated a value each time.
const result = newArray.reduce((acc, cv) => {
    return {
        min: acc.min === 0 || cv.age < acc.min.age ? cv : acc.min,
        max: acc.max === 0 || cv.age > acc.max.age ? cv : acc.max
    }
}, { min: 0, max: 0 })

console.log(result);
