import React from "react";
/* Add NavLink to import */
import {  NavLink  } from "react-router-dom";


/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/heros"> Team Avengers </NavLink>
    </div>
  );
}

export default NavBar