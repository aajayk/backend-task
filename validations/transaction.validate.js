const Joi = require("joi");
const transactionSchema = require("./transaction.schema");

const validateTransaction = (req, res, next) => {
  console.log("schema validate called");
  const { error, value } = transactionSchema.createTransaction.validate(
    req.body
  );
  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return res.status(400).send({ status: 400, message: errorMessage });
  }
  Object.assign(req, value);
  return next();
};

module.exports = validateTransaction;
