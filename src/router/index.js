import React, { useContext, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/Header";

import Section from "../containers/Section";
import { PokemonContext } from "../context/PokemonContext";
import { getAPI } from "../services/get.axios";

const Home = lazy(() => import("../pages/Home"));
const PokemonDetail = lazy(() => import("../pages/PokemonDetail"));
const MyPokemon = lazy(() => import("../pages/MyPokemon"));

function routes() {
  const { addPokemons, addNextLoad, nextLoad, load } =
    useContext(PokemonContext);

  async function getPokemons() {
    try {
      const res = await getAPI(nextLoad);
      addNextLoad(res.data.next);
      getDetailPokemon(res.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  function getDetailPokemon(results) {
    results.map(async (result) => {
      const res = await getAPI(result.url);
      addPokemons(res.data);
      // await pokemons.sort((a, b) => a.id - b.id);
    });
  }

  useEffect(() => {
    getPokemons();
  }, [load]);

  return (
    <Router>
      <Header />
      <Suspense
        fallback={<div style={{ textAlign: "center" }}>Loading...</div>}
      >
        <Section>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:name" component={PokemonDetail} />
          <Route exact path="/my-pokemon" component={MyPokemon} />
        </Section>
      </Suspense>
    </Router>
  );
}
export default routes;
