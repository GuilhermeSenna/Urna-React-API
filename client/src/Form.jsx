import React, { useState } from "react";
//import TextField from "@material-ui/core/TextField";
//import Button from "@material-ui/core/Button";
import Axios from 'axios'
import "./style.css";

import ReactNotification from 'react-notifications-component'
import { store } from "react-notifications-component";
import "animate.css"
import 'react-notifications-component/dist/theme.css'
//import { useHistory } from 'react-router-dom'

export default function Add(props) {
  // let history = useHistory(); // http://localhost:3000

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

          store.addNotification({
            title: "Erro",
            message: `Não foi possível adicionar ${nome}, tente novamente.`,
            type: "danger",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
              duration: 2000,
              showIcon: true,
              pauseOnHover: true
            },
            width: 600
          })
        } else {
          console.log('Inserido com sucesso!');

          store.addNotification({
            title: "Sucesso",
            message: `${nome} adicionado com sucesso`,
            type: "success",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
              duration: 2000,
              showIcon: true,
              pauseOnHover: true
            },
            width: 600
          })
          // props.history.push({
          //   pathname: '/',
          //   search: '?query=abc',
          //   state: { tipo: 'con', candidato }
          // });
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
        <ReactNotification />

      </form>
    </div >
  );
}
