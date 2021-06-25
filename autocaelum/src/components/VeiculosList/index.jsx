import React from 'react'
import VeiculoItem from '../VeiculoItem'
import '../../assets/css/veiculos.css';

export default function VeiculosList({ quantidade, mostrarTitulo }) {
    const listaVeiculos = []
    for (let i = 1; i <= quantidade; i++) {
        listaVeiculos.push(
            <VeiculoItem key={i} />
        );
    }

    return (
        <section className="container lista-veiculos">
            { mostrarTitulo && <h2>Veículos</h2> }
            <ul className="flex">
                { listaVeiculos }
            </ul>
        </section>
    )
}
