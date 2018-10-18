var fullname = "john";

var obj = {
    fullname: 'jane',
    //ss: console.log(fullname),
    prop: {
        fullname: "tom",
        getName: function () {
            return this.fullname;
        }
    }
}

var test = obj.prop.getName;

//console.log(obj.prop.ss)
//this is undefined at the first console.log so there is no fullname. it is not picking up john
console.log(obj.prop.getName())
console.log(test())