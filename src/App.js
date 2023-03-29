import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home'
import Heros from './Heros';
import HeroForm from './HeroForm';
import NavBar from './NavBar';


function App() {

  const [heros, setHeros]=useState([])


  useEffect(()=>{
      fetch("http://localhost:3001/avengers")
      .then(res => res.json())
      .then((data) =>{setHeros(data)}
   )},[])
   if(!heros) return(<p>Loading..</p>)

   function handleAddHero(newHero){
    setHeros([...heros, newHero])
   }



  return (
  <div className="App">
    <NavBar />
    <Routes>
      <Route exact path ="/" element={<Home />}/>
      <Route exact path ="/heros" element={<Heros heros={heros} />}/>
      <Route exact path='/heros/new' element={<HeroForm onAddHero={handleAddHero} />}/>
    </Routes>
  </div>
   
  );
}

export default App;
