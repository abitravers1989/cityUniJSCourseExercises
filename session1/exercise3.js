const car = {
    colour: "red",
    beeping: () => {
        console.log('beep');
    }
}

console.log(car.colour)
car.beeping()

car.numberofDoors = (carMake) => {
    if (carMake === 'nisan') {
        return 4;
    }
}

//console.log(car.numberofDoors('nisan'))

car['numberofDoors']('nisan')

//mutation .. doesn't exist for objects .. happens on strings