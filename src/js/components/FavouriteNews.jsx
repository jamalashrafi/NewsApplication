
import React from 'react';
import DisplayFavouriteNews from './DisplayFavouriteNews.jsx';


export default class FavouriteNews extends React.Component{

		constructor()
		    {
		      super();

		      this.fetchFavNews=this.fetchFavNews.bind(this);/*binding fetchFavNews to FavouriteNews */
		      this.state={favData:[]};/*Initializing the state Msg to type array */
		    }


		 componentDidMount(){

		      this.fetchFavNews();/*Calling fetchFavNews*/
		}

		      fetchFavNews(){ 

				    $.ajax({ /*Ajax call function  to  /server/routes/news/view route  starts here*/

						     url: "http://localhost:8080/news/view",

						     type: 'GET',

						     success : function(msg){

						        /*msg reprewsents favourite  news headlines saved sent back by /server/routes/news/view route*/

						        this.setState({favData:msg});/*Updating state value*/
   

						     }.bind(this),/*binding to FavouriteNews*/

						     error: function(err){

						         console.log("Error occured "+err);

						     }.bind(this)/*binding to FavouriteNews*/

				            });
		            }

		render(){ /*render() starts here*/

					var favDataa=this.state.favData.map(function(obj){/*Iterating and sending data to DisplayFavouriteNews to display it*/
                 
                 {console.log("author="+obj.author+"publishedAt="+obj.description)}
				  return  <DisplayFavouriteNews  fetchedData={obj} />;

				  });

				return (
					<div>{favDataa}</div>
				)
		} /*render() ends here*/


}/*FavouriteNews ends here*/


