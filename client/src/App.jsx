import React, { useState, useEffect } from 'react'
import "./style.css";

export default function App() {

  const [candidatos, setCandidatos] = useState([]);

  return (
    <div className="App">
      <h1>Lista de candidatos</h1>
      <h2> Nenhum candidato cadastrado ainda...</h2>
    </div>
  );
}
