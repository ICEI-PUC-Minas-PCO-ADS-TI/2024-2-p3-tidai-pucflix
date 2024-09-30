import '../../assets/css/home_page/BannerSection.css';
import Header from '../../components/home_page/Header';
import Imagem from '../../assets/imagens/BannerImg.png';
import { Link } from "react-router-dom";

function BannerSection() {

    const handleReload = () => {
        setTimeout(()=>{
          window.location.reload()
        },1000)
      };

    return (

        <div className='BannerSection'>
            <Header />
            <div className='BannerImg'>
                <img src={Imagem} alt="banner backgorund" />
            </div>
            <div className='Card-Branco'>
                <div className='Card-Texto'>
                    <h1>O seu melhor site de filmes</h1>
                    <p>Descubra uma vasta seleção de filmes e séries, com avaliações, trailers e recomendações personalizadas para você. Junte-se a nossa comunidade e fique por dentro das novidades do mundo do entretenimento.</p>
                    <Link to="./pucflix/cadastro"><button
                    onClick={handleReload}
                        className="hover:text-gray-500 mt-4 z-10 middle none center mr-4 rounded-lg bg-defaultPurple py-3 px-4 md:px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-deafaultPurple/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Acessar
                    </button>
                    </Link>
                    <button
                        className="hover:text-gray-500 mt-4 z-10 middle none center mr-4 rounded-lg bg-defaultPurple py-3 px-4 md:px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-deafaultPurple/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Quero Saber Mais
                    </button>
                </div>
            </div>

        </div>

    );
}

export default BannerSection;
