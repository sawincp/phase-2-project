import React, {useState, useEffect} from "react";
import Hero from "./Hero";
import PowerStats from "./PowerStats";

const Heros = () =>{

    const [heros, setHeros]=useState([])

    // useEffect(()=>{
    //     fetch("http://localhost:3001/avengers")
    //     .then(res => res.json())
    //     .then((data) =>{
    //         setHeros(data)
    //     }
    //  )},[])

    //  console.log("heros:" ,heros)
    const heroList = heros.map(hero=><li>{hero}</li>)

    return(
        <div className="Heros">
            <h1>Earth's Mightest Heros:</h1>
            <hr></hr>
            {heroList}
        </div>


    )
}

export default Heros