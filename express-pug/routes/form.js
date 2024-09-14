const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  res.render("form", {
    title: "Add User",
  });
});

router.post("/", (req, res, next) => {
  users.push({ name: req.body.name });
  res.redirect("/users");
});

module.exports.routes = router;
module.exports.users = users;
