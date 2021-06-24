import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/masterpage.css';
import logoTopo from '../../assets/images/logo-autocaelum-topo.png';
import logoRodape from '../../assets/images/logo-rodape.png';
import Menu from '../Menu';
import RedesSociais from '../RedesSociais';

export default function MasterLayout({ children }) {
    return (
        <>
            <header id="topo">
                <div className="container flex">
                    <img src={logoTopo} alt="AutoCaelum" />

                    <form className="flex" action="">
                        <label htmlFor="termo">Caixa de pesquisa</label>
                        <input type="text" name="termo" id="termo" placeholder="Digite sua pesquisa..." />
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>

                    <Link to="/contato" className="lnk-destaque lnk-financiamento">
                        <i className="fas fa-dollar-sign"></i> Financiamento
                    </Link>
                </div>

                <Menu>
                    <RedesSociais />
                </Menu>
            </header>

            { children }

            <footer id="rodape">
                <div className="container flex">
                    <img src={logoRodape} alt="Logo da AutoCaelum" />
                    <RedesSociais />
                </div>

                <div className="container flex">
                    <address>
                        Rua Guarujá, 589 Vila Madalena <br />
                        São Paulo / SP
                    </address>

                    <p>
                        Copyright &copy; AutoCaelum<br />
                        Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </>
    )
}
