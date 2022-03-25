const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction.controller");
const cashbackController = require("../controllers/cashback.controller");
const rulesetController = require("../controllers/ruleset.controller");

const validateTransaction = require("../validations/transaction.validate");
const validateRuleset = require("../validations/ruleset.validate");

router.post("/ruleset", validateRuleset, rulesetController.postRuleset);
router.post(
  "/transaction",
  validateTransaction,
  transactionController.postTransaction
);
router.get("/cashback", cashbackController.getCashback);

router.get("/", (req, res) => {
  res.status(200).send({
    message: "Root endpoint, please use below endpoints",
    validEndpoints: ["/cashback", "/transaction", "/ruleset"],
  });
});

module.exports = router;
