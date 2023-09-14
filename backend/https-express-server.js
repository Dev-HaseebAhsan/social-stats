const express = require('express');
const app = express();
const port = 3001;

//index endpoint
app.get("/", function(req, res){
    res.send("imagine getting this");
});

app.listen(port, function(){
    console.log("listening on port " + port);
})