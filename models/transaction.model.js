var mongoose = require("mongoose");

// create an schema
var transactionSchema = new mongoose.Schema({
  date: Date,
  _id: Number,
});
transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = {
  saveTransaction: async function (inputData) {
    transactionData = new transactionModel(inputData);
    let savedTransaction = await transactionData.save();
    return savedTransaction;
  },
  fetchTransaction: async function () {
    let transactionFetched = await transactionModel.find({}).exec();
    return transactionFetched;
  },
};
