// create two random numbers between 1 and 1000 (1000 exclusive)
// if the second number is greater than the first, print (i.e console.log):
// Hey! <second number> is greater than <first number>.
// if the first number is even, print:
// <first number> is an even number!
// if the second number is odd print:
// <second number> is an odd number!
// if the first number is greater than your age print:
// you are older than me and I should respect you.
// otherwise if the first number is the same as your age print:
// what are the odds!
// otherwise print:
// you still have so much to learn.

function randomNum() {
  return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
}

var firstNum = randomNum();
var secondNum = randomNum();
var age = 44;

console.log("The first number is " + firstNum);
console.log("The second number is " + secondNum);

if (secondNum > firstNum) {
  console.log("Hey! " + secondNum + " is greater than " + firstNum + ".");
} else if (firstNum % 2 != 1) {
  console.log(firstNum + " is an even number!");
} else if (secondNum % 2 == 1) {
  console.log(secondNum + " is an odd number!");
}

if (firstNum > age) {
  console.log("You are older than me, I should respect you!");
} else if (firstNum == age) {
  console.log("What are the odds!");
} else {
  console.log("You still have much to learn.");
}
