var express = require('express')
var mongoose = require("mongoose")
var axios = require("axios")
var logger = require("morgan")
var cheerio = require("cheerio")
var databaseUrl = "mongolab-triangular-79402"
var collections = ["data"]
var db = require("./models/schema.js")







var MONGODB_URI = process.env.MONGODB_URI || "mongodb://https://frozen-forest-13112.herokuapp.com/mongolab-triangular-79402";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

var PORT = process.env.PORT || 8080;

app.get("/all", function(req, res){
    db.data.find({}, function (err, docs) {
    res.json(docs)
    })
})
app.get("/scrape", function(req, res){
    axios.get("https://local.theonion.com").then(function(html) {
        var $ = cheerio.load(html.data)
        $("article h2 p").each(function(i, element) {
            var result = {};

            result.title = $(this)
            .children("a")
            .text();
            result.link = $(this)
            .children("a")
            .attr("href");
            result.author = $(this)
            .children("a")
            .text();
            result.article =$(this)
            .children('a')
            .text()

            db.News.create(result)
            .then(function(dbNews){
                console.log(dbNews)
            })
            .catch(function(err) {
                console.log(err)
            })
        })
    })

})

//         $(".title").each(function(i, element){
//             var title = $this.children("a").text();
//             var link =$(this.children("a").attr("href")

// //             if (title && link) {
// //     db.data.save({
// //     title: title,
// //     link: link
// // },
// function(error, saved) {
//     if (error) {
//         console.log(error);
//     }
//     else { console.log(saved)
//     }
// })
//             }
            
//         })
//     })
//     res.send("complete")
// })



app.listen(PORT, function() {
    console.log("server be workin', yo")
})
