const express = require('express');
const lorem = require('lorem-ipsum');
const router = express.Router();

router.get('/', (req, res) => {
 res.send('Página principal do site');
});

router.get('/lorem/:num', (req, res) => {
    const numero_paragrafos = req.params.num;
    console.log(numero_paragrafos);
 
    if (isNaN(numero_paragrafos) || numero_paragrafos < 1 || numero_paragrafos > 10) {
      res.status(400).send('Número deve ser 1 a 10');
      return;
    }
 
    const loremObjeto = new lorem.LoremIpsum();
    const loremTexts = loremObjeto.generateParagraphs(numero_paragrafos);
    const paragraphs = loremTexts.split('\n'); 
    console.log(paragraphs);

    res.send(paragraphs);

});

module.exports = router;