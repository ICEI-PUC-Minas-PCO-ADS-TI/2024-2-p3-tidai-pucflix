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
                <Pergunta pergunta="?" resposta="R" />
                <Pergunta pergunta="?" resposta="R" />
                <Pergunta pergunta="?" resposta="R" />
            </div>
            <Footer />
        </div>

    );
}

export default PopularSection;
