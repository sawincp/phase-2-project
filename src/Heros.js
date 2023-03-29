import React from "react";
import Hero from "./Hero";
import NewButton from "./NewButton";


const Heros = ({heros}) =>{
 
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