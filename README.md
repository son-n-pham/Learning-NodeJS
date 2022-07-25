# Learning-NodeJS

## Basics:

### First server

```node
// Import module global module http
const http = require('http');

/////////////////////////////////////////////////////
// Create http server

// First way
// function rqListener(request, response) {}
// http.createServer(rqListener);

// Second way
// http.createServer(function (request, response) {});

// Third way
const server = http.createServer((request, response) => {
  console.log(request);

  // Hard exit when there is a request fired by web browser
  // process.exit();
});

// Set server to continuously listen to request
// When going to browser localhost:3000, we will see
// request info from console.log
server.listen(3000);
```


