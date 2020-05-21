import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheckSquare } from 'react-icons/fi';
import "./styles.css";
import corona from '../../assets/corona.png'

export default function SymptomsCheck() {
    var checkResultPage = '/';
    function checkVerified() {
        var checkSymptoms = document.getElementsByName("check-symptom");
        var severe = false;


        for (var i = 0; i < checkSymptoms.length; i++) {
            if (checkSymptoms[i].checked === true && (checkSymptoms[i].id === "febre-alta" || checkSymptoms[i].id === "pneumonia" || checkSymptoms[i].id === "dificuldade-respirar" || checkSymptoms[i].id === "one")) {
                severe = true;
                checkResultPage = '/checkresult/severe';
                return checkResultPage;
            }
        }
        if (severe === false) {
            checkResultPage = '/checkresult/comum';
            return checkResultPage;
        }
    }

    return (
        <div className="symptoms-container">
            <div className="content">
                <section>
                    <div className="covid-check-logo">
                        <img src={corona} className="App-logo" alt="Virus" />
                        <h2 className="covid-check">COVID-CHECK</h2>
                    </div>

                    <h1><FiCheckSquare color="#E02041" />  Check-in</h1>
                    <p className="check-in-descricao">Marque as opções de acordo com os sintomas que está sentindo.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>
                <div className="check">
                    <form onSubmit={checkVerified}>
                        <div className="check-input">
                            <label class="container">Tosse Seca
                            <input type="checkbox" id="tosse" name="check-symptom" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="check-input">
                            <label class="container">Cansaço
                            <input type="checkbox" id="cansaco" name="check-symptom" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="check-input">
                            <label class="container">Dor de Garganta
                            <input type="checkbox" id="dor-garganta" name="check-symptom" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="check-input">
                            <label class="container">Nariz Congestionado
                            <input type="checkbox" id="nariz-congestionado" name="check-symptom" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="check-input">
                            <label class="container">Perda de Paladar
                            <input type="checkbox" id="perda-paladar" name="check-symptom" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="check-input">
                            <label class="container">Perda de Olfato
                            <input type="checkbox" id="perda-olfato" name="check-symptom" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="check-input">
                            <label class="container">Diarreia
                            <input type="checkbox" id="diarreia" name="check-symptom" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="check-input">
                            <label class="container">Febre Alta
                            <input type="checkbox" id="febre-alta" name="check-symptom" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="check-input">
                            <label class="container">Pneumonia
                            <input type="checkbox" id="pneumonia" name="check-symptom" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="check-input">
                            <label class="container">Dificuldade de Respirar
                            <input type="checkbox" id="dificuldade-respirar" name="check-symptom" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <Link className="button" to={checkVerified}>
                            Checar
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}