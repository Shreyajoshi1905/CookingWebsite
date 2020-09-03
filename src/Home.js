import React from "react";
import {NavLink} from "react-router-dom";
import img from "../src/images/img1.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from './Common';
const Home=(props) => {
    return (
      <div >
     <Common  name = "Show your cooking skills - featuring "
     
      imgsrc = {img}
      btnName = "Get started"
      visit =  "/about"
      />
          
      </div>
    );
  }

  export default Home;