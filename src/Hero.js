import React from "react";

const Hero = ({ hero }) =>{

    const {id, name, alias, intelligence, strength, speed, durability, power, combat, placeofbirth, firstapperance, image}= hero




    return(
        <div className="hero">
            <img src={image} alt= {name}/>
            <p>{alias}</p>            
        </div>


    )
}

export default Hero