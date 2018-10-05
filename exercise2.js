const array1 = [1, 2, 3, 4, 5]
const array2 = [7, 69, 2, 221, 8974]

const sort = (arr) => {
    let smallest = arr[0];
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        //console.log(here)
        if (arr[i] <= smallest) {
            newArray.unshift(arr[i])
        } else {
            newArray.push(arr[i])
            smallest = arr[i];

        }
    }
    //console.log(newArray)
    return newArray;
}

// const calculateMinSum = (arr) => {
//     let sortedArray = sort(arr);
//     sortedArray.pop();
//     // console.log(sortedArray);
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     const addedArray = sortedArray.reduce(reducer);
//     return addedArray;
// }

// const calculateMaxSum = (arr) => {
//     let sortedArray = sort(arr);
//     sortedArray.shift();
//     // console.log(sortedArray);
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     const addedArray = sortedArray.reduce(reducer);
//     return addedArray;
// }

// console.log(calculateMinSum(array1));
// console.log(calculateMaxSum(array1))



const calculateMinorMaxSum = (arr, method) => {
    let sortedArray = sort(arr);
    console.log(method)
    sortedArray = sortedArray.method;
    console.log(sortedArray);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const addedArray = sortedArray.reduce(reducer);
    return addedArray;
}

const pop = () => {
    return Array.prototype.pop();
}

const shift = () => {
    return Array.prototype.shift();
}


console.log(calculateMinorMaxSum(array2, pop));
console.log(calculateMinorMaxSum(array2, shift));