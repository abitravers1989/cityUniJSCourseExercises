const array1 = [1, 2, 3, 4, 5]
const array2 = [7, 69, 2, 221, 8974]

const sort = arr => {
    let smallest = arr[0];
    let newArray = [];
    let count = 0;
    ///loop through each one then take a count of how many bigger than and put it at that index in the array.//#endregion
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] <= arr[i]) {
            //newArray.unshift(arr[0]);
            // console.log(count)
        } else {
            //newArray.push(arr[0])
            count += 1;
            // console.log(count);
        }
    }
    let arrayValue = {};
    arrayValue.arrayNum = arr[0];

    //want to add a property to a variable.

    arrayValue.index = count;
    console.log(arrayValue)
    // let indexofArray = count;
    // console.log(count);

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] <= smallest) {
    //         newArray.unshift(arr[i])
    //         smallest = arr[i];
    //     } else {
    //         newArray.push(arr[i])
    //     }
    //     console.log(newArray)
    // }
    console.log(newArray)
    return newArray;

}

const calculateMinorMaxSum = (arr, method) => {
    let sortedArray = sort(arr);
    // console.log(sortedArray);
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

const array3 = [14, 43, 95, 73, 36];
sort(array3);
// console.log(calculateMinorMaxSum(array2, pop));
// console.log(calculateMinorMaxSum(array2, shift));

// console.log(calculateMinorMaxSum(array1, pop));
// console.log(calculateMinorMaxSum(array1, shift));

// console.log(calculateMinorMaxSum(array3, pop));
// console.log(calculateMinorMaxSum(array3, shift));

// 1673711044 2264237270
// 1673711044 2486347135
