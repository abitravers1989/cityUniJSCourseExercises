const array1 = [1, 2, 3, 4, 5]
const array2 = [7, 69, 2, 221, 8974]

const sort = (arr) => {
    let smallest = arr[0];
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= smallest) {
            newArray.unshift(arr[i])
        } else {
            newArray.push(arr[i])
            smallest = arr[i];

        }
    }
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


console.log(calculateMinorMaxSum(array2, pop));
console.log(calculateMinorMaxSum(array2, shift));

console.log(calculateMinorMaxSum(array1, pop));
console.log(calculateMinorMaxSum(array1, shift));