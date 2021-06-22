const express = require("express");
const { create, view } = require("../controllers/post");
const router = express.Router();

router.post("/post", create);
router.get("/posts", view);

module.exports = router;
