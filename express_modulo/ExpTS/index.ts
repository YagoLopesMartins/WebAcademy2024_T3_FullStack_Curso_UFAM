import express from "express";
import {Request, Response} from "express";
import validateEnv from "./src/utils/validateEnv";
import dotenv from "dotenv";
import { engine } from 'express-handlebars';
const path = require('path')
import router from './src/routes/router';

import sass from 'node-sass-middleware';


const app = express();
app.use(router);

app.use('/img', [ 
  express.static(`${__dirname}/public/img`),
  express.static(`${__dirname}/public/img2`)
]);

app.use('/css', express.static(`${__dirname}/public/css`));

app.use('/js', [ 
  express.static(`${__dirname}/public/js`),
  express.static(`${__dirname}/public/node_modules/bootstrap/dist/js/`)
]);

app.use(sass({
  src: `${__dirname}/public/scss`,
  dest: `${__dirname}/public/css`,
  outputStyle: "compressed",
  prefix: "/css", 
}));

// dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
validateEnv();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);
app.engine("handlebars", engine({
  helpers: require(`${__dirname}/views/helpers/helpers.ts`),
  layoutsDir: `${__dirname}/views/layouts/`
  // defaultLayout: 'main'
}));

const PORT = process.env.PORT || 3000;

app.use((req, res) => {
  res.statusCode = 404;
  res.send("404!");
})

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}. :)`)
})