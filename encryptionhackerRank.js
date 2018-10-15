let sampleInput = "haveaniceday";
let sampleInputTwo = "feedthedog";

function encryption(string) {
    //gets rid of the whitespaces
    //find the length of the string
    //finds the square root of the length of the string
    //splits the square root number into two numbers 
    //7.7887 if the number is a float it 7 and 8

   // 7.87  row nr = 7 and the coloum =8
 // so 8 acrross .. 7 down 
 
 //next

 //takes the 1, 2nd, 3rd ..nth (as long as the column)
 // then adds white space then moves onto the next word.

 let length = string.length;
 let squareRoot = Math.sqrt(length);

 let rowLength = Math.floor(squareRoot);
 let coloumLength = Math.ceil(squareRoot);

 console.log(rowLength)
 console.log(coloumLength)
 
 
}

console.log(encryption(sampleInput));