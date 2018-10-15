// Objects exercise 

// Create three objects 

// All Objects have the same properties 

// Age, Name 

 
//https://codeburst.io/jsnoob-ways-to-create-an-object-including-es6-way-565a0fdaddb7

// Step 1: 

// const person = (name, age) => {
//     this.name = name;
//     this.age = ages;
// }
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// First object is john 

let john = new Person('John', 25)
 
console.log(john)

// Step 2: 

// Second object is Ruth 

 let ruth = new Person('Ruth', 55)
 
// Step 3: 

// Third object is Peter 

let peter = new Person('Peter', 55)
 

// Step 4: 

// Add those three objects to an array that you have to create 

let newArray = [john, ruth, peter];
 console.log(newArray)
 

// Step 5: 

// Using the filter method get the younger and older object  

 
 

// Step 6: 

// print the values here