import React from "react";
import { Container, Row, Col } from 'react-bootstrap'


const Hero = ({ hero }) =>{

    const { name, alias, intelligence, strength, speed, durability, power, combat, placeofbirth, firstapperance, image}= hero

    return(
        <Container>
        <Row> 
        <Col>
          <p>{alias}</p>
            <img src={image} alt ={alias}/>
            
        </Col>
        <Col>
            <p>Name: {name}</p>
            <p>Born: {placeofbirth}</p>
            <p>First Apperance: {firstapperance}</p>
        </Col>
        <Col>
            <p>Intelligence: {intelligence}</p>
            <p>Strength: {strength}</p>
            <p>Speed: {speed}</p>
            <p>Durability: {durability}</p>
            <p>Power: {power}</p>
            <p>Combat: {combat}</p>
        </Col>
        </Row>
        <hr/>

      </Container>
    );
  }

export default Hero