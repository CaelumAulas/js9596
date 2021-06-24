import React from 'react'
import VeiculoItem from '../VeiculoItem'
import '../../assets/css/veiculos.css';

export default function VeiculosList({ quantidade }) {
    const listaVeiculos = []
    for (let i = 1; i <= quantidade; i++) {
        listaVeiculos.push(
            <VeiculoItem key={i} />
        );
    }

    return (
        <section class="container lista-veiculos">
            <h2>Veículos</h2>
            <ul class="flex">
                { listaVeiculos }
            </ul>
        </section>
    )
}
