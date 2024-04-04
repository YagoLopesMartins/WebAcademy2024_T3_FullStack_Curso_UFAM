"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router_1 = require("./../router/router");
var app = (0, express_1.default)();
app.use(router_1.default);
app.listen(3000, function () {
    console.log("Express app iniciada na porta 3000.");
});
