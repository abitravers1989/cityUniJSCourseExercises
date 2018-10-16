const sort = arr => {
    let newArray = [];
    for (let x = 0; x < arr.length; x++) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[x] > arr[i]) count += 1;
        }
        for (let y = count; y < arr.length; y++) {
            if (!newArray[y]) {
                newArray[y] = arr[x];
                break
            } else {
                newArray[count] = arr[x];
            }
        }
    }
    console.log(newArray)
    return newArray;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const calculateMinorMaxSum = (arr, method) => {
    let sortedArray = sort(arr);
    method(sortedArray);
    const addedArray = sortedArray.reduce(reducer);
    return addedArray;
}

const pop = (arr) => {
    return arr.pop();
}

const shift = (arr) => {
    return arr.shift();
}

const array2 = [14, 43, 95, 73, 36];


const array3 = [14, 43, 43, 4999999, 43, 36, 3, 4999999, 222, 1222];
sort(array3);

const array1 = [1, 2, 3, 4, 5]
const array2 = [7, 69, 2, 221, 8974]
console.log(calculateMinorMaxSum(array2, pop));
console.log(calculateMinorMaxSum(array2, shift));



// const data = [];

// for (let x = 1; x <= 10000; x++) {
//     data.push({ x: x, y: Math.floor(Math.random() * (10000)) })
// }

// const sortedLargeArray = sort(data);
// console.log(sortedLargeArray)