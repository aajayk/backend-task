const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const db = require("./config/databaseConnection");

dotenv.config();
const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/", routes);

/** error handling for routes */
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not Found",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ status: 500, error: "Something went wrong!" });
});

let port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = app;
