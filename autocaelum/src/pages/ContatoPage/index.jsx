import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import MasterLayout from '../../components/MasterLayout';
import '../../assets/css/fale-conosco.css';

export default function ContatoPage() {
    const inputNome = useRef();
    const inputEmail = useRef();
    const inputTel = useRef();
    const inputAssunto = useRef();
    const inputMensagem = useRef();

    const handleContatoSubmit = (e) => {
        e.preventDefault();
        let nome = inputNome.current.value.trim();
        let email = inputEmail.current.value.trim();
        let tel = inputTel.current.value.trim();
        let assunto = inputAssunto.current.value.trim();
        let mensagem = inputMensagem.current.value.trim();

        if (!nome || !email || !assunto || !mensagem) {
            alert('Por favor, preencha os campos obrigatórios!');
        }
        else {
            alert('Mensagem enviada com sucesso!');
        }
    }


    return (
        <MasterLayout>
            <Helmet>
                <title>AutoCaelum | Fale conosco</title>
            </Helmet>
            <main className="container fale-conosco">
                <h1 className="cabecalho-pagina">Fale conosco</h1>
                <p>
                    Para entrar em contato conosco, preencha o formulário abaixo:
                </p>
                <div className="flex">
                    <form onSubmit={ handleContatoSubmit }>
                        <div className="campo">
                            <input type="text" ref={inputNome} placeholder="* Seu nome:" />
                        </div>
                        <div className="campo">
                            <input type="text" ref={inputEmail} placeholder="* Seu e-mail:" />
                        </div>
                        <div className="campo">
                            <input type="text" ref={inputTel} placeholder="Seu telefone:" />
                        </div>
                        <div className="campo">
                            <input type="text" ref={inputAssunto} placeholder="* Assunto da mensagem:" />
                        </div>
                        <div className="campo">
                            <textarea ref={inputMensagem} placeholder="* Digite sua mensagem aqui..."></textarea>
                        </div>
                        <div className="campo">
                            <button className="btn lnk-destaque">
                                Enviar
                            </button>
                        </div>
                    </form>
                    <iframe title="Mapa da AutoCaelum" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.448598130898!2d-46.634653385383224!3d-23.588239368469686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum%20-%20Escola%20de%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1624224472643!5m2!1spt-BR!2sbr" style={ { border:0 } } allowFullScreen={true} loading="lazy"></iframe>
                </div>
            </main>
        </MasterLayout>
    )
}
