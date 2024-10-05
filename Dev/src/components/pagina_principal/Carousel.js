import "../../output.css"
import img1 from "../../assets/img/pagina_principal/moana-bg-test.png"
import img2 from "../../assets/img/pagina_principal/tangled-bg-test.jpg"
import img3 from "../../assets/img/pagina_principal/frozen-bg-test.jpg"
import CarouselContent from "./CarouselContent/CarouselContent";

function Carousel(props) {

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
                <CarouselContent movieTitle="Frozen 2" movieDescription="2020 | Diretores: Jennifer Lee, Chris Buck | 104 minutos" movieImageBg={img3} />
                <CarouselContent movieTitle="Enrolados" movieDescription="2011 | Diretores: Nathan Greno, Byron Howard | 100 minutos" movieImageBg={img2} />
            </div>

            <div
                className="absolute w-full flex justify-center gap-2 bottom-12 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:opacity-100 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:w-10 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:opacity-100 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:w-10 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:opacity-100 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:w-10"
            >

                {
                    Array.from({ length: props.slidesQty }).map((_, i) => (

                        <label
                            className="block w-8 h-3 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
                            htmlFor={`slider${i + 1}`}
                            key={i}
                        >
                        </label>

                    ))
                }

            </div>
        </div>

    )

}

export default Carousel;