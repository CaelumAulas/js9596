import React, { Component } from 'react';

class TabelaContatos extends Component {
    render() {
        return (
            <table class="table table-bordered table-striped">
                <thead class="thead-light">
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="tabelaContatos">

                </tbody>
            </table>
        );
    }
}

export default TabelaContatos;