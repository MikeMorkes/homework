var fs = require('fs');

console.log("About to Read File");

var dataFeed = process.argv[2];

<<<<<<< HEAD
fs.readFile(dataFeed, function(err, data) {
=======
fs.readFile(dataFeed, readFileCallback);

function readFileCallback (err, data) {
>>>>>>> e14037c2b61826e53fd357312482b61bf929e34b
    if (err) {
        console.log("Unable to read file.");
    } else {
        console.log("File Contents:");
        console.log(data.toString());
    }
<<<<<<< HEAD
});
=======
};
>>>>>>> e14037c2b61826e53fd357312482b61bf929e34b

console.log("Called fs.readFile()\n");