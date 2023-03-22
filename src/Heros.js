import React, {useState, useEffect} from "react";
import Hero from "./Hero";
import NewButton from "./NewButton";


const Heros = () =>{

    const [heros, setHeros]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/avengers")
        .then(res => res.json())
        .then((data) =>{setHeros(data)}
     )},[])
     if(!heros) return(<p>Loading..</p>)

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
            <h1>Earth's Mightest Heros!</h1>
            <NewButton />
            <hr/>
            <ul>{hero}</ul>
        </div>


    )
}

export default Heros