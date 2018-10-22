var calc = {
    total: 0,
    add: function (number) {
        this.total += number;
        return this;
    },
    subtract: function (number) {
        this.total -= number;
        return this;
    },
    increment: function () {
        this.total += 1;
        return (this)
    },
    decrement: function () {
        this.total -= 1;
        return this;
    },
    getTotal: () => {
        return calc.total;
    }
}


// Chain some methods
result1 = calc.increment().add(10).getTotal();
console.log(result1); // 11
// reset total
calc.total = 0;
// Chain some methods
result2 = calc.add(7).subtract(3).getTotal();
console.log(result2); // 4
// reset total
calc.total = 0;
// Chain some methods
result3 = calc.increment().decrement().getTotal();
console.log(result3);