
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBarComponent from './SearchBarComponent.jsx';
import ManagerComponent from './ManagerComponent.jsx';

export default class HomeComponent extends React.Component{
		constructor(){

			super();
			this.state={Msg:[]};/*Initializing the state Msg to type array */
			this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);/*Binding fetchNewsFromExternalAPI to HomeComponent */
		
		}


		fetchNewsFromExternalAPI(url) {/*fetchNewsFromExternalAPI starts here*/

				    $.ajax({/*Ajax call function  to  newsapi.org  starts here*/

						     url: "https://newsapi.org/v1/articles?source=" + url + "&sortBy=top&apiKey=58104e4d8cec41b1837916c6436b0198",
						     /*url variable obtained from search box apended to api's url*/

						     type: "GET",

						     dataType: 'JSON',

						     success : function(msg){

						        /*msg reprewsents JSON data of news headlines sent back by external API*/

						         this.setState({Msg:msg.articles})/*Updating state value*/

						     }.bind(this),/*binding the function to the HomeComponent*/

						     error: function(err){

						         console.log("Error occured "+err);

						     }.bind(this)  /*binding the function to the HomeComponent*/

				 });

		}

		render(){/*render function starts here*/
            
			return (

					<div>
 
						 <SearchBarComponent ajaxUri={this.fetchNewsFromExternalAPI}/>
						 <ManagerComponent newsData={this.state.Msg} />
					
					</div>

		        )

		}/*render function starts here*/




}



