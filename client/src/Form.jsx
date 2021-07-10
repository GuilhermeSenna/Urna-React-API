import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from 'axios'
import "./style.css";

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
      .then((response) => {
        console.log(response)
        if (typeof response.data.name !== "undefined") {
          console.log('Erro, tente novamente com outro número de candidato')
        } else {
          console.log('Inserido com sucesso!');
        }
      }, (error) => {
        console.log(error);
      });
  }

  return (
    <div className="Form">
      <h1>Adicionar um novo candidato:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do candidato:
        </label>
        <input type="text" value={nome} onChange={(e) => {
          setNome(e.target.value)
        }} />

        <br /><br />
        <label>
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
