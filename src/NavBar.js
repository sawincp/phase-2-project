import React from "react";
import {  NavLink  } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/" className ="active-link"> Home  </NavLink>
      <NavLink to="/heros" className ="active-link">  Avengers </NavLink>
    </div>
  );
}

export default NavBar