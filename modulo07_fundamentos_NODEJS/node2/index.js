import http from "http";
import url from "url";
import path from "path";
import fs from "fs";
// Outros modulos nativos do nodejs: os, sys, tty, cluster, process, timers e util
require('dotenv').config();
import {createLink} from "./utils.js";

const PORT = process.env.PORT;

// Recebe o diretorio quando o programa é executado ex.: $ node index.js ./diretorio/
const diretorio = process.argv[2];

const server = http.createServer(function(req, res) {

    const reqUrl = url.parse(req.url, true);
    const pathname = reqUrl.pathname;

    console.log(`reqUrl: ${reqUrl}`)
    console.log(`pathname: ${pathname}`)

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
                    res.write(`${createLink(arquivo)}`);
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

            const voltarLink = '<a href="/">Voltar</a>';
            const conteudoDoArquivoAposLido = `${voltarLink}<pre>${data}</pre>`;

            if (err) {
                console.error('Erro ao ler arquivo:', err);
                // res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`Erro ao ler arquivo <br><br>  ${voltarLink}`);
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(conteudoDoArquivoAposLido);
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});