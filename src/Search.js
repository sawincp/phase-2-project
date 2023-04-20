import React from "react";

const Search = ({ searchTerm, onSearchChange })=>{

    const handleChange = (e)=>{
        onSearchChange(e.target.value)
    }

    return(

       <div className="searchbar">
        <input
        type= "text"
        id= "search"
        placeholder="Type name to Search...."
        value ={searchTerm}
        onChange = {handleChange}></input>
       </div>
    )
}

export default Search