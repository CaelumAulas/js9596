import React, { Component } from 'react';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Form from './components/Form';
import TabelaContatos from './components/TabelaContatos';

class MinhaAgenda extends Component {
  state = {
    contatos: []
  }

  addContato = (nome, telefone) => {
    const contatos = this.state.contatos;
    const contato = { nome, telefone };
    contatos.push(contato);
    this.setState({ contatos });
  }

  removeContato = (indice) => {
    const contatos = this.state.contatos;
    contatos.splice(indice, 1);
    this.setState({ contatos });
  }

  render() {
    return (
      <>
        <Cabecalho titulo="Minha Agenda" texto="Confira abaixo sua lista de contatos cadastrados." />
        
        <Container>
          <Form addContatoCallback={ this.addContato } />
        </Container>

        <Container>
          <TabelaContatos removeContatoCallback={ this.removeContato } listaContatos={ this.state.contatos } />
        </Container>
      </>
    );
  }
}

export default MinhaAgenda;
