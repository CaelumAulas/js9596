import React, { Component } from 'react';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Form from './components/Form';
import TabelaContatos from './components/TabelaContatos';

class MinhaAgenda extends Component {
  render() {
    return (
      <>
        <Cabecalho titulo="Minha Agenda" texto="Confira abaixo sua lista de contatos cadastrados." />
        
        <Container>
          <Form />
        </Container>

        <Container>
          <TabelaContatos />
        </Container>
      </>
    );
  }
}

export default MinhaAgenda;
