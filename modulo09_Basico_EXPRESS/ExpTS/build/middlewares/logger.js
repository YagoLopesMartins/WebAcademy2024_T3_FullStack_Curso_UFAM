"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
async function saveLogFile(filename, logs) {
    const logsPath = process.env.LOG_PATH;
    try {
        await promises_1.default.access(logsPath);
    }
    catch (err) {
        console.log(err);
        await promises_1.default.mkdir(logsPath);
    }
    try {
        await promises_1.default.appendFile(`${logsPath}/${filename}`, logs);
    }
    catch (err) {
        if (err)
            throw new Error(err.toString());
    }
}
function logger(formato) {
    if (formato === "simples") {
        return async (req, res, next) => {
            const log = `${new Date().toISOString()} ${req.url} ${req.method}\n`;
            await saveLogFile(`${formato}.log`, log);
            next();
        };
    }
    else if (formato === "completo") {
        return async (req, res, next) => {
            const log = `${new Date().toISOString()} ${req.url} ${req.method} ${req.httpVersion} ${req.get("User-Agent")}\n`;
            await saveLogFile(`${formato}.log`, log);
            next();
        };
    }
    else {
        return (req, res, next) => {
            console.log("Formato invalido");
            next();
        };
    }
}
exports.default = logger;
