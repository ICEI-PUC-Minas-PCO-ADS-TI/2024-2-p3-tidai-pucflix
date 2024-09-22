import "../output.css"
import img1 from "../assets/img/moana-bg-test.png"

function Carousel() {

    return (
        <div className="relative w-full h-[70vh] bg-slate-800 overflow-hidden">
            <input
                className="hidden peer/slider1 checkbox"
                type="radio"
                id="slider1"
                name="slider"
                defaultChecked
            />
            <input
                className="hidden peer/slider2 checkbox"
                type="radio"
                id="slider2"
                name="slider"
            />
            <input
                className="hidden peer/slider3 checkbox"
                type="radio"
                id="slider3"
                name="slider"
            />

            <div
                className="relative w-[300vw] h-[100%] flex transition-all duration-500 ease-in-out peer-checked/slider1:-left-0 peer-checked/slider2:-left-[100vw] peer-checked/slider3:-left-[200vw]"
            >
                <div className="relative w-full h-full flex bg-gray-950">
                    <div className="bg-cover bg-center bg-no-repeat w-full h-full flex flex-col justify-center relative" style={{ backgroundImage: `url(${img1})` }}>

                    <div className="absolute inset-0 bg-gray-950 opacity-55"></div>

                        <div className="ml-[10%] relative z-10">
                            <h1 className="text-white text-6xl font-bold">Moana</h1>
                            <h3 className="text-white text-5xl font-normal">Um Mar de Aventuras</h3>
                            <p className="text-white text-1xl font-semibold mt-4">2016 | Diretores: John Musker, Ron Clements | 107 minutos</p>
                            <div className="">
                                <button
                                    className="mt-4 z-10 middle none center mr-4 rounded-lg bg-deafaultPurple py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-deafaultPurple/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    data-ripple-light="true"
                                >
                                    Assistir
                                </button>
                                <button
                                    className="mt-4 z-10 middle none center mr-4 rounded-lg bg-deafaultPurple py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-deafaultPurple/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    data-ripple-light="true"
                                >
                                    Adicionar aos Favoritos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-full flex bg-amber-500"></div>
                <div className="relative w-full h-full flex bg-emerald-500"></div>
            </div>

            <div
                className="absolute w-full flex justify-center gap-2 bottom-12 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:opacity-100 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:w-10 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:opacity-100 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:w-10 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:opacity-100 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:w-10"
            >
                <label
                    className="block w-8 h-3 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
                    htmlFor="slider1"
                >
                </label>
                <label
                    className="block w-8 h-3 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
                    htmlFor="slider2"
                >
                </label>
                <label
                    className="block w-8 h-3 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
                    htmlFor="slider3"
                >
                </label>
            </div>
        </div>

    )

}

export default Carousel;