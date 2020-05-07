import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import corona from '../../assets/corona.png'

export default function Prevention() {
    return (
        <div className="prevention-container">
            <div className="content">
                <section>
                    <div className="covid-check-logo">
                        <img src={corona} className="App-logo" alt="Virus" />
                        <h2 className="covid-check">COVID-CHECK</h2>
                    </div>

                    <h1>Prevenções</h1>
                    <p>Aqui estão alguns métodos de prevenções para proteger você e sua família.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                </Link>
                </section>
                <div className="prevention-description">
                    <p>MÃOS Lavar frequentemente.</p>
                    <p>COTOVELO Usar para cobrir a tosse.</p>
                    <p>ROSTO Não tocar.</p>
                    <p>ESPAÇO Manter a distância segura.</p>
                    <p>CASA Não sair, se possível.</p>
                </div>
            </div>
        </div>
    );
}