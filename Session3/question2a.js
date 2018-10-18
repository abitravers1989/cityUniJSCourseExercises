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

//console.log(obj.prop.ss)
//this is undefined at the first console.log so there is no fullname. it is not picking up john
console.log(obj.prop.getName())
//this is undefined because when it is saved to test this is the node env 
//or window in the case of front end
console.log(test())

