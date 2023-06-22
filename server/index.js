const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const PORT = 3000;
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to db"))
  .catch((error) => console.log(`Some error ocurred ${error}`));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected to ${PORT}`);
});
