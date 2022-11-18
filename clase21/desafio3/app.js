const express = require("express");
// const errorMiddleware = require("./middleware/error.middleware");
const router = require("./routers/index");
const app = express();
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Routes
app.use("/api", router);

module.exports = app;
