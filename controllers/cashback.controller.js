const rulesetModel = require("../models/ruleset.model");
const transactionModel = require("../models/transaction.model");

async function getCashback(req, res, next) {
  let rulesFetched = await rulesetModel.fetchRuleset();
  let transactionsFetched = await transactionModel.fetchTransaction();
  let result = calculateCashback(rulesFetched, transactionsFetched);
  res.send(result);
}

function calculateCashback(rules, transactions) {
  let result = [];
  for (const transaction of transactions) {
    const resObj = {
      transactionId: transaction.id,
      amount: 0.0,
    };
    let transTimestamp = new Date(transaction.date).getTime();
    for (const rule of rules) {
      let startTimestamp = new Date(rule.startDate).getTime();
      let endTimestamp = new Date(rule.endDate).getTime();
      if (
        transTimestamp >= startTimestamp &&
        transTimestamp <= endTimestamp &&
        rule.redemptionLimit > 0
      ) {
        resObj.amount = resObj.amount + parseFloat(rule.cashback);
        rule.redemptionLimit--;
      }
    }
    result.push(resObj);
  }
  return result;
}

module.exports = {
  getCashback,
};

/** 1. Fetch all the transaction IDs
 *  2. Fetch all the rules
 *  3. Apply cashback logic
 */
