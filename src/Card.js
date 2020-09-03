import React from 'react';
import {Card} from 'react-bootstrap';
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import imgs from'../src/images/img2.jpg';
import {NavLink} from 'react-router-dom';

const Cards = (props) =>
{
    return(
        <div>
        <Card style = {{width: '18rem'}}>
        <Card.Img varient = "top"  src = {props.src} alt = "picture.e"/>
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <NavLink to ="/">Recipie</NavLink>
        </Card.Body>
        </Card>
        </div>
    )
}
export default Cards;