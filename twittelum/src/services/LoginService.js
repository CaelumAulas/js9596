import { TWITTELUM_API } from "../utils";

export default class LoginService {

    static async autenticar(login, senha) 
    {
        const dadosLogin = { login, senha };
        const resposta = await fetch( TWITTELUM_API + '/login', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(dadosLogin)
        });

        const dadosServidor = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dadosServidor.message);
        }

        const token = dadosServidor.token;
        if (!token) {
            throw new Error('TOKEN não encontrado!');
        }

        localStorage.setItem('TOKEN', token);
    }

}