const express=require("express");
const app=express();

const path=require("path");

app.set("views",path.join(__dirname,"/views"));

const port=8080;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");//isse express views folder ke ander home ko dhunde ga
    
});

app.get("/home",(req,res)=>{
    res.send("Yo Ho");
});

app.get("/dice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1;
    res.render("dice",{num});
});

app.listen(port,()=>{
    console.log(`listeniong pn port ${port}`);
});