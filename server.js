var drone = require("./lib/server"),
 http = require("http");


var server = http.createServer(function(req, res) {
  require("fs").createReadStream(__dirname + "/index.html").pipe(res);
});

drone.listen(server);
server.listen(5555);
