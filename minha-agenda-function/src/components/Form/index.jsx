import { useState } from 'react';

export default function Form( { addContatoCallback } ) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addContatoCallback(nome, telefone);
        setNome('');
        setTelefone('');
    }

    const msgNome = !nome && <span className="d-block text-danger mt-1">Nome é obrigatório!</span>;
    const msgTelefone = !telefone && <span className="d-block text-danger mt-1">Telefone é obrigatório!</span>;
    const isDisabled = !nome || !telefone;

    return (
        <div class="card mb-3 p-3">
            <form id="formCadastro" class="row" onSubmit={ handleFormSubmit }>

                <div class="form-group col-md-5">
                    <label>Nome:</label>
                    <input type="text" id="inputNome" value={nome} onChange={ (e) => setNome(e.target.value) } class="form-control" placeholder="Digite o nome do contato aqui..." />
                    { msgNome }
                </div>

                <div class="form-group col-md-5">
                    <label>Telefone:</label>
                    <input type="text" id="inputTelefone" value={telefone} onChange={ (e) => setTelefone(e.target.value) } class="form-control" placeholder="Digite o telefone aqui..." />
                    { msgTelefone }
                </div>

                <div class="form-group col-md-2 mt-3 text-center">
                    <button disabled={isDisabled} id="btnSalvar" class="btn btn-primary btn-lg mt-2 w-100" type="submit">
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    );
}