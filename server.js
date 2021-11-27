const express = require("express");
const app = express();
const BodyParser = require("body-parser");

app.use(express.static(__dirname));
app.use(BodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/dev.html", function(req,res){
    console.log(req);
    console.log(res);
    console.log("ihfdsg");
});

app.listen(3000, function(){
    console.log("Server runnin'");
});