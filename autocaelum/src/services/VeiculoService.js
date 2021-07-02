import { AUTOCAELUM_API } from "../utils";

export default class VeiculoService 
{
    static async getVeiculos(quantidade = 0, randomico = false) {
        const url = AUTOCAELUM_API;
        const params = new URLSearchParams();

        if (quantidade > 0) {
            params.append('qtd', quantidade);
        }

        if (randomico) {
            params.append('random', true);
        }

        const resposta = await fetch(url + '?' + params);
        const veiculos = await resposta.json();
        return veiculos;
    }
}