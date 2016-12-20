
import React from 'react';
import DisplayNewsComponent from './DisplayNewsComponent.jsx';


export default class SearchBarComponent extends React.Component{

	constructor()
	    {
	      super();

	      this.submitHandler=this.submitHandler.bind(this);/*Will bind submitHandler to the SearchBarComponent component*/
	    }

	submitHandler(){ /*Event Handler for search button*/
		
		var searchItem=document.getElementById("search").value;
		this.props.ajaxUri(searchItem);/*Calling ajaxUri in the HomeComponent and passing the value from the search box to*/
	
	}/*submitHandler Ends Here*/

	render(){        /* Render Method Starts Here */

			return (

				<div>
					
					<div className="input-group" id="input-group">{/*div input-group starts here*/}
				        <input type="text" className="form-control" placeholder="Search" id="search"/>
				        <div className="input-group-btn" id="input-group-btn">{/*div input-group-btn starts here*/}
				          <button className="btn btn-default" type="button" onClick={this.submitHandler}>
				            <i className="glyphicon glyphicon-search"></i>
				          </button>
				        </div>{/*div input-group-btn starts here*/}
			        </div>{/*div input-group ends here*/}

				</div>

			 )
	}   /* Render Method Ends Here */


} /*SearchBarComponent Ends Here*/

