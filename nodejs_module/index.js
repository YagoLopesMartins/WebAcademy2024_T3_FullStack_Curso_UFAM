const http = require('http')
const fs = require('fs');
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const utils = require('./utils');

const PORT = process.env.PORT || 3333;
// Recebe o diretorio quando o programa é executado ex.: $ node index.js ./diretorio/
const diretorio = process.argv[2];

const server = http.createServer(function(req, res) {
   
    // Ler diretorio e exibe os arquivos contidos no mesmo
    fs.readdir(diretorio, (err, arquivos) => {
        if (err){
            console.log('Erro: ', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erro ao ler diretório');
            return;
        }else{
            res.writeHead(200, { "Content-Type":"text/html;charset=utf-8"});
            arquivos.forEach(arquivo =>{
                console.log(`${arquivo}<br>`);
                res.write(`${utils.createLink(arquivo)}`);
            });
            res.end();
        }
    });
});

server.listen(PORT);

