import "../output.css"
import img1 from "../assets/img/moana-bg-test.png"
import CarouselContent from "./CarouselContent/CarouselContent";

function Carousel(props) {

    const generatePeerClasses = () => {
        let peerClasses = '';
        for (let i = 1; i <= props.slidesQty; i++) {
            peerClasses += `
                peer-[&_label:nth-of-type(${i})]/slider${i}:peer-checked/slider${i}:opacity-100
                peer-[&_label:nth-of-type(${i})]/slider${i}:peer-checked/slider${i}:w-10
            `;
        }
        return peerClasses;
    };

    return (
        <div className="relative w-full h-[70vh] bg-slate-800 overflow-hidden">

            {
                Array.from({ length: props.slidesQty }).map((_, i) => (
                    <input
                        key={i}
                        className={`hidden peer/slider${i + 1} checkbox`}
                        type="radio"
                        id={`slider${i + 1}`}
                        name="slider"
                        defaultChecked={i === 0}
                    />
                ))
            }
            <div
                className="relative w-[300vw] h-[100%] flex transition-all duration-500 ease-in-out peer-checked/slider1:-left-0 peer-checked/slider2:-left-[100vw] peer-checked/slider3:-left-[200vw]"
            >
                <CarouselContent movieTitle="Moana" movieSubtitle="Um Mar de Aventuras" movieDescription="2016 | Diretores: John Musker, Ron Clements | 107 minutos" movieImageBg={img1} />
                <CarouselContent movieTitle="Moana" movieSubtitle="Um Mar de Aventuras" movieDescription="2016 | Diretores: John Musker, Ron Clements | 107 minutos" movieImageBg={img1} />
                <CarouselContent movieTitle="Moana" movieSubtitle="Um Mar de Aventuras" movieDescription="2016 | Diretores: John Musker, Ron Clements | 107 minutos" movieImageBg={img1} />
            </div>

            <div
                className={`absolute w-full flex justify-center gap-2 bottom-12 ${generatePeerClasses()}`}
            >
                {
                    Array.from({ length: props.slidesQty }).map((_, i) => (
                        <label
                            className="block w-8 h-3 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
                            htmlFor={`slider${i + 1}`}
                        >
                        </label>
                    ))
                }
            </div>
        </div>

    )

}

export default Carousel;