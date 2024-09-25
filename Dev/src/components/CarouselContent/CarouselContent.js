function CarouselContent(props) {

    return (
            <div className="relative w-full h-full flex bg-gray-950">
                <div className="bg-cover bg-center bg-no-repeat w-full h-full flex flex-col justify-center relative" style={{ backgroundImage: `url(${props.movieImageBg})` }}>

                    <div className="absolute inset-0 bg-gray-950 opacity-55"></div>

                    <div className="ml-[10%] relative z-10">
                        <h1 className="text-white text-6xl font-bold">{props.movieTitle}</h1>
                        <h3 className="text-white text-5xl font-normal">{props.movieSubtitle}</h3>
                        <p className="text-white text-1xl font-semibold mt-4">{props.movieDescription}</p>
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
    )

}

export default CarouselContent