import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [currentPokemon, setCurrentPokemon] = useState(null)

  useEffect(() => {
    const fetchPoke = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/lucario')
      setCurrentPokemon(await res.json())
    }

    fetchPoke()
  }, [])

  console.log('Current pokemon=>', currentPokemon)

  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <h3>This is my current favorite Pokemon: </h3>
      <br />

      {currentPokemon ? 
        <>
        <div>
          <h2>{currentPokemon.name}</h2>
          <img src={currentPokemon.sprites.front_shiny} alt={currentPokemon.name} />
        </div>
        <div>
          <ul>
            Moves: 
            {currentPokemon.moves.slice(0,5).map((move, index) => {
              return <li key={index}>{move.move.name}</li>
            })}
          </ul>
        </div>
        </>
        :

        <div>No Pokemon selected yet</div>
      }
    </div>
    
  );
}

export default App;
