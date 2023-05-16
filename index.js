require("express-async-errors");
require("dotenv").config();
const express = require("express");
const connectDB = require("./connections/mongo_db");
const morgan = require("morgan");
const { notFound, methodChecker, errorHandler } = require("./middlewares");

const PORT = process.env.PORT || 8081;

// initialize an express app
const app = express();

// middlewares
app.use(morgan("tiny")); // log request details
app.use(methodChecker); // checks if the request method is supported
app.use(express.urlencoded({ extended: true })); // parse urlencoded data in request
app.use(express.json()); // parse json data in request

// other middlewares
app.all("*", notFound);
app.use(errorHandler);

/**
 * @summary // connects the server to mongodb and the starts the server on the given port
 */
connectDB(() =>
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  })
);
