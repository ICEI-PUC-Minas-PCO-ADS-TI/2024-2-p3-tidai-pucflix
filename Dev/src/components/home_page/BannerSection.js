import '../../assets/css/home_page/BannerSection.css';
import Header from '../../components/home_page/Header';
import Imagem from '../../assets/imagens/BannerImg.png';

function BannerSection() {
    return (

        <div className='BannerSection'>
            <Header />
            <div className='BannerImg'>
                <img src={Imagem} alt="" />
            </div>
            <div className='Card-Branco'>
                <div className='Card-Texto'>
                    <h1>O seu melhor site de filmes</h1>
                    <p>Descubra uma vasta seleção de filmes e séries, com avaliações, trailers e recomendações personalizadas para você. Junte-se a nossa comunidade e fique por dentro das novidades do mundo do entretenimento.</p>
                    <button >Acessar</button>
                    <button >Quero Saber Mais</button>
                </div>
            </div>

        </div>

    );
}

export default BannerSection;
