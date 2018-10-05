
const namesArray = ['John', 'Ruth', 'oldest', 'Peter'];
const dateOfBirthArray = [23, 35, 65, 40];


const calculateOldest = (names, dateOfBirth) => {
    let oldest = dateOfBirth[0];
    let index;
    for (let i = 0; i < dateOfBirth.length; i++) {
        if (dateOfBirth[i] > oldest) {
            oldest = dateOfBirth[i]
            index = i;
        }
    }
    const oldestName = names[index]
    return oldestName;

}

const oldest = calculateOldest(namesArray, dateOfBirthArray);
console.log(oldest);

const calculateYoungest = (names, dateOfBirth) => {
    // console.log(dateOfBirth[0])
    let youngest = dateOfBirth[0];
    let index;
    for (let i = 0; i < dateOfBirth.length; i++) {
        if (dateOfBirth[i] < youngest) {
            youngest = dateOfBirth[i]
            index = i;
        }
    }
    const youngestName = names[index]
    return youngestName;

}

const namesArray2 = ['John', 'Ruth', 'Petere', 'hanna', 'cats'];
const dateOfBirthArray2 = [23, 35, 15, 40, 65];

const youngest = calculateYoungest(namesArray2, dateOfBirthArray2);
console.log(youngest);

//could sort the array then get first and last element.
