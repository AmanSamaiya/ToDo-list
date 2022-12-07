const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("Public"));

const items = ["buy food", "cook food", "eat food"];
const workItems = [];


app.get("/", function(req, res) {
  let day = date();
  res.render("lists", {listTitle: day,newListItems: items});
});


app.post("/", function(req, res) {
  let item = req.body.newItem;
  if (req.body.lists === 'Work List') {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("lists", {listTitle: "Work List",newListItems: workItems});
});

app.listen(3000, function(req, res) {
  console.log("Listening on port 3000");
});
