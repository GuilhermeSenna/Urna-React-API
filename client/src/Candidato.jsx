
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Axios from 'axios'
// import "./style.css";

export default function Candidato() {
    let { candidatoID } = useParams();
    const [candidato, setCandidato] = useState({});
    const [remover, setRemover] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:3002/candidates/${candidatoID}`).then((data) => {
            setCandidato({
                nome: data.data.nome,
                numero: data.data.numero,
                id: data.data._id
            });
        });

    }, [candidatoID]);

    const deletePost = (id) => {
        Axios.delete(`http://localhost:3002/candidates/${candidatoID}`).then((response) => {
            alert("Você removeu um candidato")
        })
    }


    return (
        <div>
            <div style={{ border: '1px solid black' }}>
                <h1>{candidato.nome}</h1>
                <h2>{candidato.numero}</h2>
                {/* <button onClick={(() => deletePost(candidato.id))}>Editar</button> */}

                {remover

                    ? <div>
                        <h2>Tem certeza que deseja remover?</h2>
                        <button onClick={(() => deletePost(candidato.id))}>Remover</button>
                    </div>

                    : <button onClick={() => setRemover(true)}>Remover</button>
                }
            </div>
        </div >
    );
}
