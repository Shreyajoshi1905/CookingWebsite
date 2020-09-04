import React, { useState } from 'react';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch , Route , Redirect } from 'react-router-dom';
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; 

const App=() => {

  const[name , setName] = useState("");
  const[lastName , setLastName] = useState("")
  const[fullName , setFullName] = useState("");
  const[lastNameNew , setLastNameNew] = useState("");
  
  

  const inputevent = (event) =>
  {
   console.log(event.target.value);
   setName(event.target.value);

  };

  const inputeventTwo = (event) =>
  {
    console.log(event.target.value)
   setLastName(event.target.value)

  }

  const onSubmits = (event) =>
  {
    setFullName(name);
    setLastNameNew(lastName);

    event.preventDefault();
  }
  return (
    <div>
    <form  onSubmit = {onSubmits}>
    <div className="App">
    
    <h1>login now</h1>
   
    <label>Hello {fullName} { lastNameNew} </label>
    
    <br/>

    <input type = "text"
    placeholder = "enter first name here"
    onChange = {inputevent}
    value = {name}
     />

     <br/>

    <label  > last name</label>
    <br/>
    
    <input type = "text"
     placeholder = "enter your last name" 
    onChange = {inputeventTwo}
     value = {lastName} ></input><br/>

     <lable> email</lable>
     <br/>
     <input 
     type = "text"
     //value = {email}
     //onChange = {inputeventthree}
    placeholder = "enter your email"></input>
<br/>
    <lable>password</lable>
<br/>
    <input type = "text"
    placeholder ="write ypur pssword"
    ></input>
 
    <button>SUBMIT</button>
  
    </div>
    </form>
    </div>
    
    


  );
}

export default App;
