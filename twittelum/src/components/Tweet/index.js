import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './tweet.css';
import NotificacaoContext from '../../contexts/NotificacaoContext';
import TweetService from '../../services/TweetService';

function Tweet( { conteudo, usuario, id, totalLikes, likeado, removivel, removeTweetCallback } ) {
    const [likeStatus, setLikeStatus] = useState(likeado);
    const [totalCurtidas, setTotalCurtidas] = useState(totalLikes);
    const setNotificacao = useContext(NotificacaoContext);
    const likeadoClass = likeStatus && 'iconHeart--active';

    const handleLike = async () => {
        try {
            const curtido = !likeStatus;
            const curtidas = curtido ? totalCurtidas + 1 : totalCurtidas - 1;
            setLikeStatus(curtido);
            setTotalCurtidas(curtidas);
            await TweetService.likeTweet(id);
        }
        catch(erro) {
            setNotificacao(erro.message);
        }
    }

    return (
        <article className="tweet">
            <div className="tweet__cabecalho">
                <img className="tweet__fotoUsuario" src={ usuario.foto } alt="" />
                <span className="tweet__nomeUsuario">{ usuario.nome }</span>
                <a href="/"><span className="tweet__userName">{ usuario.login }</span></a>
            </div>
            <p className="tweet__conteudo">
                { conteudo }
            </p>
            <footer className="tweet__footer">
                {
                    removivel &&
                    <button onClick={ () => removeTweetCallback(id) } className="btn btn--blue btn--remove">
                        X
                    </button>
                }

                <button onClick={ handleLike } className="btn btn--clean">
                    <svg className={`icon icon--small iconHeart ${likeadoClass}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
                        <defs>
                            <clipPath id="a">
                                <path d="M0 38h38V0H0v38z"></path>
                            </clipPath>
                        </defs>
                        <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                            <path d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.632-8.018-4.128-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.773.098-1.52.266-2.242C2.75 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.47.268 2.241"></path>
                        </g>
                    </svg>
                    { totalCurtidas }
                </button>
            </footer>
        </article>
    )
}

Tweet.propTypes = {
    id: PropTypes.string.isRequired,
    conteudo: PropTypes.string.isRequired,
    removivel: PropTypes.bool,
    totalLikes: PropTypes.number.isRequired,
    likeado: PropTypes.bool.isRequired,
    usuario: PropTypes.shape({
        foto: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired
    }).isRequired
}

export default Tweet