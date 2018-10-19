

var calc = {
    total: 0,
    add: (number) => {
        calc.total += number;
    },
    subtract: (number) => {
        calc.total -= number;
    }
}
calc.add(4)
console.log(calc.total)
calc.subtract(66)
console.log(calc.total)