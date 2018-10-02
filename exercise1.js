
const namesArray = ['John', 'Ruth', 'Peter'];
const dateOfBirthArray = [23, 35, 40];


const calculateOldest = (names, dateOfBirth) => {
    // let oldest;
    // let count;
    // dateOfBirth.forEach((element, index) => {
    //     oldest = element;
    //     if (element >= oldest) {
    //         oldest === element;
    //         count = index;
    //     }
    // });
    // let output = names[count]
    // return output;

    let oldest = dateOfBirth[0];
    let index;
    for (var i = 0; i < dateOfBirth.length; i++) {
        if (dateOfBirth[i] > oldest) {
            oldest = dateOfBirth[i]
            // console.log(dateOfBirth[i])
            // console.log("oldest" + oldest)
            index = i;
        }
    }
    // console.log(index);
    // console.log(oldest)
    const oldestName = names[index]
    // console.log(oldestName);
    return oldestName;

}

const oldest = calculateOldest(namesArray, dateOfBirthArray);
console.log(oldest);

// const calculateYoungest = (names, dateOfBirth) => {
//     let youngest;
//     let count = 0;
//     dateOfBirth.forEach(element => {
//         youngest = element;
//         if (element < youngest) {
//             youngest === element;
//         }
//         count += 1;
//     });
//     let output = names[count - 1]
//     return output;
// }

// const youngest = calculateYoungest(namesArray, dateOfBirthArray);
// console.log(youngest)