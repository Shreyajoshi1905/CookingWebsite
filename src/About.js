import React from "react";
import Home from "./Home";
import Common from './Common';
import img from '../src/images/img1.png';
const About = (props) =>
{
    return(
        <div>
         <Common 
          name = "Welcome to about page "
         imgsrc = {img}
         btnName = "Contact Us"
         visit =  "/contact"
         />
         <div className = "Abo">
         <h3>So we welcome you to our website <strong > COOK WITH SHABBU</strong>, where ypu can showcase your cooking skills to us 
          u have to just fill a form and make an id and you can upload your foos items here . we would be super glad to make u a part 
          of our family 
         </h3>
         </div>
        </div>
    )
}
export default About;