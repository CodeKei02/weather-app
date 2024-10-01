import React from "react";
import { Formulario } from "./Formulario";
export const App = ({ country, temperatura }) => {
  return (
    <>
      <h2>Buscador del clima</h2>
      <p>Clima en {country}</p>

      <span>{temperatura}</span>
      <Formulario />
    </>
  );
};
