import React from 'react';
import {browserHistory} from 'react-router';


export default class Register extends React.Component
{

/*this is a ajax function for the URL of saving of login ID and password*/
Register()
{
var uname=document.getElementById('userid').value;
var pass=document.getElementById('password').value;

$.ajax({
url: "http://localhost:8080/users/save",
type: "POST",
data:'username='+uname+'&password='+pass,
success : function(msg)
{
console.log("successfully loged to database");

  alert("succesfully Registered");
  browserHistory.push('/home');
}.bind(this),
error: function(err){

}.bind(this)
});

}
/*closed ajax function*/



render()
 {
    return(
  <div>
    <div className="container">
         <div className="row">
              <div className="well">
                <center>
                  <b>  Enter Username :</b><input type="text" class="form-control" id="userid" style={{"width":"50%"}}/><br/><br/>
                  <b> Enter  Password: </b><input type="password" class="form-control" id="password"  style={{"width":"50%"}}/>


                    </center>
                          <input type="button"  value="Register" className="btn btn-success" onClick={this.Register.bind(this)} style={{"margin":"10px","margin-left":"45%"}}/>
              </div>
           </div>
    </div>
</div>


        )
}
}