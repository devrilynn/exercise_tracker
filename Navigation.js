import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

/**
 *  Navigation component
 * Link is used to navigate to different pages in app
 * used in the main app component App.js
 * Resources: https://www.w3schools.com/howto/howto_css_icon_buttons.asp
 **/
function Navigation() {
    return (
        <nav className="App-nav">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Link to="/">
            <button className="btn">
                <i className="fa fa-home">  </i> 
                <span className="nav-text">   Home </span>
            </button>
            </Link>
            <Link to="/add-exercise">
                <button className="btn">Add Exercise  <i className="fa fa-plus"></i>
                </button>
            </Link>
        </nav>
    );
  }
  
export default Navigation;
