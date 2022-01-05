//core imports
const fs = require("fs");
const path = require("path");

//Third party imports
const express = require("express");
const bodyParser = require("body-parser");
const showdown = require("showdown");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

converter = new showdown.Converter();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/convert", (req, res, next) => {
  if (typeof req.body.content == "undefined" || req.body.content == null) {
    res.json(["error", "No data found"]);
  } else {
    text = req.body.content;
    html = converter.makeHtml(text);
    res.json(["markdown", html]);
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
