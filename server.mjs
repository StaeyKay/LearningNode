import { createServer } from 'node:http';
import { unlink, writeFile } from 'node:fs'

// define request handler
// function requestHandler(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('We have an HTTP Server');
// }

// create HTTP server
// create an anonymous function for createServer
const server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        // Create file
        writeFile('./abc.html', '<h1>Learning Node.js</h1>', (err) => {
            console.log(err);
            // Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>File added</h1>');
        });
    } else {
        // Delete file
        unlink('./index.html', () => {
            // Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>File deleted</h1>');
        });
    }
});

// listen for incoming request
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
});

// normal function vs arrow function
// function handleRequest() { }

const handleRequest = () => { }
