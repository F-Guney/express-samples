const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const formRouter = require("./routes/form");
const usersRouter = require("./routes/users");

const app = express();
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/form", formRouter.routes);
app.use("/users", usersRouter.routes);

app.use("/", (req, res) => {
  res.status(404).render("404", {
    title: "Error 404 - Page Not Found!",
  });
});

app.listen(3000);
