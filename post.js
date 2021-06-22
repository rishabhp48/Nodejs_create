const chalk = require("chalk");
const post = require("../models/post");

exports.create = (req, res) => {
  const { name, phoneno, email, industry, about } = req.body;

  switch (true) {
    case !name:
      return res.status(400).json({ message: "Name is required" });
      break;
    case !phoneno:
      return res.status(400).json({ message: "phoneno is required" });
      break;
    case !email:
      return alert("Email is not valid");
      break;
    case !industry:
      return res.status(400).json({ message: "industry is required" });
      break;
    case !about:
      return res.status(400).json({ message: "about is required" });
      break;
  }
  post.create({ name, phoneno, email, industry, about }, (err, data) => {
    if (!err) {
      res.json(data);
      console.log(chalk.bgGreenBright.black(data));
    } else {
      console.log(chalk.bgRedBright.black(err));
    }
  });
};

exports.view = (req, res) => {
  post.find({}, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
};
