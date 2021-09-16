import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import CardPokemonDetail from "../components/CardPokemonDetail";
import ModalDialog from "../components/ModalDialog";
import { PokemonContext } from "../context/PokemonContext";
import { getAPI } from "../services/get.axios";
import pokeBallPng from "../assets/images/pokeball.png";
import {
  PokeBall,
  List,
  FontSmallBold,
  Shadow,
} from "../components/CardPokemonDetail";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  font-family: inherit;
  font-size: 1rem;
  border: thin solid #eaeaea;
  border-radius: 5px;
`;

const SubmitBtn = styled.button`
  background: #2a75bb;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  font-family: inherit;
  font-size: 1rem;
  border: thin solid #eaeaea;
  border-radius: 5px;
  margin-right: 0;
`;

const Submit = styled(SubmitBtn)`
  padding: 10px;
  margin-top: 1rem;
`;

export default function PokemonDetail() {
  const { name } = useParams();
  const { pokemon, addPokemon, capturedPokemon } = useContext(PokemonContext);

  const [isDialog, setDialog] = useState(false);
  const [isLostDialog, setLostDialog] = useState(false);

  async function getDetailPokemon() {
    const res = await getAPI(`https://pokeapi.co/api/v2/pokemon/${name}`);
    addPokemon(res.data);
  }

  const [pokemonName, setPokemonName] = useState();
  const [storedPokemon, setStoredPokemon] = useState([]);

  const saveToLocalStorage = (pokemonName, pokemon) => {
    const init = localStorage.getItem("capturedPokemon");
    if (init === null) {
      localStorage.setItem(
        "capturedPokemon",
        JSON.stringify([{ pokemon_name: pokemonName, ...pokemon }])
      );
    } else {
      const prevValue = JSON.parse(localStorage.getItem("capturedPokemon"));
      setStoredPokemon([
        ...prevValue,
        { pokemon_name: pokemonName, ...pokemon },
      ]);
      localStorage.setItem("capturedPokemon", JSON.stringify(storedPokemon));
    }
  };

  useEffect(() => {
    getDetailPokemon();
    //console.log(myPokemon);
    //localStorage.removeItem("capturedPokemon");
    // capturedPokemon(10);
    // saveToLocalStorage(pokemonName, myCapturedPokemon);
  }, []);

  const submitBtn = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    capturedPokemon(pokemon.id);
    saveToLocalStorage(pokemonName, pokemon);
    //setDialog(false);

    submitBtn.current.click();
  };

  const handlePokeBall = () => {
    const randomNum = Math.floor(Math.random() * 10);
    if (randomNum >= 5) setDialog(true);
    else setLostDialog(true);
  };

  return (
    <>
      <PokeBall onClick={() => handlePokeBall()}>
        <List center column>
          <FontSmallBold size="0.8" color="#cc0000">
            Catch Pokemon!
          </FontSmallBold>
          <img
            style={{
              width: "100%",
              height: "100%",
              paddingBottom: 5,
              // boxShadow: "0px 20px 17px -20px gray",
            }}
            src={pokeBallPng}
            alt=""
          />
          <Shadow />
        </List>
      </PokeBall>
      <CardPokemonDetail pokemon={pokemon} />;
      {isDialog && (
        <ModalDialog
          title="Yeay! You catched a pokemon"
          onClick={() => setDialog(false)}
        >
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="pokemon"
              id="pokemon"
              value={pokemonName}
              placeholder="Name your pokemon"
              onChange={(e) => setPokemonName(e.target.value)}
            />
            <span style={{ fontSize: 12, marginTop: 10, color: "red" }}>
              *Please hit 'OK' 2x so Pokemon won't runaway and close this form
              after
            </span>
            <Submit type="submit" ref={submitBtn}>
              OK
            </Submit>
          </Form>
        </ModalDialog>
      )}
      {isLostDialog && (
        <ModalDialog
          title="Oh no! You lost the pokemon. Try again!"
          onClick={() => setLostDialog(false)}
        >
          <div style={{ textAlign: "center" }}>
            <SubmitBtn onClick={() => setLostDialog(false)}>OK</SubmitBtn>
          </div>
        </ModalDialog>
      )}
    </>
  );
}
