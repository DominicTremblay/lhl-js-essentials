// Setup basic express server
const express = require('express');
const app = express();
const server = require('http').createServer(app);

// This is how we tell our web server where to find the files to serve
app.use(express.static('public'));

const port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

console.log('everything should be running now!');
