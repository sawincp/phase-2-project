import React from "react";
import { Container, Row, Col } from 'react-bootstrap'


const Hero = ({ hero }) =>{

    const {id, name, alias, intelligence, strength, speed, durability, power, combat, placeofbirth, firstapperance, image}= hero

    return(
        <Container>
        <Row>
        <Col>
            <img src={image} alt ={alias}/>
            <p>{alias}</p>
        </Col>
        <Col>
            <p>{name}</p>
        </Col>
        </Row>
      </Container>
    );
  }

export default Hero