const array = [1, 2, 4, 5, 6, 8, 9, 12];


// const newArray = array.filter((item) => {
//     return item%2 === 0;
// })

// console.log(newArray);

const vat = 10;

const newArray2 = array.map((item) => {
    return item*vat;
})

console.log(newArray2)
console.log(array)

const myMap = (arr, callback) => {
    let newArray = arr.callback()
    return newArray;
    //takes an array
    //creates a new array which is transformd and retruns it 
}

const newArray3 = array.myMap((item) => {
    return item*vat;
})

console.log(newArray3)

