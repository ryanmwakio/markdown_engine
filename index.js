//core imports
const fs = require("fs");
const path = require("path");

//Third party imports
const express = require("express");
const bodyParser = require("body-parser");
const showdown = require("showdown");
require("dotenv").config();
const uniqid = require("uniqid");

var app = express();
app.use(express.static(path.join(__dirname, "generated_html")));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

converter = new showdown.Converter();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  return res.render("index", { url: process.env.URL });
});

app.post("/convert", (req, res, next) => {
  if (typeof req.body.content == "undefined" || req.body.content == null) {
    console.error(["error", "No data found"]);
    return res.redirect("/");
  } else {
    text = req.body.content;
    html = converter.makeHtml(text);

    let filename = uniqid() + ".html";

    //create file
    let pathToFile = path.join(__dirname, "generated_html", filename);
    fs.writeFileSync(pathToFile, html);

    //download the html file
    res.download(pathToFile);
  }
});

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
