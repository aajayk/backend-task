const rulesetModel = require("../models/ruleset.model");

async function postRuleset(req, res, next) {
  try {
    let rules = req.body;
    let rulesetSaved = await rulesetModel.saveRuleset(rules);
    console.log(rulesetSaved);
    res.status(201).send({ status: 201, message: "created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, error: error });
  }
}

module.exports = {
  postRuleset,
};
