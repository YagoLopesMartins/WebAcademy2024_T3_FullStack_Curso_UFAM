const express = require('express');
const lorem = require('lorem-ipsum');
const routes  = require('./router/routes');

const app = express();

const PORT = 3000;

app.use('/', routes);

app.listen(PORT, () => {
 console.log(`Express app iniciada na porta ${PORT}.`);
});