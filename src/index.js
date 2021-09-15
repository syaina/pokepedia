import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Router from "./router";
import PokemonContextProvider from "./context/PokemonContext";

ReactDOM.render(
  <React.StrictMode>
    <PokemonContextProvider>
      <Router />
    </PokemonContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
