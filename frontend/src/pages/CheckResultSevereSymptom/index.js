import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiAlertTriangle } from 'react-icons/fi';
import "./styles.css";

export default function SevereSymptom() {

    return (
        <div className="severe-symptoms-container">
            <div className="content">
                <section>
                    <h2 className="severe-symptoms-covid-check">COVID-CHECK</h2>       
                    <h1><FiAlertTriangle color="#ffffff" /> Sintomas Graves</h1>
                    <p className="check-in-descricao-procure">Procure atendimento médico. </p>
                    <p className="check-in-descricao">Ligue antes de ir ao local e avise os profissionais de saúde se você tiver viajado ou tido contato com alguém que voltou de viagem recentemente.</p>

                    <Link className="severe-symptoms-back-link" to="/">
                        <FiArrowLeft size={16} color="#ffffff" />
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
