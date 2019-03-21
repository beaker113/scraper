var express = require('express')
var route = require("./routes/htmlRoutes.js")





var app = express();

var MONGODB_URI = process.env.MONGODB_URI || "https://frozen-forest-13112.herokuapp.com/mongolab-triangular-79402";

app.use(express.static('public'))

var PORT = process.env.PORT || 8080;



app.listen(PORT, function() {
    console.log("server be workin', yos")
}) ;
