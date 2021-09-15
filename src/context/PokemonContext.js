import React, { createContext, useState } from "react";
import { data } from "./dummy";

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [nextLoad, setNextLoad] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  const [load, setLoad] = useState("");
  const [pokemon, setPokemon] = useState(data);
  const [myCapturedPokemon, setMyCapturedPokemon] = useState("");

  // store pokemons from API
  const addPokemons = (pokemon) => {
    setPokemons((arr) => [...arr, pokemon]);
  };

  const removePokemon = (id) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.id !== id));
  };

  // store next url from API
  const addNextLoad = (url) => {
    setNextLoad(url);
  };

  // to store pokemon detail
  const addPokemon = (data) => {
    setPokemon(data);
  };

  //trigger to load more pokemons
  const loadPokemons = () => {
    setLoad(nextLoad);
  };

  // to store captured pokemon
  const capturedPokemon = (id) => {
    setMyCapturedPokemon(pokemons.find((pokemon) => pokemon.id === id));
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        addPokemon,
        addPokemons,
        removePokemon,
        addNextLoad,
        nextLoad,
        pokemon,
        loadPokemons,
        load,
        myCapturedPokemon,
        capturedPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
