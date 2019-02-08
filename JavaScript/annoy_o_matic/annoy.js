// VERSION 1

// Commented out to make while loop so it runs more than once
// if (answer === "yes") {
//   alert("YAY! We made it!")
// } else {
//   var answer = prompt("Are we there yet?");
// }


//var answer = prompt("Are we there yet?");
//
// while (answer != "yes" && answer != "yeah") {
//   var answer = prompt("Are we there yet?");
// }
//
// alert("YAY! We made it!");

// VERSION 2
var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?");
}

alert("YAY! We made it!");
