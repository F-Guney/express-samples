const express = require("express");
const data = require("./form");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("users", {
    title: "Users",
    users: data.users,
  });
});

module.exports.routes = router;
