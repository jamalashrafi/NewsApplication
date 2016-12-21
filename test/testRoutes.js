var express=require("express");
var router = express.Router();
//var routes=require();
var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");
var url = supertest("http://localhost:8080");
var reqAgent=require("supertest");
var server=reqAgent.agent("http://localhost:8080");


/*describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .post("/users/save")
        .expect(200)
        .send({ username: 'jamal123', password: '12347' })
        .end(function(err,res){
          if (err) {
                throw err;
          }
          assert.equal("Registered",res.text, "Not matching Registered");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});*/

describe("Testing the login route", function(err){
  it("should handle the request", function(done){
    url
        .post("/users/login")
        .expect(200)
        .send({ username: 'jamal12', password: '12347' })
        .end(function(err,res){
          if (err) {
                throw err;
          }
          assert.equal("Logged in",res.text, "hello  is not matching with Hello!");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});

describe("Testing the save news route", function(err){
  it("should handle the login  request", function(done){
    server
        .post("/users/login")
        .expect(200)
        .send({ username: 'Nabi', password: 'Nabi' })
        .end(function(err,res){
          if (err) {
                throw err;
          }
          assert.equal("Logged in",res.text, "hello  is not matching with Logged in");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
  it("should handle the  save request", function(done){
    server
        .post("/news")
        .expect(200)
        .send({

   "author": "Matthew Lynley",
    "title": "Twitter’s CTO Adam Messinger is leaving the company along with VP of product Josh McFarland",
    "url": "http://social.techcrunch.com/2016/12/20/twitters-cto-adam-messinger-is-leaving-the-company/",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2016/11/twitter-140-media.png?w=640&amp;h=360&amp;crop=1",
    "publishedA": "2016-12-20T20:50:01Z",
    "description": "Twitter CTO Adam Messinger, who has been the company's CTO for almost four years and with the company for five years, said today he was leaving the company..."
    

})
        .end(function(err,res){
          if (err) {
                throw err;
          }
          assert.equal("Data saved successfully",res.text, "data  is not matching with Hello!");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});



//module.exports = router;
  