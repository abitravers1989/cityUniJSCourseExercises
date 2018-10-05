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
    console.log(newArray)
    return newArray;
}

sort(array2)