const express = require("express");
const configMiddleare = require("../config/middleware.js");

const server = express();

configMiddleare(server);

module.exports = server;
