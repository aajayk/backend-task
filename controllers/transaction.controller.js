const transactionModel = require("../models/transaction.model");

async function postTransaction(req, res, next) {
  let transactionInput = req.body;
  transactionInput._id = transactionInput.id;
  try {
    let result = await transactionModel.saveTransaction(transactionInput);
    console.log(result);
    res.status(201).send({ status: 201, message: "created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, error: error });
  }
}

module.exports = {
  postTransaction,
};
