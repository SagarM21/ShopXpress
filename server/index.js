const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const PORT = 3000;
dotenv.config();
const app = express();

app.use(authRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to db"))
  .catch((error) => console.log(`Some error ocurred ${error}`));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected to ${PORT}`);
});
