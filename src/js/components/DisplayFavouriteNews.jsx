
import React from 'react';


export default class DisplayFavouriteNews extends React.Component{

		constructor()
		    {
		      super();
		      this.deleteNews=this.deleteNews.bind(this);/*binding deleteNews to DisplayFavouriteNews*/
		      this.updateNews=this.updateNews.bind(this);
		      this.setComment=this.setComment.bind(this);
		      this.state={stateComment:" "};
		    


		      
		    }


		deleteNews(){ /*deleteNews starts here*/

			console.log("In side Ajax ");

		     
				    $.ajax({ /*Ajax call function  to  /server/routes/news/remove route  starts here*/

						     url: "http://localhost:8080/news/remove",

						     type: 'DELETE',




						     data:this.props.fetchedData ,

                             /*data:this.props.sentData,/*Data to be saved*/

						     success : function(){

						       // msg reprewsents JSON data of news headlines sent back by external API

						        console.log(" Msg is Succesfully Deleted ");
		  
						     }.bind(this),/*binding to DisplayNewsComponent*/

						     error: function(err){

						         console.log("Error occured "+err);

						     }.bind(this) /*binding to DisplayNewsComponent*/

				 }); /*Ajax call function  to  /server/routes/news/remove route  ends here*/


		 } /*deleteButton ends here*/

		 updateNews(){ /*updateNews starts here*/

			console.log("In side Ajax update"+this.props.fetchedData._id);
		

		     
				    $.ajax({ /*Ajax call function  to  /server/routes/news/update route  starts here*/

						     url: "http://localhost:8080/news/update",

						     type: 'PUT',

						     data: "stateComment="+this.state.stateComment+"&id="+this.props.fetchedData.title ,

						    

                             /*Data to be saved*/

						     success : function(){

						       // msg reprewsents JSON data of news headlines sent back by external API


						        console.log(" Msg is updated successfully ");
		  
						     }.bind(this),/*binding to DisplayNewsComponent*/

						     error: function(err){

						         console.log("Error occured "+err);

						     }.bind(this) /*binding to DisplayNewsComponent*/

				 }); /*Ajax call function  to  /server/routes/news/remove route  ends here*/


		 } /*deleteButton ends here*/

		 setComment(statee){

		 	this.setState({stateComment:statee.target.value});
		 }


		
		  

		render(){ /*render() starts here*/


				return (
						<div>
						 
						   <section className="container" id="container">{/*section container starts here*/}
							               <section className="jumbotron" style={{"margin-top": "10%"}}>{/*jumbotron starts here*/}
							                   <h4>{this.props.fetchedData.author}</h4>
							                   <img src={this.props.fetchedData.urlToImage} alt="" style={{"width": "250px"}}/>
							                   <h4>{this.props.fetchedData.title}</h4>
							                   <h4>{this.props.fetchedData.description}</h4>
							                   <h4>{this.props.fetchedData.url}</h4>
							                   <h4>{this.props.fetchedData.publishedAt}</h4>
							                   
							                   <textarea className="form-control"   id="comments" onChange={this.setComment.bind(this)}>{this.props.fetchedData.comments}</textarea>
                                               <input type="button" value="Delete"  onClick={this.deleteNews} />{/*will delete the displayed news*/} 
							                   <input type="button" value="Update"  onClick={this.updateNews} id="updateComments"/>{/*will update the displayed news*/}      
							               </section>

							                
							</section> {/*section container starts here*/}

						 </div>
				 )
		}/*render() ends here*/

}/*DisplayFavouriteNews ends here*/

