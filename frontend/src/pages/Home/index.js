import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';
import corona from '../../assets/corona.png'

export default function Home(){
    const[id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id); //Salva no Storage do navegador
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }catch (err){
            alert('Falha no login, tente novamete.')
        }
    }

    return(
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
            <img src={corona} alt="Virus"/>
        </div>
        
    );
}