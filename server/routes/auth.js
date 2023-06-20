const express = require("express");
const mongoose = require("mongoose");
const authRouter = express.Router();

authRouter.get("/api/signup", (req, res) => {
  const { name, email, password } = req.body;
  
});

module.exports = authRouter;
