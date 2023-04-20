import React from "react";
import Hero from "./Hero";
import Search from "./Search";
import NewButton from "./NewButton";


const Heros = ({ heros, searchTerm, onSearchChange, onDeleteHero }) =>{

     const heroList = heros.map((hero)=>{
        return(
                <Hero
                key={hero.id}
                hero={hero}
                onDeleteHero={ onDeleteHero }/>
        )
        
    })

    return(
        <div className="Heros">
            <h1>Earth's Mightest Heros!</h1>
            <NewButton /><br></br>
            <Search searchTerm= {searchTerm} onSearchChange={onSearchChange}  />
            <hr/>
            <ul>{heroList}</ul>
        </div>


    )
}

export default Heros