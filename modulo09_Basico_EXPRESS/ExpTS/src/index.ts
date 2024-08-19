import express from "express";
import {Request, Response} from "express";
import validateEnv from "./utils/validateEnv";
import dotenv from "dotenv";
import { engine } from 'express-handlebars';
import path from 'path';
import router from './routes/router';
import sass from 'node-sass-middleware';
import morgan from "morgan";
import logger from './middlewares/logger';

// dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const app = express();

validateEnv();

app.use(express.urlencoded({extended: false}));
app.use(router);
app.use(express.json());

app.use(morgan("combined"));
// app.use(logger("completo"));

// Config - Template Engine
app.engine("handlebars", engine({
  defaultLayout: 'main',
  helpers: require(`${__dirname}/views/helpers/helpers.ts`),
  layoutsDir: `${__dirname}/views/layouts/`
}));

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(sass({
  src: `${__dirname}/../public/scss`,
  dest: `${__dirname}/../public/css`,
  outputStyle: 'compressed',
  prefix: "/css", 
}));

app.use('/img', [ 
  express.static(`${__dirname}/../public/img`),
  express.static(`${__dirname}/../public/img2`)
]);

app.use('/html', express.static(`${__dirname}/../public/html`));
app.use('/css', express.static(`${__dirname}/../public/css`));

app.use('/js', [ 
  express.static(`${__dirname}/../public/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js`),
]);

const PORT = process.env.PORT || 3000;

app.use((req: Request, res: Response) => {
  res.statusCode = 404;
  res.status(404).send("Erro 404!");
})

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}. :)`)
})

