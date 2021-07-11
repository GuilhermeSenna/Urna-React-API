
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Axios from 'axios'
import "./style.css";

export default function Candidato(props) {
    let { candidatoID } = useParams();
    const [candidato, setCandidato] = useState({});
    const [remover, setRemover] = useState(false);
    const [editar, setEditar] = useState(false);

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');


    useEffect(() => {
        Axios.get(`http://localhost:3002/candidates/${candidatoID}`).then((data) => {
            setCandidato({
                nome: data.data.nome,
                numero: data.data.numero,
                id: data.data._id
            });

            setNome(data.data.nome);
            setNumero(data.data.numero);
        });

    }, [candidatoID]);

    const deletePost = (id) => {
        Axios.delete(`http://localhost:3002/candidates/${candidatoID}`).then((response) => {
            props.history.push({
                pathname: '/',
                search: '?query=abc',
                state: { tipo: 'del', candidato }
            });
        })
    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        const candidato = {
            nome,
            numero
        }

        await Axios.put(`http://localhost:3002/candidates/${candidatoID}`, candidato)
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
        <div className="candidatoesp">
            <div style={{ border: '1px solid black' }}>
                <h1>{candidato.nome}</h1>
                <h2>{candidato.numero}</h2>
                {/* <button onClick={(() => deletePost(candidato.id))}>Editar</button> */}

                {remover

                    ? <div>
                        <h2>Tem certeza que deseja remover?</h2>
                        <button onClick={(() => deletePost(candidato.id))}>Remover</button>
                    </div>

                    : <button onClick={() => {
                        setRemover(true);
                        setEditar(false);
                    }}>Remover</button>
                }

                {editar

                    ? <form onSubmit={handleSubmit}>
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

                        <br /><br /><input type="submit" value="Editar" />

                        {/* você pode alternar a cor entre algumas opções,
                     essa foi a que mais se destaca.
                     Podemos reaproveitar. Enquanto não fazemos o crud irei deixar esse
                     botão sem ação. */}
                    </form>

                    : <button onClick={() => {
                        setEditar(true);
                        setRemover(false);
                    }}>Editar</button>

                }
            </div>
        </div >
    );
}
