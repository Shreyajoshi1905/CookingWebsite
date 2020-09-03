import React from 'react';
import {NavLink} from "react-router-dom";
const Navbars = () =>
{
    return(

        <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Shreya's Website</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

        <li className="nav-item active">
        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
        </li>

              
        <li className ="nav-item">
        <NavLink className = "nav-link"   to ="/contact">contact</NavLink>
        </li>        
        
          
        <li className ="nav-item">
        <NavLink className = "nav-link"   to ="/service">services</NavLink>
        </li>   

          
        <li className ="nav-item">
        <NavLink className = "nav-link"   to ="/about">about</NavLink>
         </li>  
          
          </ul>
         
        </div>

      

      </nav>
        </div>
    )
}

export default Navbars;