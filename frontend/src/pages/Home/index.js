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
            setCovidInfo(response.data);

        });
        console.log(covidInfo.world);

    }

    const CovidComponentGlobal = () => {
        if (covidInfo.length != 0) {
            return (
                <div className="global-component">
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
                            <td>{covidInfo.world.cases}</td>
                            <td>{covidInfo.world.deaths}</td>
                            <td>{covidInfo.world.recovered}</td>
                        </tr>
                    </table>
                    {/* {covidInfo.map(cov => (<p>{cov.Country}</p>))} */}
                </div>
            )
        } else {
            return (<h1>Sem Retorno</h1>)
        }
    }

    const CovidComponentBrazil = () => {
        if (covidInfo.length != 0) {
            return (
                <div className="global-component">
                    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
                    <div className="global-icon">
                        <i class="em em-flag-br" aria-role="presentation" aria-label="Brazil Flag"></i>
                        <h2>Brasil</h2>
                    </div>
                    <table>
                        <tr>
                            <th>Confirmados</th>
                            <th>Mortes</th>
                            <th>Recuperados</th>
                        </tr>
                        <tr>
                            <td>{covidInfo.countries.cases}</td>
                            <td>{covidInfo.countries.deaths}</td>
                            <td>{covidInfo.countries.recovered}</td>
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
                <div className="covid-check-logo">
                    <img src={corona} alt="Virus" />
                    <h2 className="covid-check">COVID-CHECK</h2>
                </div>
                <form onSubmit={handleLogin}>
                    <h1>Bem-Vindo ao COVID-CHECK</h1>

                    <Link className="button" to="/symptoms">
                        Checkar Sintomas
                    </Link>
                    <Link className="button" to="/prevention">
                        Prevenções
                    </Link>
                    <Link className="button" to="/treatments">
                        Tratamentos
                    </Link>
                </form>
            </section>
            <div className="table-container-info">
                <button onClick={() => handleGetCovidInfo()}>COVID INFO</button>
                <CovidComponentGlobal />
                <CovidComponentBrazil />
            </div>
        </div>

    );
}