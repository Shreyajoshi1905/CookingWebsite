import React from "react";
import {NavLink} from "react-router-dom";
import img from "../src/images/img1.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Common=(props) => {
    return (
      <div >
      <section id = "header" className = "d-flex align-items-center">
      <div className = "container-fluid nav_bg">
      <div className = "row">
      <div className = "col-10 mx-auto">
      <div className = "row">
      <div className = "col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center">
    
    <h1 >{ props.name} <strong className = "brand-name">ShreyaBabbu</strong></h1>
   
    <br/>
      <h2 className = "my-2 " >
      we are the team of talented chefs!
      </h2>
     
   <br/>
      <div className = "mt-3 ">
      <br/>
     
      <NavLink to = {props.visit} className = "btn-get-started">
      {props.btnName}
      </NavLink>
     
    <br/>
      </div>
      </div>

      <div className = "col-lg-6 order-lg-2 header-img">
      <br/>
      <img src = {props.imgsrc} className = "img-fluid animated " alt= "home img"/>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    
          
      </div>
    );
  }

  export default Common;