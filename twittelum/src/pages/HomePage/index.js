import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import FormTweet from '../../components/FormTweet';
import TweetService from '../../services/TweetService';
import NotificacaoContext from '../../contexts/NotificacaoContext';

function HomePage() {
    const [listaTweets, setListaTweets] = useState([]);
    const setNotificacao = useContext(NotificacaoContext);

    useEffect(() => {
        TweetService.getTweets().then(tweets => setListaTweets(tweets));
    }, []);

    const addTweet = async (textoTweet) => {
        try {
            const tweetAdicionado = await TweetService.addTweet(textoTweet);
            setListaTweets( [tweetAdicionado, ...listaTweets] );
        }
        catch(erro) {
            setNotificacao(erro.message);
        }
    }

    return (
      <Fragment>
        <Helmet>
             <title>Twittelum ({String(listaTweets.length)})</title>
        </Helmet> 
        <Cabecalho>
            <NavMenu usuario="@omariosouto" />
        </Cabecalho>
        <div className="container">
            <Dashboard>
                <Widget>
                    <FormTweet addTweetCallback={ addTweet } />
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        {
                            listaTweets.map((tweet) => {
                                return (
                                    <Tweet 
                                        key={tweet._id}
                                        id={tweet._id}
                                        conteudo={tweet.conteudo}
                                        usuario={tweet.usuario}
                                    />
                                )
                            })
                        }
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
}

export default HomePage;
