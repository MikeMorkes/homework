var fs = require('fs');

console.log("About to Read File");

var dataFeed = process.argv[2];

fs.readFile(dataFeed, function(err, data) {
    if (err) {
        console.log("Unable to read file.");
    } else {
        console.log("File Contents:");
        console.log(data.toString());
    }
});

console.log("Called fs.readFile()\n");