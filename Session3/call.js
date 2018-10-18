

function add(c, d) {
    //console.log(this)
    return this.a + this.b + c + d;
}

var myObject = {
    a: 1,
    b: 3
}

const something = add.call(myObject, 5, 7);
console.log(add(5, 7))

function Product(name, price) {
    console.log('product this')
    console.log(this)
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    console.log('food this')
    console.log(this)
    Product.call(this, name, price);
    this.category = "food";
}

console.log(new Food('cheese', 5).name)

let animal = "snakes";
let sleepDuration = '12hours';

function greet() {
    let reply = [this.animal, 'typically sleeps', this.sleepDuration].join(' ');
    console.log(reply);
}


let obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
}

greet.call(obj);

greet.call()

let animal2 = "snakes";
let sleepDuration2 = '12hours';

const greet2 = () => {
    let reply = [this.animal, 'typically sleeps', this.sleepDuration].join(' ');
    console.log(reply);
}

greet2()