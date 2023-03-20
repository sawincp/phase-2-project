import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home'
import Heros from './Heros';
import HeroForm from './HeroForm';
import NavBar from './NavBar';

import './App.css';

function App() {

  return (
  <div className="App">
    <Routes>
      <Route  exact path ="/" Component={Home}/>
      <Route  exact path ="/heros" Component={Heros}/>
      <Route exact path='/heros/new' Component={HeroForm}/>
      <Route  path ="/heros/:id" Component={Heros}/>
    </Routes>
  </div>
   
  );
}

export default App;
