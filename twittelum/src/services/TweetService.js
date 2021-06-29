import { TWITTELUM_API, getAuthToken } from "../utils";

export default class TweetService {
    /**
     * Adiciona um Tweet para o usuário atual
     * @param {string} conteudo     Conteúdo do Tweet
     * @return {Promise<object>}
     */
    static async addTweet(conteudo) {
        const url = TWITTELUM_API + '/tweets?X-AUTH-TOKEN=' + getAuthToken();
        const resposta = await fetch( url, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify( { conteudo } ) 
        });

        if (!resposta.ok) {
            throw new Error('Erro ao salvar seu Tweet. Tente novamente!');
        }

        const tweetServidor = await resposta.json();
        return tweetServidor;
    }

    /**
     * Retorna a lista de tweets do servidor
     * @returns {Promise<Array>}
     */
    static async getTweets() {
        const url = TWITTELUM_API + '/tweets?X-AUTH-TOKEN=' + getAuthToken();
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error('Erro ao retornar a lista de tweets do servidor!');
        }

        const tweets = await resposta.json();
        return tweets;
    }
}

