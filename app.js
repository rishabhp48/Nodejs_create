const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const router = require("./routes/post");
const cors = require("cors");
//
app.use(morgan("dev"));
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);
//Db Connect
mongoose
  .connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(chalk.bgGreenBright.black("DB Connection successful"));
  })
  .catch((err) => {
    console.log(chalk.bgRedBright(err));
  });

//listen
app.listen(process.env.PORT, () => {
  console.log(
    chalk.bgGreenBright.black(`Server is runnning at ${process.env.PORT}`)
  );
});
