var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var News = new Schema({
    title:  String,
    link: String,
    author: String,
    article:   String,
    comments: [{ body: String, date: Date }],

  });
  var News = mongoose.model('News', Schema);

  module.exports = mongoose.model('News', Schema)