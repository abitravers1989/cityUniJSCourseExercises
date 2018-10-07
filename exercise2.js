const array1 = [1, 2, 3, 4, 5]
const array2 = [7, 69, 2, 221, 8974]


// const bubbleSort = arr => {

const sort = arr => {
    let newArray = [];
    for (let x = 0; x < arr.length; x++) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[x] > arr[i]) count += 1;
        }
        // if (!newArray[count]) {
        //     newArray[count] = arr[x];
        // } else {
        for (let y = count; y < arr.length; y++) {
            if (!newArray[y]) {
                //console.log(arr[x])
                newArray[y] = arr[x];
                break
            } else {
                newArray[count] = arr[x];
            }
        }
        // }
    }
    console.log(newArray)
    return newArray;
}

const calculateMinorMaxSum = (arr, method) => {
    let sortedArray = sort(arr);
    method(sortedArray);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const addedArray = sortedArray.reduce(reducer);
    return addedArray;
}

const pop = (arr) => {
    return arr.pop();
}

const shift = (arr) => {
    return arr.shift();
}

//const array2 = [14, 43, 95, 73, 36];


const array3 = [14, 43, 43, 4999999, 43, 36, 3, 666666, 222, 1222];
sort(array3);
// console.log(calculateMinorMaxSum(array2, pop));
// console.log(calculateMinorMaxSum(array2, shift));

// console.log(calculateMinorMaxSum(array1, pop));
// console.log(calculateMinorMaxSum(array1, shift));

// console.log(calculateMinorMaxSum(array3, pop));
// console.log(calculateMinorMaxSum(array3, shift));

// 1673711044 2264237270
// 1673711044 2486347135
