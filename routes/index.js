let routers = {};
const express = require("express");
const loadRoutes = express();

routers.signup = require("./user-router");

loadRoutes.use("/api/ecomm", routers.signup);

module.exports = loadRoutes;
