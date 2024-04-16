import { Router } from "express";
import produtoRouter from "../resources/produto/produto.router";

const router = Router();

router.use("/produtos", produtoRouter);

