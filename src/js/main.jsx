

import 'file?name=[name].[ext]!../index.html';

import React from 'react';

import ReactDOM from 'react-dom';

var {browserHistory,hashHistory, Route, Router, IndexRoute}

  = require('react-router');



import SearchBarComponent from './components/SearchBarComponent.jsx';

import HomeComponent from './components/HomeComponent.jsx';

import ContactUs from './components/ContactUs.jsx';

import NavBar from './components/NavBar.jsx';


import AboutUs from './components/AboutUs.jsx';

import FavouriteNews from './components/FavouriteNews.jsx';


class main extends React.Component{

        render(){

            return (

                        <div>

                        <NavBar/>

                          <br/><br/><br/><br/>

                            {this.props.children}

                        </div>

                    )

                }

}

ReactDOM.render(

            <Router history={browserHistory}>

                         <Route path="/" components={main} >
                        
                         <IndexRoute component={ContactUs}/>

                         <Route path="/about" components={AboutUs}/>

                         <Route path="/contact" components={ContactUs}/>

                         <Route path="/favNews" components={FavouriteNews}/>

                         <Route path="/home" components={HomeComponent}/>
                         </Route>

            </Router>,document.getElementById('content')

);