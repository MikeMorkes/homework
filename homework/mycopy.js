var fs = require('fs')

var dataFeed = process.argv[3];
var fileName = process.argv[2];

console.log("About to Read File");

fs.readFile(dataFeed, function(err, data) {
    if (err) {
        console.log("Unable to read file.");
    } else {
        console.log("writing to file");
        fs.appendFile(fileName, "\r\n" + data.toString(), writeFileCallback);
    }
});



function writeFileCallback(err) {
  if (err) {
    throw err
  } else {
    console.log("we wrote our file!")
  }
}