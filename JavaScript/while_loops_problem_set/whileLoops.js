console.log("1.  Print all numbers bewteen -10 and 19");
var num = -10;

while (num <= 19) {
  console.log(num);
  num++;
}
console.log("2.  Print all even numbers between 10 and 40");
num = 10;

while (num <= 40) {
  console.log(num);
  num += 2;
}

// Another way to accomplish #2.  This is less performant, but better in cases where we start with an odd number because it actually evaluates each number, instead of just skipping over every other.
// while (num <= 40) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

console.log("3.  Print all odd numbers between 300 and 333");
num = 300;

while (num < 334) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num++;
}
console.log("4.  Print all numbers divisible by 5 and 3 between 5 and 50");
num = 5;

while (num < 51) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++; //Colt usually uses num += 1 here instead.  Which is better and why?
}
