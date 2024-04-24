import Joi from "joi";

export const produtoSchema = Joi.object().keys({
    nome: Joi.string().min(3).max(50).required(),
    preco: Joi.number().positive().required(),
    estoque: Joi.number().min(0).integer().required(),
});

const produto = {
    nome: "teste",
    preco: 4.5,
    estoque: 10,
};

const result = produtoSchema.validate(produto);
console.log(result);