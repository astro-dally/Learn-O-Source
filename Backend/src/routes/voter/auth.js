const express = require("express");
const voterAuthRoutes = express.Router();

const { login, signup } = require("../../controllers/auth");

voterAuthRoutes.post("/login", login);
voterAuthRoutes.post("/signup", signup);

module.exports = voterAuthRoutes;
