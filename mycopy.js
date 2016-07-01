var fs = require('fs')

var dataFeed = process.argv[3];
var fileName = process.argv[2];

console.log("About to Read File");

fs.readFile(dataFeed, function(err, data) {
    if (err) {
        console.log("Unable to read file.");
    } else {
        console.log("writing to file");
<<<<<<< HEAD
        fs.appendFile(fileName, " " + data.toString(), writeFileCallback);
=======
        fs.appendFile(fileName, "\r\n" + data.toString(), writeFileCallback);
>>>>>>> e14037c2b61826e53fd357312482b61bf929e34b
    }
});



function writeFileCallback(err) {
  if (err) {
    throw err
  } else {
    console.log("we wrote our file!")
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> e14037c2b61826e53fd357312482b61bf929e34b
