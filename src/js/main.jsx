

import 'file?name=[name].[ext]!../index.html';

import React from 'react';

import ReactDOM from 'react-dom';

var {hashHistory,browserHistory, Route, Router, IndexRoute}

  = require('react-router');



import SearchBarComponent from './components/SearchBarComponent.jsx';

import HomeComponent from './components/HomeComponent.jsx';

import ContactUs from './components/ContactUs.jsx';

import NavBar from './components/NavBar.jsx';
 
import login from './components/login.jsx';

import AboutUs from './components/AboutUs.jsx';

import FavouriteNews from './components/FavouriteNews.jsx';

import Register from './components/Register.jsx';


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
                        
                         <IndexRoute component={login}/>

                         <Route path="/about" components={AboutUs}/>

                         <Route path="/contact" components={ContactUs}/>

                         <Route path="/favNews" components={FavouriteNews}/>

                         <Route path="/home" components={HomeComponent}/>

                         <Route path="/register" components={Register}/>

                         <Route path="/login" components={login}/>

                         

                         </Route>

            </Router>,document.getElementById('content')

);