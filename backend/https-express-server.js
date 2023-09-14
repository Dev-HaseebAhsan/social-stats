const express = require('express');
const app = express();
const port = 3001;

//index endpoint
app.get("/", function(req, res){
    res.send("imagine getting this index page.");
});

app.get("/app", function(req,res){
    res.json({message: "received from express"});
});

app.listen(port, function(){
    console.log("listening on port " + port);
})