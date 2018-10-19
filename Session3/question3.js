

var calc = {
    total: 0,
    add: (number) => {
        calc.total += number;
    },
    subtract: (number) => {
        calc.total -= number;
    },
    increment: () => {
        calc.total += 1;
    },
    decrement: () => {
        calc.total -= 1;
    },
    getTotal: () => {
        return calc.total;
    }
}
calc.add(4)
console.log(calc.total)
calc.subtract(66)
console.log(calc.total)
calc.increment()
console.log(calc.total)
calc.decrement()
console.log(calc.total)
console.log(calc.getTotal())