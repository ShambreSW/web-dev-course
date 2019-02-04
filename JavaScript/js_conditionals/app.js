//Solution video uses prompt specifically.  I figured I'd need this, but it didn't say how they wanted to see it done, so I was just working in this file and refreshing the page after using different arguments in the funtion call.  It looks like I way overcomplicated it by assuming I had to use if else statements.  The solution just has 4 if statements.

var age = Number(prompt("Please enter your age"));

function yourAgeSaysThis(age) {
  if (age > 0 && age%2 == 1) {
    console.log("Your age is odd");
  }

  if (age % Math.sqrt(age) === 0) {
  console.log("Perfect square!");
  }

  if (age < 0) {
    console.log("There must be an error.  Please enter a number greater than 0.");
  }

  else if (age < 18) {

    console.log("Sorry, you are not old enough to enter the venue");
  }

  else if (age == 21) {

    console.log("Happy 21st birthday!!");
  }

  else if (age < 21) {

    console.log("You can enter, but cannot drink");
  }

  else {

    console.log("Come on in.  ");
  }
}

yourAgeSaysThis(age);
