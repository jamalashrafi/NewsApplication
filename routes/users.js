var express = require('express');
var router = express.Router();
var userss=require('../modules/userAuthentication');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// p\POST FOR PASSPORT AUTH

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });







/* GET users listing. */
router.post('/', function(req, res, next) {
	
	var name=req.body.Name;
  var pwd=req.body.Pwd;
	//console.log(req.body);*/

	var usersValues=new userss();

	
    console.log("Inside post");
	
    /*var jamal = new userss ({
        username: "jamal",
        password: "Nabi"
    });*/

    usersValues.username=name;
    usersValues.password=pwd;

    console.log(usersValues.username);
    console.log("Inside Modled"+userss);
    

    usersValues.save(function (err) {if (err) console.log ('Error on save!')});
    
    /*userAuthentication.find({}).exec(function(err, result) {
      if (!err) {
        console.log(result);
      } else {
        // error handling
      };
    });*/
  res.send('respond with a resource');
});

module.exports = router;
