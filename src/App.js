import React from 'react';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch , Route , Redirect } from 'react-router-dom';
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; 
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbars from "./Navbars";

const App=() => {
  return (
    <div className="App">
    <Navbars/>
   <Switch>
  <Route exact path = "/" component = {Home}/>
  <Route exact path = "/about" component = {About}/>
  <Route exact path = "/service" component = {Service}/>
  <Route exact path = "/contact" component = {Contact}/>
  <Redirect to ="/"/>
        </Switch>
    </div>
  );
}

export default App;
