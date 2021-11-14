const http = require('http');

const hostname = '0.0.0.0';
const port = 8000;

function httpGet(theUrl) {
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        initialArray = xhr.response;
    }, false);
    xhr.open('GET', "http://192.168.1.5:3000");
    return xhr.send();

}

const server = http.createServer((request, response) => {
    console.log("Request to server 1 coming from: " + request.socket.remoteAddress + " Port: ", request.socket.port)
    response.writeHead(200, { 'Content-Type': 'text/html' });
    const HEAD = request.headers;
    console.log(httpGet("http://192.168.1.5:3000"))
    //
    response.end();
});

server.listen(port, hostname, () => {
    console.log('Server is live @ ' + port);
});
