"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var morgan_1 = require("morgan");
var validateEnv_1 = require("./src/utils/validateEnv");
var dotenv_1 = require("dotenv");
var fs_1 = require("fs");
var path_1 = require("path");
dotenv_1.default.config();
// dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
// require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
(0, validateEnv_1.default)();
var app = (0, express_1.default)();
app.use((0, morgan_1.default)('short'));
// Middleware para logs
var logPath = path_1.default.join(__dirname, process.env.LOG_PATH || 'logs');
if (!fs_1.default.existsSync(logPath)) {
    fs_1.default.mkdirSync(logPath);
}
function logFormatSimples(tokens, req, res) {
    return [
        new Date().toISOString(),
        req.url,
        req.method
    ].join(' - ');
}
function logFormatCompleto(tokens, req, res) {
    return [
        new Date().toISOString(),
        req.url,
        req.method,
        req.httpVersion,
        req.get('User-Agent')
    ].join(' - ');
}
var logStream = fs_1.default.createWriteStream(path_1.default.join(logPath, 'access.log'), { flags: 'a' });
app.use(function (req, res, next) {
    if (req.query.format === 'simples') {
        (0, morgan_1.default)(logFormatSimples, { stream: logStream })(req, res, next);
    }
    else if (req.query.format === 'completo') {
        (0, morgan_1.default)(logFormatCompleto, { stream: logStream })(req, res, next);
    }
    else {
        next();
    }
});
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send("Hello World! :)");
});
app.get('/sobre', function (req, res) {
    res.send("Sobre :)");
});
app.use(function (req, res) {
    res.statusCode = 404;
    res.send("404!");
});
app.listen(PORT, function () {
    console.log("Express app iniciada na porta ".concat(PORT, ". :)"));
});
