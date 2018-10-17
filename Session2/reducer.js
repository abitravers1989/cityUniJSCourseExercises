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
    console.log(acc.min)
    return {
        min: cv.age < acc.min ? cv : acc.min,
        max: cv.age > acc.max ? cv : acc.max
    }
}, { min: 0, max: 0 })

console.log(result);


//if you use {} notation with => function don't need to explicitly return