import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import "./styles.css";

export default function ComumSymptom() {

    return (
        <div className="symptoms-container">
            <div className="content">
                <section>
                    <h2 className="covid-check">COVID-CHECK</h2>

                    <h1>Check-in</h1>
                    <p className="check-in-descricao">Marque as opções de acordo com os sintomas que está sentindo.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>
                <div className="check">
                    <p>COMUM</p>
                </div>
            </div>
        </div>
    )
}
