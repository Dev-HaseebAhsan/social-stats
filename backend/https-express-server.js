//Imports Express
const express = require('express');
const app = express();
const port = 3001;

//Import osmosis, the instance is const osmosis
const osmosis = require('osmosis');

//index endpoint
app.get("/", function(req, res){
    res.send("imagine getting this index page.");
});

app.get("/app", function(req,res){
    res.json({message: "received from express"});
});

app.get("/app/youtube", function(req,res){
    osmosis.get()
    res.json({});
});

app.get("/app/twitter", function(req, res){
    res.json({});
});

app.get("/app/meta", function(req, res){
    res.json({});
});

app.get("/app/twitch", function(req, res){
    res.json({});
});

app.get("/app/kick", function(req, res){
    res.json({});
});

app.get("/app/instagram", function(req,res){
    res.json({});
});

app.listen(port, function(){
    console.log("listening on port " + port);
});

