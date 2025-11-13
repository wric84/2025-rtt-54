import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import PokemonList from './components/PokemonList'
import PokemonTeam from './components/PokemonTeam'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonTeam, setPokemonTeam] = useState([])

  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150/')
    .then(res => res.json())
    .then(data=>{
      setPokemonList(data.results)
       console.log(data.results)
    })
   
  },[])

  function addToTeam(pokemon){
    setPokemonTeam([...pokemonTeam, pokemon])
  }

  return (
    <>
      <Header title={"Pokemon App"}/>
      <div>
      <PokemonList pokeList={pokemonList} addToTeam={addToTeam}/>
      <PokemonTeam pokeTeam={pokemonTeam}/>
      </div>
    </>
  )
}

export default App
