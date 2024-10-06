import '../../assets/css/home_page/InfoSection.css';
import Imagem from '../../assets/img/home_page/InfoSection.png';

function InfoSection() {
    return (

        <div className='InfoSection'>
            <h1>Descubra Novas Aventuras com os filmes</h1>
            <div className='container-info'>
                    <img src={Imagem} alt="" />
                    <p>
                        Mergulhe em um universo cinematográfico repleto de aventuras, emoções e histórias inesquecíveis. Nossa plataforma oferece uma curadoria única de filmes e séries que vão desde clássicos atemporais até as últimas estreias. Navegue facilmente por uma vasta seleção de gêneros, encontre suas obras favoritas e se conecte com uma comunidade apaixonada por entretenimento. Prepare-se para explorar novas narrativas que cativarão sua imaginação e proporcionarão momentos de puro deleite.
                    </p>
            </div>
        </div>

    );
}

export default InfoSection;