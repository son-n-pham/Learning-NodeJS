// // Import module global module http
// const http = require('http');

/////////////////////////////////////////////////////
// Create http server

// First way
// function rqListener(request, response) {}
// http.createServer(rqListener);

// Second way
// http.createServer(function (request, response) {});

// Third way
// const server = http.createServer((request, response) => {
//   // Check request info
//   console.log(request.url, request.method, request.headers);

//   // Set header
//   response.setHeader('Content-Type', 'text/html');
//   response.write('<html>');
//   response.write('<head><title>My First Page</title></head>');
//   response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//   response.write('</html>');
//   response.end();

//   // Hard exit when there is a request fired by web browser
//   // process.exit();
// });

// // Set server to continuously listen to request
// // When going to browser localhost:3000, we will see
// // request info from console.log
// server.listen(3000);

//////////////////////////////////////////////////////////////////
// More functional server
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  // Give the input form when the request is "/"
  if (url === '/') {
    response.write('<html>');
    response.write('<head><title>Enter Message</title></head>');
    response.write(
      `<body>
				<form action="/message" method="POST">
					<input type="text" name="message">
					<button type="submit">Send</button>
				</form>
			</body>`
    );
    response.write('</html>');
    return response.end();
  }

  // Matching the condition above when submitting the form
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    // Writing the response header
    response.statusCode = 302;
    response.setHeader('Location', '/');
    return response.end();
  }

  // Set header
  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>My First Page</title></head>');
  response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  response.write('</html>');
  response.end();

  // Hard exit when there is a request fired by web browser
  // process.exit();
});

// Set server to continuously listen to request
// When going to browser localhost:3000, we will see
// request info from console.log
server.listen(3000);
