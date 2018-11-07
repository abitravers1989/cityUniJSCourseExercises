const salaries = ["4000000", "6776788888", "33330900"]

function salaryAfterTax(salaryString) {
    const salary = parseFloat(salaryString);
    let salary_after_tax = 0;

    salary_after_tax = salary - (salary * ((salary > 40000) ? 40 : 20)) / 100;

    return salary_after_tax;
}



// const salaries_vat = salaries.map((salary) => {
//     return salaryAfterTax(salary)
// })

const salaries_vat = salaries.map((salary) => salaryAfterTax(salary))

console.log(salaries_vat)