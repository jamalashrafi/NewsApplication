
import React from 'react';
import DisplayNewsComponent from './DisplayNewsComponent.jsx';


export default class ManagerComponent extends React.Component{

		constructor()
		    {
		      super();

		    }

		render(){
				  var newData=this.props.newsData.map(function(obj){/*Iterating and sending data to DisplayNewsComponent to display it*/
				  return  <DisplayNewsComponent  sentData={obj} />
				  });

				return (
					<div>{newData}</div>
				)
		}
}

