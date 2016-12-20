
import React from 'react';


export default class DisplayNewsComponent extends React.Component{

		constructor()
		    {
		      super();

		      this.saveButton=this.saveButton.bind(this);/*binding saveButton to DisplayNewsComponent */
		    }


		 saveButton(){ /*saveButton starts here*/

		     
				    $.ajax({ /*Ajax call function  to  /server/routes/news/save route  starts here*/

						     url: "http://localhost:8080/news/",

						     type: 'POST',

						     data:this.props.sentData,/*Data to be saved*/

						     success : function(){

						        /*msg reprewsents JSON data of news headlines sent back by external API*/

						        console.log(" Msg is Succesfully Saved ");
		  
						     }.bind(this),/*binding to DisplayNewsComponent*/

						     error: function(err){

						         console.log("Error occured "+err);

						     }.bind(this) /*binding to DisplayNewsComponent*/

				 }); /*Ajax call function  to  /server/routes/news/save route  ends here*/


		 }  /*saveButton ends here*/
		  

		render(){ /*render() starts here*/

				return (
						<div>
						 
							   <section className="container" id="container">{/*section container starts here*/}
								               <section className="jumbotron" style={{"margin-top": "10%"}}>{/*jumbotron starts here*/}
								                   <h4>{this.props.sentData.author}</h4>
								                   <img src={this.props.sentData.urlToImage} alt="" style={{"width": "250px"}}/>
								                   <h4>{this.props.sentData.title}</h4>
								                   <h4>{this.props.sentData.description}</h4>
								                   <h4>{this.props.sentData.url}</h4>
								                   <h4>{this.props.sentData.publishedAt}</h4>    
								               </section>{/*jumbotron ends here*/}

								               <input type="button" value="Save"  onClick={this.saveButton} />{/*will save the displayed news*/}
								</section> {/*section container ends here*/}

						 </div>
				 )

		} /*render() ends here*/

}/*DisplayNewsComponent ends here*/

