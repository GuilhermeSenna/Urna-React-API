import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import "./style.css";

export default function App() {

  const [candidatos, setCandidatos] = useState([]);

  const getData = async () => {
    const res = await Axios.get('http://localhost:3002/candidates');
    setCandidatos(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h1>Lista de candidatos</h1>
      <div className="candidatos">
        {/* <h2> Nenhum candidato cadastrado ainda...</h2> */}
        {candidatos.map((val, key) => {
          return (
            <div className="candidato" key={key}>
              <h3><strong>Nome:</strong> {val.nome}</h3>
              <h3><strong>Número do candidato:</strong> {val.numero}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}
