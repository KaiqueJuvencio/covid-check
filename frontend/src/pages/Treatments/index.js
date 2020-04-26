import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import "./styles.css";
import api from '../../services/api'

export default function Treatments() {
    return (
        <div className="symptoms-container flex">
            <div className="content flex">
                <section>
                    <h2 className="covid-check">COVID-CHECK</h2>

                    <h1>Tratamentos</h1>
                    <p className="check-in-descricao">Não há nenhum medicamento específico para tratar ou prevenir o coronavírus (COVID-19). Algumas pessoas podem precisar da ajuda de aparelhos para respirar..</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                    <div className="treatment-description">
                        <p>MÃOS Lavar frequentemente.</p>
                        <p>COTOVELO Usar para cobrir a tosse.</p>
                        <p>ROSTO Não tocar.</p>
                        <p>ESPAÇO Manter a distância segura.</p>
                        <p>CASA Não sair, se possível.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}