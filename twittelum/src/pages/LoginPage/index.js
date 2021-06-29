import { useContext, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'
import './loginPage.css'
import LoginService from '../../services/LoginService';
import NotificacaoContext from '../../contexts/NotificacaoContext';
import useValidations from '../../hooks/useValidations';
import useFormValidator from '../../hooks/useFormValidator';

function LoginPage() {
    const inputLogin = useRef();
    const inputSenha = useRef();
    const history = useHistory();
    const setNotificacao = useContext(NotificacaoContext);
    const { isEmpty } = useValidations();
    const { erros, isFormValid, validate } = useFormValidator({
        login: isEmpty('Login é obrigatório!'),
        senha: isEmpty('Senha é obrigatória!')
    });

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        let login = inputLogin.current.value.trim();
        let senha = inputSenha.current.value.trim();

        try 
        {
            await LoginService.autenticar(login, senha);
            setNotificacao('Login realizado com sucesso!');
            history.push('/');
        }
        catch(erro) {
            setNotificacao(erro.message);
        }
    }

    return (
        <>
            <Helmet>
                <title>Twittelum | Entrar na sua Conta</title>
            </Helmet>
            <Cabecalho />
            <div className="loginPage">
                <div className="container">
                    <Widget>
                        <h2 className="loginPage__title">Seja bem vindo!</h2>
                        <form onSubmit={ handleLoginSubmit } className="loginPage__form" action="/">
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="login">Login</label>
                                <input ref={inputLogin} onBlur={validate} className="loginPage__input" type="text" id="login" name="login" />
                                {erros.login && <span className="login__status">{erros.login}</span>}
                            </div>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="senha">Senha</label>
                                <input ref={inputSenha} onBlur={validate} className="loginPage__input" type="password" id="senha" name="senha" />
                                {erros.senha && <span className="login__status">{erros.senha}</span>}
                            </div>
                            <div className="loginPage__inputWrap">
                                <button disabled={!isFormValid} className="loginPage__btnLogin" type="submit">
                                    Logar
                                </button>
                            </div>
                        </form>
                    </Widget>
                </div>
            </div>
        </>
    )
}


export default LoginPage