import React ,{Component} from "react";
import './Contact.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from 'react-router-dom'

class Contact extends Component  
{

  constructor(props){

    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    }
 }

 handleChange = event =>
 {
   
   this.setState({ [event.target.name]: [event.target.value]

   })
 }
 handlesumbit = (event) =>
 {
   alert(JSON.stringify(this.state));
   event.preventDefault();
 }
  render(){

    return(

      <div id = "hdr" className = "contactstyle" >
        <h1> join our family!</h1>
        <br/>
        <form onSubmit = {this.handlesumbit} >
        <label>FIRST NAME</label>
        <br/>
        <input type = "text" value = {this.state.firstname} 
        onChange ={this.handleChange}  
        name = "firstname" ></input>
        <br/>
        <lable>LAST NAME</lable>
        <br/>
        <input type = "text" value ={this.state.lastname}
        onChange = {this.handleChange}
        name = "lastname"/>
        <br/>
        <label>EMAIL</label>
        <br/>
        <input type = "text" value = {this.state.email}
        onChange = {this.handleChange}
        name = "email"  ></input>
        <br/>
        <label>PASSWORD</label>
        <br/>
        <input type = "text" value = {this.state.password}
        onChange = {this.handleChange}
        name = "password"  ></input>
        <br/>
        <button className = "btn-style" type ="submit">SUMBIT</button>
        <br/>
        <small>already have an account?</small>

        </form>
        <strong>Want to know our dishes and the secret recipies of them?</strong>
        <br/>
        <NavLink to="/service">Click me!</NavLink>
      </div>
  )

    }


}
   
export default Contact;