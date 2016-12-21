
var express = require('express');
var router = express.Router();
var userauthentication = require('../modules/userAuthentication.js');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var connectflash=require('connect-flash');




/* GET users listing. */
router.get('/view', function(req, res, next) {
  userauthentication.find({},function(err,user){
    if(err) throw err;
    return res.redirect('/login');
  })

   //console.log("Inside Get");


//res.send('respond with a resource');
});


router.post('/login',
passport.authenticate('local', { sucessRedirect: '/' }),
function(req, res) {
res.send("Logged in");
});

router.get('/logout', function(req, res) {
 
  console.log("Inside logout");
  req.logout();

  //res.send({redirect: '/users/logout'});
  res.redirect("/login");
  //res.send("hi");

  
//res.send('respond with a resource');
});



router.post('/save', function(req, res) {

   console.log("Inside Post");
   if(req.body)
   {
       //console.log("Inside Body");
       var userdetails = new userauthentication();
       userdetails.username = req.body.username;
       userdetails.password = req.body.password;
       //console.log("UserName"+userdetails.username);
       userdetails.save(function(err) {
           if(err)
           {
               res.send("Not registered");
           }
           else
           {
               res.send("Registered")
           }

       });
   }


});



/* GET users listing. */


router.post('/update', function (req, res) {

  
    console.log("Inside post Im here");
  var data= new userauthentication();
  data.username=req.body.username;
  data.password=req.body.password;

  console.log(req4);

    modelObj.save(function (err) {if (err) console.log ('Error on save!')});

    res.send("Hello from express all...data saved");
  //next() // pass control to the next handler
})


module.exports = router;