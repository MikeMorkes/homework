// loop through 1 to 100 (100 inclusive)
// if the number is divisible by 3, print fizz
// if the number is divisible by 5, print buzz
// if the number is divisible by 5 and 3 print fizz buzz

// note, you should only print once per number

for (var a = 1; a <= 100; a++) {

  if (a % 3 == 0 && a % 5 == 0) {
    console.log("fizz buzz");
  } else if (a % 5 == 0) {
    console.log("buzz");
  } else if (a % 3 == 0) {
    console.log("fizz");
  } else {
    console.log("no fizz buzz");
  }
}
