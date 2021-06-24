import React from 'react'
import { Link } from 'react-router-dom';

export default function VeiculoItem({ foto, id, modelo, preco }) {
    return (
        <li>
            <img src="https://via.placeholder.com/232x129" alt="Chevrolet Cruze" />
            <h3>Chevrolet Cruze LT 2012 Flex (Aut.)</h3>
            <p>
                R$ 35.500,00
            </p>
            <Link to="/veiculos" className="lnk-destaque">
                Ver Detalhes
            </Link>
        </li>
    )
}