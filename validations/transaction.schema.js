const Joi = require("joi");

const createTransaction = Joi.object({
  id: Joi.number().required(),
  date: Joi.date().required(),
});

module.exports = {
  createTransaction,
};
