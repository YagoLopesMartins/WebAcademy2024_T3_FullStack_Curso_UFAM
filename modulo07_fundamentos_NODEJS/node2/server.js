const http = require('http');
require('dotenv').config();

const PORT = process.env.PORT ?? 3333;

const server = http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write("Instituto de Computação");
    res.end();
});

server.listen(PORT);