const Joi = require("joi");

const createRuleset = Joi.object({
  cashback: Joi.number().required(),
  redemptionLimit: Joi.number().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
});

module.exports = {
  createRuleset,
};
