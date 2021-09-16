import React, { useState, useEffect } from "react";
import CardMyPokemon from "../components/CardMyPokemon";
import RowList from "../containers/RowList";
import styled from "@emotion/styled";

const PageTitle = styled.h2`
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

export default function MyPokemon() {
  const [pokemons, setPokemons] = useState(
    JSON.parse(localStorage.getItem("capturedPokemon"))
  );

  const handleReleasePokemon = (id) => {
    console.log(pokemons);
    const afterReleasePokemon = pokemons.filter((pokemon) => pokemon.id !== id);
    console.log(afterReleasePokemon);
    localStorage.setItem(
      "capturedPokemon",
      JSON.stringify(afterReleasePokemon)
    );
    setPokemons(JSON.parse(localStorage.getItem("capturedPokemon")));
  };

  return pokemons ? (
    <>
      <PageTitle mb="1rem" mt="2rem">
        My Pokemon
      </PageTitle>
      <RowList>
        {pokemons.map((pokemon, idx) => (
          <>
            <CardMyPokemon
              pokemon={pokemon}
              key={idx}
              onDeleteClick={() => handleReleasePokemon(pokemon.id)}
            />
          </>
        ))}
      </RowList>
    </>
  ) : (
    <div>You have not catch any pokemons.</div>
  );
}
