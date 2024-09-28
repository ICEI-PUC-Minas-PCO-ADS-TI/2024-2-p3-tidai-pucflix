import '../../assets/css/home_page/PopularSection.css';
import Carrossel from './Carrossel';
import Pergunta from './Pergunta';
import Footer from './Footer';

function PopularSection() {
    return (

        <div className='PopularSection'>
            <h1>Titulos de Sucesso no nosso catalogo</h1>
            <Carrossel />

            <h1>Perguntas</h1>
            <div className='container'>
                <Pergunta pergunta="O que é a PucFlix?" resposta="A PucFlix é um projeto da faculdade PUC que oferece um catálogo de filmes e séries de graça para os alunos e a comunidade acadêmica." />
                <Pergunta pergunta="Quanto custa?" resposta="A PucFlix é totalmente gratuita." />
                <Pergunta pergunta="O que posso assistir?" resposta="Na PucFlix, você pode assistir a uma variedade de filmes e séries de diferentes gêneros, disponíveis para a comunidade acadêmica." />
                <Pergunta pergunta="A PucFlix é adequada para crianças?" resposta="Sim, a PucFlix oferece conteúdo variado, incluindo filmes e séries adequados para diferentes faixas etárias. No entanto, é importante verificar a classificação indicativa antes de assistir." />



            </div>
            <Footer />
        </div>

    );
}

export default PopularSection;
