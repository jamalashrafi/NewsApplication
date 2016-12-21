var mongoose=require('mongoose');
var uristring ='mongodb://localhost/test';

mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });


var schemaNews = new mongoose.Schema({
        status: String,
        source:String,
        sortBy:String,
        author:String,
        title:String,
        url:String,
        urlToImage:String,
        publishedAt:String,
        description:String,
        comments:String
      });
var newsModelExport = mongoose.model('newsModel', schemaNews);

module.exports = newsModelExport;