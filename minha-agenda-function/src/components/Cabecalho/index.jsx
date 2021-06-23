export default function Cabecalho({ titulo, texto }) {
    return (
        <div class="jumbotron">
            <h1 class="display-4">{ titulo }</h1>
            <p class="lead">
                { texto }
            </p>
        </div>
    );
}

Cabecalho.defaultProps = {
    titulo: 'Não informado',
    texto: 'Não informado'
}
