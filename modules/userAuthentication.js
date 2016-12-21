var mongoose=require('mongoose');
var uristring ='mongodb://localhost/test';

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
var userRegister = mongoose.model('userinfo', schema);

module.exports = userRegister;//db = mongoose.createConnection('mongodb://localhost/mydb');