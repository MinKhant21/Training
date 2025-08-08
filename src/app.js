const express = require("express");
const morgan = require("morgan");
const router = require("./modules");
const app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);




app.use(express.json());
app.use(router);

module.exports = app;
