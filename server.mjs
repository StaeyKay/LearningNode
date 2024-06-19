import {createServer} from 'node:http';

// define request handler
// function requestHandler(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('We have an HTTP Server');
// }

// create HTTP server
// create an anonymous function for createServer
const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>We have an HTTP Server</h1>');
});

// listen for incoming request
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
}); 

// normal function vs arrow function
function handleRequest () {}

const handleRequest = () => {}
