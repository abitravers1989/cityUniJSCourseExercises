const car = {
    colour: "black",
    beeping: () => {
        console.log('Beeping');
    }
}

console.log(car.colour);
car.beeping();

car.doors = 4;

car.openDoors = () => {
    console.log(`${car.doors} are open`)
}

car.openDoors()

car['openDoors']();

for (const properties in car) {
    let message = `property name ${properties}`

    message += `:  value ${car[properties]}`

    console.log(message)
}

//check if an object has a property
const hasProperty = car.hasOwnProperty('lights');

console.log(hasProperty)

const carCopy = car;

console.log(carCopy)

//this changes the amount of doors on orignal car too
carCopy.doors = 7;

console.log('car:')
console.log(car)
console.log('copy:')
console.log(carCopy)

