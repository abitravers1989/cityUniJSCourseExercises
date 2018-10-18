let fullname = "john";

var obj = {
    fullname: 'jane',
    //ss: console.log(fullname),
    prop: {
        fullname: "tom",
        getName: function () {
            //console.log(this)
            return this.fullname;
        }
    }
}

var test = obj.prop.getName;
// console.log(obj.prop.getName())
// console.log(test())

var binded = test.bind(obj)
console.log(binded())

//The test() function returns the value: Tom.