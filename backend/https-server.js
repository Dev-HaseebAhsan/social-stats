//required installed node modules for http and filesystem
var http = require('http');
var fs = require('fs');

//get certs later just dev server right now
var options = {
    key: null,
    cert: null
};

//assume that there is going to be a single page application.
http.createServer(options, (req, res) =>
    {
    res.writeHead(200);
    res.write("Successful Response; request url: " + req.url);
    res.end();
    }
).listen(8080);