import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import covidApi from '../../services/covidApi';
import corona from '../../assets/corona.png'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covidInfoBrazil: [],
            covidInfoWorld: []
        };
    }

    async handleGetCovidInfo() {
        await covidApi.get().then(response => {
            const covidInfoBrazil = response.data.countries
            const covidInfoWorld = response.data.world
            this.setState({
                covidInfoBrazil,
                covidInfoWorld
            })
        });
    }

    componentDidMount() {
        this.handleGetCovidInfo()
    }

    render() {
        return (
            <div className="home-container">
                <section className="form">
                    <div className="covid-check-logo-home">
                        <img src={corona} className="App-logo" alt="Virus" />
                        <h2 className="covid-check">COVID-CHECK</h2>
                    </div>
                    <form>
                        <h1>Bem-Vindo ao COVID-CHECK</h1>

                        <Link className="button" to="/symptoms">
                            Checkar Sintomas
                    </Link>
                        <Link className="button" to="/prevention">
                            Prevenções
                    </Link>
                        <Link className="button" to="/transmission">
                            Transmissão
                    </Link>
                    </form>
                </section>

                <div className="table-container-info">
                    <div className="global-component">
                        <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
                        <div className="global-icon">
                            <i className="em em-flag-br" aria-label="Brazil Flag"></i>
                            <h2>Brasil</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Confirmados</th>
                                    <th>Mortes</th>
                                    <th>Recuperados</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.covidInfoBrazil.cases}</td>
                                    <td>{this.state.covidInfoBrazil.deaths}</td>
                                    <td>{this.state.covidInfoBrazil.recovered}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="global-component">
                        <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
                        <div className="global-icon">
                            <i className="em em-globe_with_meridians" aria-label="GLOBE WITH MERIDIANS"></i>
                            <h2>Global</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Confirmados</th>
                                    <th>Mortes</th>
                                    <th>Recuperados</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.covidInfoWorld.cases}</td>
                                    <td>{this.state.covidInfoWorld.deaths}</td>
                                    <td>{this.state.covidInfoWorld.recovered}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )

    }
}