import React from "react";
import { Link } from "react-router-dom"

const NewButton = ()=>{
    return(
        <Link to={'/heros/new'}>
            <button>Add your own hero!</button>
        </Link> 
            

    )
}

export default NewButton