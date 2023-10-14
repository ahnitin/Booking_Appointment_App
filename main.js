const express = require("express");
const app = express();
const path = require("path");
const Parser = require("body-parser");
const db = require("mysql2");
const Sequelize = require('sequelize');

const sequelize = new Sequelize('happy_world', 'root', 'good@123', {
  dialect: 'mysql',
  host: 'localhost'
});
const UserData = sequelize.define('userdata', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    username: {
    type: Sequelize.STRING,
    allowNull: false
    },
    emailid: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

var fullstack = document.getElementById(fullstack)
fullstack.onclick =(event) =>{
    event.preventDefault();
    let name = name.value;
    let email = email.value;

    let obj ={
        name,
        email
    }
    UserData.
}


app.use(Parser.urlencoded({extended: false}));

app.use("/add-product",(req, res, next)=>{

    res.sendFile(path.join(__dirname,"index.html"));
});

app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/add-product")
})
app.use("/",(req,res,next)=>{
    res.status(404).send("<h1>PAGE NOT FOUND<h1>")
})
app.listen(4000);
let full = document.getElementById("full");
{
    event.preventDefault();
    let name = name.value;
    let email = email.value;

    let obj ={
        name,
        email
    }
    console.log(obj)
}