import React from 'react'
import { Link } from 'react-router-dom';

export default function VeiculoItem({ foto, id, modelo, preco }) {
    return (
        <li>
            <img src={ foto } alt={ modelo } />
            <h3>{ modelo }</h3>
            <p>
                { preco }
            </p>
            <Link to="/veiculos" className="lnk-destaque">
                Ver Detalhes
            </Link>
        </li>
    )
}