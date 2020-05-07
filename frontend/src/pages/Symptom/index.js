import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import "./styles.css";
import Home from '../Home';

export default function SymptomsCheck() {
    var teste = '/a';
    function checkVerified() {
        var checkSymptoms = document.getElementsByName("check-symptom");
        var grave = false;
        

        for (var i = 0; i < checkSymptoms.length; i++) {
            if (checkSymptoms[i].checked == true && (checkSymptoms[i].id == "febre-alta" || checkSymptoms[i].id == "pneumonia" || checkSymptoms[i].id == "dificuldade-respirar")) {
                grave = true;
                teste = '/checkresult/severe';
                return teste;
            }
        }
        if (grave == false) {
            teste = '/checkresult/comum';
            return teste;
        }
    }

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
                    <form onSubmit={checkVerified}>
                        <div className="check-input">
                            <input type="checkbox" id="tosse" name="check-symptom" value="tosse" />
                            <label htmlFor="tosse">Tosse Seca</label>
                        </div>
                        <div className="check-input">
                            <input type="checkbox" id="cansaco" value="cansaco" name="check-symptom" />
                            <label htmlFor="cansaco">Cansaço</label>
                        </div>
                        <div className="check-input">
                            <input type="checkbox" id="febre" value="febre" name="check-symptom" />
                            <label htmlFor="febre">Febre</label>
                        </div>
                        <div className="check-input">
                            <input type="checkbox" id="dor-garganta" value="dor-garganta" name="check-symptom" />
                            <label htmlFor="dor-garganta">Dor de Garganta</label>
                        </div>
                        <div className="check-input">
                            <input type="checkbox" id="nariz-congestionado" value="nariz-congestionado" name="check-symptom" />
                            <label htmlFor="nariz-congestionado">Nariz Congestionado</label>
                        </div>
                        <div className="check-input">
                            <input type="checkbox" id="diarreia" value="diarreia" name="check-symptom" />
                            <label htmlFor="diarreia">Diarreia</label>
                        </div>
                        <div className="check-input">
                            <input type="checkbox" id="febre-alta" value="febre-alta" name="check-symptom" />
                            <label htmlFor="febre-alta">Febre Alta</label>
                        </div>
                        <div className="check-input">
                            <input type="checkbox" id="pneumonia" value="pneumonia" name="check-symptom" />
                            <label htmlFor="pneumonia">Pneumonia</label>
                        </div>
                        <div className="check-input">
                            <input type="checkbox" id="dificuldade-respirar" value="dificuldade-respirar" name="check-symptom" />
                            <label htmlFor="dificuldade-respirar">Dificuldade de Respirar</label>
                        </div>
                        <Link className="button" to={checkVerified}>
                            Checkar
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}