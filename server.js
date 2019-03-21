var express = require('express')
var route = require("./routes/htmlRoutes.js")





var app = express();


app.use(express.static('public'))

var PORT = process.env.PORT || 8080;



app.listen(PORT, function() {
    console.log("server be workin', yos")
}) ;
