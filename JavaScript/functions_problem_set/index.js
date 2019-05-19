function isEven(num){
    if (num % 2 = 0) {
        return true;
    } 
    return false;
}

function factorial(num){
    var fact = num;
    for (let index = num - 1; index > 0; index--) {
        fact = fact * index;
    }
    return fact;
}

function kebabToSnake(str){
    var newString = str.replace(/-/g, "_");
    return newString;
}
