import express, {Request, Response} from "express";
import validateEnv from "./src/utils/validateEnv";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
validateEnv();

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World! :)")
})

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}. :)`)
})