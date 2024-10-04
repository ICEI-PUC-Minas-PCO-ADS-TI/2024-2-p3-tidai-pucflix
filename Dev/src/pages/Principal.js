import HorizontalScroll from "../components/pagina_principal/HorizontalScroll.js";
import Carousel from "../components/pagina_principal/Carousel.js";
import "../output.css"

function Principal() {

    return (
        <div>
            <Carousel slidesQty={3}/>
            <HorizontalScroll title="Filmes em Alta"/>
            <HorizontalScroll title="Ação"/>
            <HorizontalScroll title="Romance"/>
            <HorizontalScroll title="Terror"/>
        </div>

    )

}

export default Principal;