
const func = () => {
    if (x = undefined) {
        console.log(x)
    }
    var x = 3;
}

func()

// the parser compiles the code by putting variables at the top as undefined 
// then it defines the functions
// then it assigns the variables