import React, {useState, useEffect} from "react";
import Hero from "./Hero";

const Heros = () =>{

    const [heros, setHeros]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/avengers")
        .then(res => res.json())
        .then((data) =>{setHeros(data)}
     )},[])

    //  console.log("heros:" ,heros)

    const hero = heros.map((hero)=>{
        return(
            <Hero
            key={hero.id}
            hero={hero}
            />
        )
        
    })

    return(
        <div className="Heros">
            <h1>Earth's Mightest Heros:</h1>
            <hr/>
            <ul>{hero}</ul>
        </div>


    )
}

export default Heros