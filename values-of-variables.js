// look up how to get parameters from the command line with nodejs. Use that to
// give values to these variables
var filePath = process.argv[1];
var fileName = filePath.replace(/.*\//, "");

console.log(fileName);

var pi = +(process.argv[2]);
pi = Math.PI;
var radius = +(process.argv[3]);


var area = pi * Math.pow(radius * 2); // fill in the equation utilizing the above variables
console.log(area)
var circumference = 2 * pi * radius;// fill in the equation utilizing the above variables
console.log(circumference)
