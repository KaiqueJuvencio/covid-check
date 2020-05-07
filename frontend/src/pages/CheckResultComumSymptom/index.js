import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiAlertTriangle, FiCheckSquare } from 'react-icons/fi';
import "./styles.css";

export default function ComumSymptom() {

    return (
        <div className="comum-symptoms-container">
            <div className="content">
                <section>
                    <h2 className="comum-symptoms-covid-check">COVID-CHECK</h2>
                    <h1><FiAlertTriangle color="#ffffff" /> Sintomas Comum</h1>
                    <p className="check-in-descricao">Você apresenta sintomas leves, fique em casa até se recuperar. </p>

                    <p className="check-in-descricao-alivio">Para aliviar os sintomas:</p>

                    <p className="check-in-descricao"><FiCheckSquare color="#40ffc6" />  Descanse e durma;</p>
                    <p className="check-in-descricao"><FiCheckSquare color="#40ffc6" />  Mantenha o corpo aquecido;</p>
                    <p className="check-in-descricao"><FiCheckSquare color="#40ffc6" />  Beba bastante líquido;</p>
                    <p className="check-in-descricao"><FiCheckSquare color="#40ffc6" />  Use um umidificador de ar ou tome um banho quente para aliviar a tosse e a dor de garganta.</p>


                    <Link className="comum-symptoms-back-link" to="/">
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
