

var calc = {
    total: 0,
    add: (number) => {
        return calc.total += number;
    },
    subtract: (number) => {
        return calc.total -= number;
    },
    increment: () => {
        console.log(calc.total)
        return calc.total += 1;
    },
    decrement: () => {
        return calc.total -= 1;
    },
    getTotal: () => {
        return calc.total;
    }
}
result1 = calc.increment().add(10)
console.log(result1);

// // Chain some methods
// result1 = calc.increment().add(10).getTotal();
// console.log(result1); // 11
// // reset total
// calc.total = 0;
// // Chain some methods
// result2 = calc.add(7).subtract(3).getTotal();
// console.log(result2); // 4
// // reset total
// calc.total = 0;
// // Chain some methods
// result3 = calc.increment().decrement().getTotal();
// console.log(result3);