import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import "./styles.css";
import api from '../../services/api'

export default function SymptomsCheck() {
    return (
        <div className="symptoms-container flex">
            <div className="content flex">
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
                    <div className="check-input">
                        <input type="checkbox" id="tosse" value="tosse-seca" /> 
                        <label for="tosse">Tosse Seca</label>
                        <span class="checkmark"></span>
                    </div>
                    <div className="check-input">
                        <input type="checkbox" id="cansaco" value="cansaco" />
                        <label for="cansaco">Cansaço</label>
                    </div>
                    <div className="check-input">
                        <input type="checkbox" id="febre" value="febre" /> 
                        <label for="febre">Febre</label>
                    </div>
                    <div className="check-input">
                        <input type="checkbox" id="dor-garganta" value="dor-garganta" />
                        <label for="dor-garganta">Dor de Garganta</label>
                    </div>
                    <div className="check-input">
                        <input type="checkbox"  id="nariz-congestionado" value="nariz-congestionado" />
                        <label for="nariz-congestionado">Nariz Congestionado</label>
                    </div>
                    <div className="check-input">
                        <input type="checkbox"  id="diarreia" value="diarreia" />
                        <label for="diarreia">Diarreia</label>
                    </div>
                    <div className="check-input">
                        <input type="checkbox"  id="febre-alta" value="febre-alta" /> 
                        <label for="febre-alta">Febre Alta</label>
                    </div>
                    <div className="check-input">
                        <input type="checkbox" id="pneumonia" value="pneumonia" /> 
                        <label for="pneumonia">Pneumonia</label>
                    </div>
                    <div className="check-input">
                        <input type="checkbox" id="dificuldade-respirar" value="dificuldade-respirar" /> 
                        <label for="dificuldade-respirar">Dificuldade de Respirar</label>
                    </div>
                    <button className="button" type="submit">Checkar</button>

                </div>
            </div>
        </div>
    )
}