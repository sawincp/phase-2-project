import React from "react";
import { Container, Row, Col } from 'react-bootstrap'


const Hero = ({ hero, onDeleteHero }) =>{

    const { id, name, alias, intelligence, strength, speed, durability, power, combat, placeofbirth, firstapperance, image}= hero

    function handleDeleteClick() {
      fetch(`http://localhost:3001/avengers/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => {
          onDeleteHero(hero);
        });
    }

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
          <button onClick={handleDeleteClick}>Delete</button>
        <hr/>

      </Container>
    );
  }

export default Hero