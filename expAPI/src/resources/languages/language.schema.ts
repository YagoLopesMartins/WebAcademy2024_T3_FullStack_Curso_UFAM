import Joi from "joi";

export const languageSchema = Joi.object().keys({
    lang: Joi.valid("pt-BR", "en-US").required()
});

const language = {
    lang: "en-UK",
};

const result = languageSchema.validate(language);
console.log(result);