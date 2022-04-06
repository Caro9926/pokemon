import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [listPokemon,setListPokemon] = useState([]);
  const [called, setCalled] = useState(false);
  useEffect(() =>{
    if(called){
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(respuesta =>{
        setListPokemon([...respuesta.data.results]);
      })
      .catch((err) =>{
        console.log(err);
      })
    }
    else{
      setListPokemon([]);
    }
    
  },[called])
  
  return (
    <div className="App">
      <button onClick={(e) => setCalled(!called)}>{!called? "Fetch Pokemon": "Clear Pokemon"}</button>
      <ul>
        {
          listPokemon.map((pokemon,indice) => {
            return(
              <li key={indice}>{pokemon.name}</li>
            );
          })
        }
      </ul>
      
    </div>
  );
}

export default App;
