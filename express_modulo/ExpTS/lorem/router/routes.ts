const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
 res.send('Página principal do site');
});

router.get('/lorem/:num', (req, res) => {
 res.send('Página sobre');
});

module.exports = router;