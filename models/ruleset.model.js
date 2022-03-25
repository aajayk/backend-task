var mongoose = require("mongoose");

// create an schema
var rulesetSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  cashback: Number,
  redemptionLimit: Number,
});
rulesetModel = mongoose.model("ruleset", rulesetSchema);

module.exports = {
  saveRuleset: async function (inputData) {
    rulesetData = new rulesetModel(inputData);
    let savedRule = await rulesetData.save();
    return savedRule;
  },
  fetchRuleset: async function () {
    let ruleFetched = await rulesetModel.find({}).exec();
    return ruleFetched;
  },
};
