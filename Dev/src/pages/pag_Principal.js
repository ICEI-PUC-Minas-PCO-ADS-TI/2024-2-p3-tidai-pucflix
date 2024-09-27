import HorizontalScroll from "../components/HorizontalScroll";
import Carousel from "../components/Carousel.js";
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