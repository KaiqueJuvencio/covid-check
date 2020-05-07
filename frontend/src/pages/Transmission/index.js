import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShare2 } from 'react-icons/fi';
import "./styles.css";
import corona from '../../assets/corona.png'


export default function Transmission() {
    return (
        <div className="transmission-container">
            <div className="content">
                <section>
                    <div className="covid-check-logo">
                        <img src={corona} className="App-logo" alt="Virus" />
                        <h2 className="covid-check">COVID-CHECK</h2>
                    </div>
                    <h1><FiShare2 color="#E02041" /> Transmissão</h1>
                    <p className="check-in-descricao-procure">A principal forma de contágio do novo coronavírus é o contato com uma pessoa infectada, que transmite o vírus por meio de tosse e espirros.</p>
                    <p className="check-in-descricao-procure">Ele também se propaga quando a pessoa toca em uma superfície ou objeto contaminado e depois nos olhos, nariz ou boca.</p>

                    <Link className="transmission-back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>
                {/* <div className="check">
                    <p>GRAVE</p>
                </div> */}
            </div>
        </div>
    )
}