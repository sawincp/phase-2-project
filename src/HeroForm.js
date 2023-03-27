import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Form, Button, Col, Row } from 'react-bootstrap';

const HeroForm = ()=>{

    let navigate = useNavigate()

    const [hero, setHero]= useState({
        name: '',
        alias: '',
        intelligence: '',
        strength: '',
        speed: '',
        durability: '',
        power: '',
        combat: '',
        placeofbirth: '',
        firstapperance: '',
        image:'',
    })

    const handleInputChange =(e)=> {
        setHero({...hero, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        const newHero={
            name: hero.name,
            alias: hero.alias,
            intelligence: hero.intelligence,
            strength: hero.strength,
            speed: hero.speed,
            durability: hero.durability,
            power: hero.power,
            combat: hero.combat,
            placeofbirth: hero.placeofbirth,
            firstapperance: hero.firstapperance,
            image: hero.image
        }
        fetch('http://localhost:3001/avengers', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newHero)
        })
        .then(r => r.json())
        .then(navigate('/heros'))
        
    }

    return(
        <div className="HeroForm">
            <h1>Create your own Hero!</h1>
            <hr></hr>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                onChange={handleInputChange}
                                />
                    </Form.Group>
                    <Form.Group as={Col} controlId="alias">
                        <Form.Label>Alias</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                onChange={handleInputChange}
                                />
                    </Form.Group>
                </Row>
                
                <Row>
                    <Form.Group as={Col} controlId="intelligence">
                        <Form.Label>Intelligence</Form.Label>
                            <Form.Control
                                type="text"
                                name="intelligence"
                                onChange={handleInputChange}
                                />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="strength">
                        <Form.Label>Strength</Form.Label>
                            <Form.Control
                                type="text"
                                name="strength"
                                onChange={handleInputChange}
                                />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="speed">
                        <Form.Label>Speed</Form.Label>
                            <Form.Control
                                type="text"
                                name="speed"
                                onChange={handleInputChange}
                                />
                    </Form.Group>
                    <Form.Group as={Col} controlId="durability">
                        <Form.Label>Durability</Form.Label>
                            <Form.Control
                                type="text"
                                name="durability"
                                onChange={handleInputChange}
                                />
                    </Form.Group>
                </Row>
                
                <Row>
                    <Form.Group as={Col} controlId="power">
                        <Form.Label>Power</Form.Label>
                            <Form.Control
                                type="text"
                                name="power"
                                onChange={handleInputChange}
                                />
                    </Form.Group>
                    <Form.Group as={Col} controlId="combat">
                        <Form.Label>Combat</Form.Label>
                            <Form.Control
                                type="text"
                                name="combat"
                                onChange={handleInputChange}
                                />
                    </Form.Group>    
                </Row>
                
                <Form.Group as={Col} controlId="image">
                        <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                onChange={handleInputChange}
                                />
                </Form.Group>    
                
                <br></br>
                
                <Button type="submit">Submit</Button>
            </Form>
            
        </div>
    )
}

export default HeroForm