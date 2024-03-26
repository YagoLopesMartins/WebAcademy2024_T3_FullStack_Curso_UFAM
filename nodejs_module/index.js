const http = require('http')
const fs = require('fs');
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const utils = require('./utils');

const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3333;
// Recebe o diretorio quando o programa é executado ex.: $ node index.js ./diretorio/
const diretorio = process.argv[2];

const server = http.createServer(function(req, res) {

    const reqUrl = url.parse(req.url, true);
    const pathname = reqUrl.pathname;

    if(pathname === '/'){
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
    }else {
        const nomeArquivo = pathname; 
        const caminhoArquivo = path.join(diretorio, nomeArquivo);

        console.error('Nome arquivo:', nomeArquivo);
        console.error('Path arquivo:', caminhoArquivo);
        
        fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
          if (err) {
            console.error('Erro ao ler arquivo:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erro ao ler arquivo');
            return;
          }
    
          const voltarLink = '<a href="/">Voltar</a>';
          const conteudo = `${voltarLink}<pre>${data}</pre>`;
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(conteudo);
        });
     }
});

server.listen(PORT);

