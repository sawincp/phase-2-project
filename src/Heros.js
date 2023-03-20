import React, {useState, useEffect} from "react";
import Hero from "./Hero";
import PowerStats from "./PowerStats";

const Heros = () =>{

    const [heros, setHeros]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/avengers")
        .then(res => res.json())
        .then(data =>console.log(data))
        
    },[])

    return(
        <div className="Heros">
            <h1>Earth's Mightest Heros:</h1>
        </div>


    )
}

export default Heros