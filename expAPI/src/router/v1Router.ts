import express from "express";
import produtoRouter from "../resources/produto/produto.router";
import languageRouter from "../resources/languages/language.router";

const router = express.Router();

router.use('/produto', produtoRouter);
router.use('/language', languageRouter);

export default router;

