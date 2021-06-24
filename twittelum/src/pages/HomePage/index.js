import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import FormTweet from '../../components/FormTweet';

function HomePage() {
    const [listaTweets, setListaTweets] = useState([]);

    const addTweet = (tweet) => {
        listaTweets.unshift(tweet);
        setListaTweets([ ...listaTweets ]);
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
                            listaTweets.map((tweet, indice) => {
                                return (
                                    <Tweet 
                                        key={indice}
                                        texto={tweet}
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