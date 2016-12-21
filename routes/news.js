var express=require("express");
var router = express.Router();
var newsSchema=require('../modules/Schema');
//var modelObj=new newsSchema();
/*var mongoose=require('mongoose');
 var uristring ='mongodb://localhost/test';*/



/*/*localhost:8080/news*/
router.get("/view", isLoggedIn ,function(request,response){
	
	

	var cursor = newsSchema.find({},function(err,newsModell){

		    console.log("Inside find");

	        if(err){
	                response.send(err);
	           }
	           else{
	              // console.log();
	               response.send(newsModell); 

	               } 
            });

	    //response.send("Hello from express"+req1+"Hello world "); 
	    //console.log(req1+"Hii ------");

    });
	
	
	




/*localhost:8080/news*/
router.put("/update", isLoggedIn ,function(request,response){
	
	console.log("Inside put");
	console.log("Inside put"+request.body.stateComment);
  console.log("Inside put"+request.body.id);
	var req1=request.body.stateComment;
  var req2=request.body.id;
	
    newsSchema.update({title:req2},{$set:{comments:req1}},

      function(err){if(err) {
      
      console.log("error "+err);
       response.send(err);

     }

     else  {

     	console.log("Updated");

     response.send("News updated");

     //console.log("updated");

     }

   });

 
   
	
})

/*localhost:8080/news*/
router.delete("/remove", isLoggedIn ,function(request,response){
    
    var modelObj=new newsSchema();
	console.log("Inside delete function");

	var titlee=request.body.title;
	console.log("Inside delete function"+titlee);
	newsSchema.remove({title:titlee},function(err){
    if(err){
    response.send("Error in deleting the data");
     }
     else{
       response.send("Data is deleted successfully");
     }

   });

	
	//response.send("Hello from express delete");

	
})

/*localhost:8080/news*/
router.post('/', isLoggedIn ,function (req, res) {

	
    console.log("Inside post Im here");
	/*var req1=req.body.status;
	var req2=req.body.source;
	var req3=req.body.sortBy;*/
	var req4=req.body;
	console.log(req4);

	//console.log("Values in the Post Method"+req4);

    //console.log(req1);
    //console.log("Our array data is ------------------------------------------->"+req2[1].id);

    // DB Coomands
    
        var modelObj=new newsSchema();
        modelObj.author=req4.author;
        console.log(modelObj.author);
        modelObj.title=req4.title;
        modelObj.url=req4.url;
        modelObj.urlToImage=req4.urlToImage;
        modelObj.publishedAt=req4.publishedAt;
        modelObj.description=req4.description;
        modelObj.comments="";
        console.log(modelObj.description+"------------------description");
    
    

    modelObj.save(function (err) {if (err) console.log ('Error on save!')});

    //modelObjest.find({}).exec(function(err, result) {
      if (!err) {
        console.log(result);
        res.send("Error occured");
      } else {
        res.send("Data saved successfully");
      };
    });


    //res.send("Hello from express all");
  //next() // pass control to the next handler


function isLoggedIn (req, res, next) {
if(req.isAuthenticated()){
return next()
;}
else {
  res.json('not authenticated');
}
};

module.exports = router;

