var mongoose=require('mongoose');
var uristring ='mongodb://localhost:27017/test';

mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });


var schema = new mongoose.Schema({
        username: String,
        password: String
      });
var userRegister = mongoose.model('jjj', schema);

module.exports = userRegister;