import React, { useContext } from "react";
import styled from "@emotion/styled";

import CardPokemon from "../components/CardPokemon";
import RowList from "../containers/RowList";

import { useHistory } from "react-router";
import { PokemonContext } from "../context/PokemonContext";

const PageTitle = styled.h2`
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

const LoadBtn = styled.button`
  border: none;
  background: #c7a008;
  padding: 0.5rem 1rem;
  border: thin solid #eaeaea;
  margin: auto;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  font-family: inherit;
`;

export default function Home() {
  const history = useHistory();
  const { pokemons, loadPokemons } = useContext(PokemonContext);

  return (
    <>
      <PageTitle mb="1rem" mt="2rem">
        Pokemon List
      </PageTitle>
      <RowList>
        {pokemons.map((pokemon) => (
          /* <li key={pokemon.id}>
            {pokemon.name} {pokemon.url}
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </li> */
          <CardPokemon
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types}
            onClick={() => history.push(`/pokemon/${pokemon.name}`)}
          />
        ))}
        <LoadBtn onClick={() => loadPokemons()}>Load More</LoadBtn>
      </RowList>
    </>
  );
}
