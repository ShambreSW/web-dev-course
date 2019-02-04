
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

yourAgeSaysThis(21);
