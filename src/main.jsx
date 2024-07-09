import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TotalPokemonProvider } from "./context/TotalPokemonContext/TotalPokemonProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TotalPokemonProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TotalPokemonProvider>
  </BrowserRouter>
);
