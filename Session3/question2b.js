var fullname = "john";

var obj = {
    fullname: 'jane',
    prop: {
        fullname: "tom",
        getName: function () {
            //console.log(this)
            return this.fullname;
        }
    }
}

var test = obj.prop.getName;

var binded = test.bind(obj.prop)
console.log(binded())

//The test() function returns the value: Tom.