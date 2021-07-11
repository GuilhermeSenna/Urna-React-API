import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import "./style.css";
import { useHistory } from 'react-router-dom'

export default function App(props) {
  let cand = undefined;
  let tipo;

  if (props.texto.location.state !== undefined) {
    cand = props.texto.location.state.candidato
    tipo = props.texto.location.state.tipo

    console.log(cand)
    console.log(tipo)
  }



  let history = useHistory(); // http://localhost:3000

  const [candidatos, setCandidatos] = useState([]);

  const getData = async () => {
    const res = await Axios.get('http://localhost:3002/candidates');
    setCandidatos(res.data)
  }

  useEffect(() => {
    getData();


  }, [])

  return (
    <div className="App">
      {cand === undefined
        ? null
        : [(tipo === 'del')
          ? <h1 style={{ color: "#CA3433" }} className="aviso">Candidato removido - {cand.nome}({cand.numero})</h1>
          : [(tipo === 'con')
            ? <h1 style={{ color: "#00A86B" }} className="aviso"> Novo candidato - {cand.nome}({cand.numero})</h1>
            : null
          ]
        ]
      }
      <h1>Lista de candidatos</h1>
      <h2>{candidatos.length} candidato(s) cadastrado(s).</h2>
      <div className="candidatos">
        {/* <h2> Nenhum candidato cadastrado ainda...</h2> */}
        {
          candidatos.map((val, key) => {
            return (
              <div className="candidato" key={key} onClick={() => (history.push(`/candidato/${val._id}`))}>
                <h3><strong>Nome:</strong> {val.nome}</h3>
                <h3><strong>Número do candidato:</strong> {val.numero}</h3>
              </div>
            )
          })}

        {!(candidatos.length > 0) ? <h3>Nenhum candidato inserido ainda...</h3> : null}
      </div>
    </div>
  );
}
