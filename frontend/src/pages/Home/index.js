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
            console.log(this.state.covidInfoBrazil.cases)
            console.log(this.state.covidInfoWorld.cases)
        });
    }

    componentDidMount() {
        this.handleGetCovidInfo()
    }

    render() {
        return (
            <div className="home-container">
                <section className="form">
                    <div className="covid-check-logo">
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
                                <td>{this.state.covidInfoBrazil.cases}</td>
                                <td>{this.state.covidInfoBrazil.deaths}</td>
                                <td>{this.state.covidInfoBrazil.recovered}</td>
                            </tr>
                        </table>
                    </div>

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
                                <td>{this.state.covidInfoWorld.cases}</td>
                                <td>{this.state.covidInfoWorld.deaths}</td>
                                <td>{this.state.covidInfoWorld.recovered}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )

    }
}