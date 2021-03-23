//jshint esversion: 6

//npm packages
const express = require ("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

//creation of the express app
const app = express();

const items = [];
const workItems = [];
//Sets the ejs engine
app.set('view engine', 'ejs');
//decleration of usage of the body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

//GET REQUEST
app.get("/", function (req, res){
   let day = date.getDate();
  //Kind of day and items on list rendering
    res.render("list", {listTitle: day , newListItems: items});
});

//POST REQUEST
app.post("/", function (req,res){
  //item variable for getting the user input
  let item = req.body.newItem;

  if(req.body.list === "Work"){
    //pushes the user inputed item into the array work items
    workItems.push(item);
    //redirects us to the work page list
    res.redirect("/work");
  }else {
    //pushes the user inputed item into the array items
    items.push(item);
    //redirects us to the root directory
    res.redirect("/");
  }
});


app.get("/work", function (req, res){
  res.render("list", {listTitle: "Work List", newListItems:workItems });
});

app.post("/work", function (req, res){
  let item = req.body.newItem;
  workItems.push(item);

  res.redirect("/work");
});

//listen REQUEST
app.listen(3000, function(){
  console.log("Server is up and running \nPort: 3000")
});

app.get("/about", function (req, res){
  res.render("about");
})
