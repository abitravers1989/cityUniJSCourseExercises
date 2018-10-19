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

//The test() function returns the value: Tom.
var test = obj.prop.getName;
var binded = test.bind(obj.prop)
console.log(binded())
//or 
var test1a = obj.prop.getName.bind(obj.prop)
console.log(test1a());

//A new function is created as a copy of getName (call it test2) which will return the value: Jane.
var test2 = obj.prop.getName.bind(obj)
console.log(test2())