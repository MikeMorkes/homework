var http =  require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    console.log(req.url);
    fs.readFile('index.html', function(err, data) {
        if (err) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("Unable to read file index.html\n");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data.toString());
        }
    });
});

server.listen(3000, '127.0.0.1');


// build a server that can serve files from the public directory

var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 8888;

http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);

  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");

