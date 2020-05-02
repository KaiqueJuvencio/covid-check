import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';
import covidApi from '../../services/covidApi';
import corona from '../../assets/corona.png'

export default function Home() {
    const [id, setId] = useState('');
    const [covidInfo, setCovidInfo] = useState([]);
    const history = useHistory();

    async function handleGetCovidInfo() {
        await covidApi.get().then(response => {
            setCovidInfo(response.data.Global);

        });
        console.log(covidInfo);

    }

    const CovidComponent = () => {
        if (covidInfo.length != 0) {
            return (
                <div>
                    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
                    <div className="global-icon">
                        <i class="em em-globe_with_meridians" aria-role="presentation" aria-label="GLOBE WITH MERIDIANS"></i>
                        <h2>Global</h2>
                    </div>
                    <table>
                        <tr>
                            <th>Confirmados</th>
                            <th>Mortes</th>
                            <th>Recuperados</th>
                        </tr>
                        <tr>
                            <td>{covidInfo.TotalConfirmed}</td>
                            <td>{covidInfo.TotalDeaths}</td>
                            <td>{covidInfo.TotalRecovered}</td>
                        </tr>
                    </table>



                    {/* {covidInfo.map(cov => (<p>{cov.Country}</p>))} */}
                </div>
            )
        } else {
            return (<h1>Sem Retorno</h1>)
        }
    }

    async function handleLogin(e) {
        e.preventDefault();


        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id); //Salva no Storage do navegador
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamete.')
        }
    }

    return (
        <div className="home-container">
            <section className="form">
                <h2 className="covid-check">COVID-CHECK</h2>
                <form onSubmit={handleLogin}>
                    <h1>Bem-Vindo ao COVID-CHECK</h1>

                    <Link className="button" to="/symptoms">
                        <FiLogIn size={16} color="#E02041" />
                        Checkar Sintomas
                    </Link>
                    <Link className="button" to="/prevention">
                        <FiLogIn size={16} color="#E02041" />
                        Prevenções
                    </Link>
                    <Link className="button" to="/treatments">
                        <FiLogIn size={16} color="#E02041" />
                        Tratamentos
                    </Link>
                </form>
            </section>
            {/* <img src={corona} alt="Virus" /> */}
            <div>
                <button onClick={() => handleGetCovidInfo()}>COVID INFO</button>
                <CovidComponent />
            </div>


        </div>

    );
}