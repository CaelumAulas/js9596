import React from 'react';
import { Helmet } from 'react-helmet-async';
import MasterLayout from '../../components/MasterLayout';
import VeiculosList from '../../components/VeiculosList';

export default function VeiculosPage() {
    return (
        <MasterLayout>
            <Helmet>
                <title>AutoCaelum | Veículos</title>
            </Helmet>
            <main className="container lista-veiculos">
                <h1 className="cabecalho-pagina">Veículos</h1>
                <VeiculosList quantidade={12} mostrarTitulo={false} />
            </main>
        </MasterLayout>
    )
}