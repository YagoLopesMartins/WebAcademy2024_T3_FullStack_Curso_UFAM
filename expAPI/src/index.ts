import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import setLangCookie from './middlewares/setLangCookie';


import router from "./router";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser());
app.use(setLangCookie);

const PORT = process.env.PORT ?? 3000;

app.use(router);

app.use((req, res, next) => {
    console.log(req.cookies);
    res.cookie('lang', 'pt-BR');
    next();
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})



