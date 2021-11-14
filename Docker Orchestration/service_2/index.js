const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((request, response) => {
    console.log("Request to server 2 coming from: " + request.socket.remoteAddress + " Port: ", request.socket.port)

    response.writeHead(200, { 'Content-Type': 'text/html' });
    const HEAD = request.headers;
    response.write('Response from server 2');
    
    response.end();
});

server.listen(port, hostname, () => {
    console.log('Server is live @ ' + port);
});
