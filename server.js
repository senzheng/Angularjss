var connect = require('connect');
connect.createServer(connect.static("../angularjss")).listen(5000);
console.log('listening on port 5000');