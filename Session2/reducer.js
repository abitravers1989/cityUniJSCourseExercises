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

newArray.reduce((acc, cv) => {
    console.log(acc, cv.age)
    if (cv.age < acc) {
        return cv.age
    }
    console.log(acc)
}, newArray[0].age)