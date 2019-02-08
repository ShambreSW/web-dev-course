console.log("1.  Print all numbers bewteen -10 and 19");
//WHILE LOOP WAY TO DO IT:
// var num = -10;
//
// while (num <= 19) {
//   console.log(num);
//   num++;
// }

//FOR LOOP WAY TO DO IT:
for (var i = -10; i < 20; i++) {
  console.log(i);
}


console.log("2.  Print all even numbers between 10 and 40");
//WHILE LOOP WAY TO DO IT:
// num = 10;
//
// while (num <= 40) {
//   console.log(num);
//   num += 2;
// }

// Another way to accomplish #2.  This is less performant, but better in cases where we start with an odd number because it actually evaluates each number, instead of just skipping over every other.
// while (num <= 40) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

//FOR LOOP WAY TO DO IT:
for (var i = 10; i <= 40; i++) {
  if(i % 2 === 0){
  console.log(i);
  }
}

//Or

console.log("3.  Print all odd numbers between 300 and 333");
//WHILE LOOP WAY TO DO IT:
// num = 300;
//
// while (num < 334) {
//   if (num % 2 === 1) {
//     console.log(num);
//   }
//   num++;
// }


//FOR LOOP WAY TO DO IT:
for (var i = 300; i <= 333; i++) {
  if(i % 2 !== 0) {
    console.log(i);
  }
}


console.log("4.  Print all numbers divisible by 5 and 3 between 5 and 50");
//WHILE LOOP WAY TO DO IT:
// num = 5;
//
// while (num < 51) {
//   if (num % 5 === 0 && num % 3 === 0) {
//     console.log(num);
//   }
//   num++; //Colt usually uses num += 1 here instead.  Which is better and why?
// }

//FOR LOOP WAY TO DO IT:
for (var i = 5; i <= 51; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
      console.log(i);
    }
}
