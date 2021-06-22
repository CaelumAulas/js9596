import React, { Component } from 'react';

class TabelaContatos extends Component {
    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead className="thead-light">
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="tabelaContatos">
                    {
                       this.props.listaContatos.map((contato, indice) => {
                            return (
                                <tr key={indice}>
                                    <td>{contato.nome}</td>
                                    <td>{contato.telefone}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={ () => this.props.removeContatoCallback(indice) }>
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            )
                       })
                    }
                </tbody>
            </table>
        );
    }
}

export default TabelaContatos;