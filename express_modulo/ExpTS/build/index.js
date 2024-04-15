"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_handlebars_1 = require("express-handlebars");
const router_1 = __importDefault(require("./routes/router"));
const node_sass_middleware_1 = __importDefault(require("node-sass-middleware"));
const morgan_1 = __importDefault(require("morgan"));
// dotenv.config();
dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV}` });
const app = (0, express_1.default)();
(0, validateEnv_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(router_1.default);
app.use(express_1.default.json());
app.use((0, morgan_1.default)("combined"));
// app.use(logger('completo'));
app.use('/img', [
    express_1.default.static(`${__dirname}/../public/img`),
    express_1.default.static(`${__dirname}/../public/img2`)
]);
app.use('/html', express_1.default.static(`${__dirname}/../public/html`));
app.use('/css', express_1.default.static(`${__dirname}/../public/css`));
app.use('/js', [
    express_1.default.static(`${__dirname}/../public/js`),
    express_1.default.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
]);
app.use((0, node_sass_middleware_1.default)({
    src: `${__dirname}/public/scss`,
    dest: `${__dirname}/public/css`,
    outputStyle: "compressed",
    prefix: "/css",
}));
// Config - Template Engine
app.engine("handlebars", (0, express_handlebars_1.engine)({
    defaultLayout: 'main',
    helpers: require(`${__dirname}/../views/helpers/helpers.ts`),
    layoutsDir: `${__dirname}/../views/layouts/`
}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);
const PORT = process.env.PORT || 3000;
app.use((req, res) => {
    res.statusCode = 404;
    res.status(404).send("Erro 404!");
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}. :)`);
});
