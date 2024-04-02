import express, {Request, Response} from "express";
import morgan from "morgan";
import validateEnv from "./src/utils/validateEnv";
import dotenv from "dotenv";
import fs from 'fs';
import path from 'path';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
validateEnv();

const app = express()

app.use(morgan('short'));

// Middleware para logs
const logPath = path.join(__dirname, process.env.LOG_PATH || 'logs');
if (!fs.existsSync(logPath)) {
  fs.mkdirSync(logPath);
}

function logFormatSimples(tokens: morgan.TokenIndexer, req: Request, res: Response): string {
    return [
      new Date().toISOString(),
      req.url,
      req.method
    ].join(' - ');
}

function logFormatCompleto(tokens: morgan.TokenIndexer, req: Request, res: Response): string {
    return [
      new Date().toISOString(),
      req.url,
      req.method,
      req.httpVersion,
      req.get('User-Agent')
    ].join(' - ');
}

const logStream = fs.createWriteStream(path.join(logPath, 'access.log'), { flags: 'a' });
  
app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.query.format === 'simples') {
      morgan(logFormatSimples, { stream: logStream })(req, res, next);
    } else if (req.query.format === 'completo') {
      morgan(logFormatCompleto, { stream: logStream })(req, res, next);
    } else {
      next();
    }
});

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World! :)")
})

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}. :)`)
})