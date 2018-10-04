const array1 = [1, 2, 3, 4, 5]
const array2 = [7, 69, 2, 221, 8974]

const minMax = (arr) => {
    let smallest = arr[0];
    let newArray = [];
    for (let i = 0; i < arr; i++) {
        console.log(here)
        if (arr[i] > smallest) {
            newArray.pop(arr[i])
            console.log(newArray)
            console.log(smallest)
            console.log(arr[i])
        } else {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

console.log(minMax(array2))