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