import React from 'react';
import {Card} from 'react-bootstrap';
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import manc  from '../src/images/img2.jpg';
import tikki from '../src/images/img5.jpg';
import cake from '../src/images/img6.jpg';
import {NavLink} from 'react-router-dom';
import Cards from "./Card";
import './Service.css';


const Service = () =>
{
    return(
        <div className = "styleme">
       <Cards name = "manchuraian" src = {manc}  />
       <Cards name = "cake" src = {cake}/>
       <Cards name = "tikki" src = {tikki}/>
        </div>
    )
}
export default Service;