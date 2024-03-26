import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import express from "express";
import { LoremIpsum } from "lorem-ipsum";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'public', 'index.html');
    const fileContent = await fs.readFile(filePath, 'utf8');
    res.send(fileContent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/lorem', (req, res) => {
   const qtdParagrafosInt = parseInt(req.query.qtdParagrafosInt);
 
   if (isNaN(qtdParagrafosInt) || qtdParagrafosInt < 1 || qtdParagrafosInt > 10) {
     res.status(400).send('Por favor, informe apenas valores somente entre 1 e 10');
     return;
   }

   const lorem = new LoremIpsum();
   const loremTexto = lorem.generateParagraphs(qtdParagrafosInt);
   const paragrafos = loremTexto.split('\n'); 

   res.json(paragrafos);
 });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});