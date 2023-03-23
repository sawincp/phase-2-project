import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

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
            <form className="Form" onSubmit={handleSubmit}>
                <label> Name </label>
                <input name="name" onChange={handleInputChange} type="text"/><br/>
                <label> Alias </label>
                <input name="alias" onChange={handleInputChange} type="text"/><br/>
                <label> Place of Birth </label>
                <input name="place of birth" onChange={handleInputChange} type="text"/><br/>
                <label> First Appeared </label>
                <input name="first appreance" onChange={handleInputChange} type="text"/><br/>
                <label> Intelligence </label>
                <input name="intelligence" onChange={handleInputChange} type="text"/><br/>
                <label> Strength </label>
                <input name="strength" onChange={handleInputChange} type="text"/><br/>
                <label> Speed </label>
                <input name="speed" onChange={handleInputChange} type="text"/><br/>
                <label> Durability </label>
                <input name="durability" onChange={handleInputChange} type="text"/><br/>
                <label> Power </label>
                <input name="power" onChange={handleInputChange} type="text"/><br/>
                <label> Combat </label>
                <input name="combat" onChange={handleInputChange} type="text"/><br/>
                <label> Image </label>
                <input name="image" onChange={handleInputChange} type="text"/><br/>
                <input type="submit"/>

            </form>
        </div>
    )
}

export default HeroForm