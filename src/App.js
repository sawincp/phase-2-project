import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home'
import Heros from './Heros';
import HeroForm from './HeroForm';
import NavBar from './NavBar';


function App() {

  const [heros, setHeros]=useState([])
  const [searchTerm, setSearchTerm]= useState('')



  useEffect(()=>{
      fetch("http://localhost:3001/avengers")
      .then(res => res.json())
      .then((data) =>{setHeros(data)}
   )},[])
   
   if(!heros) return(<p>Loading..</p>)

   
   
   function handleAddHero(newHero){
    setHeros([...heros, newHero])

   }

   function handleDeleteHero(heroToDelete){
    const updatedHeros = heros.filter((hero)=> hero.id !== heroToDelete.id)
    setHeros(updatedHeros)
   }

   const displayHeros = heros.filter((hero)=>{
    return hero.alias.toLowerCase().includes(searchTerm.toLowerCase())
   })


  return (
  <div className="App">
    <NavBar />
    <Routes>
      <Route exact path ="/" element={<Home />}/>
      <Route exact path ="/heros" element={<Heros heros={ displayHeros } onDeleteHero={handleDeleteHero} searchTerm={searchTerm} onSearchChange={setSearchTerm}/>}/>
      <Route exact path='/heros/new' element={<HeroForm onAddHero={handleAddHero} />}/>
    </Routes>
    
  </div>
   
  );
}

export default App;
