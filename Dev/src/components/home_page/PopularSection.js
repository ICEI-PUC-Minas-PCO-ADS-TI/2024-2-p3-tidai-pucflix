import '../../assets/css/home_page/PopularSection.css';
import Carrossel from './Carrossel';
import Pergunta from './Pergunta';

function PopularSection() {
    return (

        <div className='PopularSection'>
            <h1>Titulos de Sucesso no nosso catalogo</h1>
            <Carrossel />
            <h1>Perguntas</h1>
            <h1>Perguntas</h1>
            <Pergunta pergunta="O que é um título popular?" resposta="Um título popular é um filme ou série que está entre os mais assistidos do nosso catálogo." />
            <Pergunta pergunta="Como eu posso adicionar um título aos favoritos?" resposta="Você pode clicar no ícone de coração ao lado do título para adicioná-lo à sua lista de favoritos." />
            <Pergunta pergunta="Posso baixar filmes para assistir offline?" resposta="Sim, você pode baixar títulos selecionados para assistir offline no nosso aplicativo." />
        </div>

    );
}

export default PopularSection;
