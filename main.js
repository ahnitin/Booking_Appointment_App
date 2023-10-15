const express = require("express");
const app = express();
const path = require("path");
const Parser = require("body-parser");
const UserData = require("./models/user");
const sequelize = require("./database/connetor");
const cors = require("cors")

app.use(Parser.urlencoded({extended: false}));
app.use(cors());
app.use("/user",(req, res, next)=>{

    res.sendFile(path.join(__dirname,"index.html"));
});

app.use("/product",(req,res,next)=>{
    const username = req.body.username;
    const emailid = req.body.emailid;
    const phone = req.body.phone;
    console.log(username,emailid,phone)
    UserData.create({username: username, emailid:emailid, phone: phone})
    .then((data)=>{
    //res.status(201).json({newuserDetails: data});
    res.redirect("/add-product")
  })
  .catch(err=>console.log(err));
})

app.use("/",(req,res,next)=>{
    res.status(404).send("<h1>PAGE NOT FOUND<h1>")
})

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });

