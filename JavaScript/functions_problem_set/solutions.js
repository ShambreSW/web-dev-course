//isEven
// function isEven(num){
//     //return true if even
//     if ((num % 2) === 0) {
//         return true;
//     } 
    //return false otherwise
//     else {
//         return false;
//     }
// }

//Video solution - much more elegant and less wasteful:
function isEven(num){
    return num % 2 === 0;
}

//factorial
// function factorial(num){
    //define a result variable
    // var fact = num;

    //calculate factorial and store result in variable
    // for (let index = num - 1; index > 0; index--) {
    //     fact = fact * index;
    // }

    //return a result variable
    // return fact;

// }   //My original solution didn't actually work.  I didn't realize that factorial(0) should equal 1.  Mine returned the value of zero.  So it wasn't fully implemented per requirements.  :(  I could have added an if statement to line 20 like below:

    // if(num === 0){
    //     return 1;
    // }

// But Colt's preferred solution is, because it's simpler and doens't necessitate the if statement:
function factorial(num) {
    var result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function kebabToSnake(str){
    //replace all dashes with underscores by Googling generally - "Javascript replace character string" and looking for closest match.  Then steal some code and try to modify it.
    var newString = str.replace(/-/g, "_");
    //return new string
    return newString;
}

//My solution matched that of the video.  :)


