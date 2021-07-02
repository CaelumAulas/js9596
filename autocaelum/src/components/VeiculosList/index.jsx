import React, { useEffect, useState } from 'react'
import VeiculoItem from '../VeiculoItem';
import VeiculoService from '../../services/VeiculoService';
import '../../assets/css/veiculos.css';

export default function VeiculosList({ quantidade, mostrarTitulo, randomico }) {
    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        VeiculoService.getVeiculos(quantidade, randomico).then(listaVeiculos => setVeiculos(listaVeiculos));
    }, []);

    return (
        <section className="container lista-veiculos">
            { mostrarTitulo && <h2>Veículos</h2> }
            <ul className="flex">
                {
                    veiculos.map(veiculo => {
                        return (
                            <VeiculoItem
                                key={veiculo.id}
                                id={veiculo.id}
                                modelo={veiculo.modelo}
                                foto={veiculo.foto}
                                preco={veiculo.preco}
                            />
                        )
                    })
                }
            </ul>
        </section>
    )
}
