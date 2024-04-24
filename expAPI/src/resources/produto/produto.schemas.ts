import Joi from "joi";

export const produtoSchema = Joi.object().keys({
    nome: Joi.string().min(3).max(50).required(),
    preco: Joi.number().positive().required(),
    estoque: Joi.number().min(0).integer().required(),
});

const produto = {
    nome: "Motorola G6 ultra",
    preco: 2.500,
    estoque: 100,
};

const result = produtoSchema.validate(produto);
console.log(result);