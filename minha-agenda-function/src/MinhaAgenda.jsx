import { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Form from './components/Form';
import TabelaContatos from './components/TabelaContatos';

export default function MinhaAgenda() {
  const [contatos, setContatos] = useState([]);

  const addContato = (nome, telefone) => {
    const contato = { nome, telefone };
    contatos.push(contato);
    setContatos([ ...contatos ]);
  }

  const removeContato = (indice) => {
    contatos.splice(indice, 1);
    setContatos([ ...contatos ]);
  }

  return (
      <>
        <Cabecalho titulo="Minha Agenda" texto="Confira abaixo sua lista de contatos cadastrados." />
        
        <Container>
          <Form addContatoCallback={ addContato } />
        </Container>

        <Container>
          <TabelaContatos removeContatoCallback={ removeContato } listaContatos={ contatos } />
        </Container>
      </>
  );
}
