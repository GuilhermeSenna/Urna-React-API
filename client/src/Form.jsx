import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from 'axios'

export default function Add() {

  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  const handleSubmit = async (event) => {

    event.preventDefault();

    const candidato = {
      nome,
      numero
    }

    await Axios.post("http://localhost:3002/candidates", candidato)
      .then(() => {
        alert(`O seu candidato é ${nome} de número ${numero}.`);
      })
  }

  // function handleInput(e) {
  //   let _numero = e.target.value;

  //   if (!Number(_numero)) {
  //     return;
  //   }
  //   setNumero({
  //     [e.target.name]: _numero
  //   });
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: "4rem", color: "white" }}>
          Nome do candidato:
        </label>
        <input type="text" value={nome} onChange={(e) => {
          setNome(e.target.value)
        }} />

        <br /><br />
        <label style={{ fontSize: "4rem", color: "white" }}>
          Número do candidato:
        </label>
        <input type="text" value={numero} onChange={(e) => {
          setNumero(e.target.value)
        }} />

        <br /><br /><input type="submit" value="Enviar" />

        {/* você pode alternar a cor entre algumas opções,
         essa foi a que mais se destaca.
         Podemos reaproveitar. Enquanto não fazemos o crud irei deixar esse
         botão sem ação. */}
      </form>
    </div >
  );
}
