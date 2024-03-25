const http = require('http')
const fs = require('fs');

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
                res.write(`${arquivo}<br>`);
            });
            res.end();
        }
    });
});

server.listen(3000);

