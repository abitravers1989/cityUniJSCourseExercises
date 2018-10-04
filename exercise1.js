
const namesArray = ['John', 'Ruth', 'Peter'];
const dateOfBirthArray = [23, 35, 40];


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

//could sort the array then get first and last element.
