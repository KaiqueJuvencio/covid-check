import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import corona from '../../assets/corona.png'

export default function Prevention() {
    return (
        <div className="prevention-container">
            <div className="content">
                <section>
                    <div className="covid-check-logo">
                        <img src={corona} className="App-logo" alt="Virus" />
                        <h2 className="covid-check">COVID-CHECK</h2>
                    </div>

                    <h1>Prevenção</h1>
                    <p>Aqui estão alguns métodos de prevenções para proteger você e sua família.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                </Link>
                </section>
                <div className="prevention-description">
                    <p>Lavar as mãos frequentemente por cerca de 20 segundos, ou utilize álcool em gel 70%.</p>
                    <p>Use o cotovelo, braço ou um lenço para cobrir a boca ao tossir ou espirrar e não as mãos.</p>
                    <p>Não toque em qualquer parte do rosto com as mãos não lavadas.</p>
                    <p>Utilize máscaras caso precise sair de sua residência.</p>
                    <p>Evite aglomerações e contatos físicos como abraços, beijos e apertos de mãos.</p>
                    
                    <h3 className="ao-sair">Ao sair e retornar de casa</h3> 
                    <p>Lavar os sapatos.</p> 
                    <p>Trocar de roupas e tomar banho.</p>
                    <p>Higienize com frequência o celular.</p>
                    <p>Desinfetar as patas do seu pet ao passear com ele.</p>

                    <a className="link-mascara" href="http://portal.anvisa.gov.br/documents/219201/4340788/NT+M%C3%A1scaras.pdf/bf430184-8550-42cb-a975-1d5e1c5a10f7">Recomendação oficial de como fazer e usar máscaras</a>
                </div>
            </div>
        </div>
    );
}