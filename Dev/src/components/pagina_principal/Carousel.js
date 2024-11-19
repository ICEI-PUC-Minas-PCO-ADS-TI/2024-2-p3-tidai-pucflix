import "../../output.css"
import img1 from "../../assets/img/pagina_principal/moana-bg-test.png"
import img2 from "../../assets/img/pagina_principal/tangled-bg-test.jpg"
import img3 from "../../assets/img/pagina_principal/frozen-bg-test.jpg"
import CarouselContent from "./CarouselContent/CarouselContent";
import { useEffect, useState } from "react";
import { addMovieToWatched, addMovieToFavorites } from "../../services/firebase/databaseFunctions";
import Notification from "./Notificacao";
import { getMovieById } from "../../services/TMDB/TMDBFunctions";

function Carousel(props) {

    
    const [notification, setNotification] = useState(null);
    const [showModal, setShowModal] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const [movieId, setMovieId] = useState()
    const [modalMovieName, setModalmovieName] = useState("")
    const [modalMovieIMG, setModalmovieIMG] = useState("")
    const [modalMovieDesc, setModalmovieDesc] = useState("")
    const [modalMovieBio, setmodalMovieBio] = useState("")
    const [modalVideo, setmodalVideo] = useState("")
    const [movies, setMovies] = useState([]);
    
    
    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const movieToAdd = [277834,109445,38757]
                
                const carroselMovies = await Promise.all(movieToAdd.map(movie => getMovieById(movie)));
                setMovies(carroselMovies);

            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    }, []);

    const handleModal = (movieImg, movieName, movieDesc, movieBio, movieVideo, movieId) => {
        setShowModal(true)
        setModalmovieDesc(movieDesc)
        setModalmovieIMG(movieImg)
        setModalmovieName(movieName)
        setmodalMovieBio(movieBio)
        setmodalVideo(movieVideo)
        setMovieId(movieId)
    }

    const handleShowNotification = () => {
        setNotification('Filme Adcionado aos Favoritos com Sucesso!');

        setTimeout(() => {
            setNotification(null);
        }, 2500);
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
                <CarouselContent movie={movies[0]} showModal={handleModal} movieTitle="Moana" movieSubtitle="Um Mar de Aventuras" movieDescription="2016 | Diretores: John Musker, Ron Clements | 107 minutos" movieImageBg={img1} />
                <CarouselContent movie={movies[1]} showModal={handleModal} movieTitle="Frozen 2" movieDescription="2020 | Diretores: Jennifer Lee, Chris Buck | 104 minutos" movieImageBg={img3} />
                <CarouselContent movie={movies[2]} showModal={handleModal} movieTitle="Enrolados" movieDescription="2011 | Diretores: Nathan Greno, Byron Howard | 100 minutos" movieImageBg={img2} />
            </div>

            <div
                className="absolute w-full flex justify-center gap-2 bottom-12 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:opacity-100 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:w-10 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:opacity-100 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:w-10 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:opacity-100 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:w-10"
            >

                {
                    Array.from({ length: props.slidesQty }).map((_, i) => (

                        <label
                            className="block w-8 h-3 bg-white cursor-pointer opacity-50 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
                            htmlFor={`slider${i + 1}`}
                            key={i}
                        >
                        </label>

                    ))
                }

            </div>

            {showModal ? (
                <>
                    <div
                        className="min-w-64 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto max-w-3xl">
                            {/*Conteudo*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-defaultBg outline-none focus:outline-none">
                                {/*Header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                    <h3 className="text-3xl font-semibold text-white">
                                        {modalMovieName}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setShowModal(false);
                                            setShowVideo(false);
                                        }}
                                    >
                                        <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none"
                                        >
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*Body*/}
                                <div className="relative py-1 p-6 flex-auto">
                                    <div className="my-4 text-black text-lg leading-relaxed">
                                        <div className='flex flex-col justify-center md:items-start gap-4 flex-wrap'>

                                            {showVideo ? <iframe width="560" height="315" src={modalVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : <img src={modalMovieIMG} alt={modalMovieIMG} />}


                                            <div className='flex flex-col gap-5 sm:items-start'>
                                                <div className='flex flex-col items-start text-white text-sm sm:text-base'>
                                                    {modalMovieDesc}
                                                </div>
                                                <div className="text-white text-sm sm:text-base">
                                                    {modalMovieBio}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Footer*/}
                                <div className="flex flex-col items-start justify-start sm:justify-between p-6 rounded-b flex-wrap gap-2">
                                    <button
                                        className="bg-defaultPurple text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            addMovieToWatched(movieId)
                                            setShowVideo(true)
                                        }
                                        }
                                    >
                                        Assistir
                                    </button>
                                    <button
                                        className="bg-defaultPurple text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            addMovieToFavorites(movieId)
                                            handleShowNotification()
                                        }}
                                    >
                                        Adicionar aos favoritos
                                    </button>
                                    {notification && (
                                        <Notification
                                            message={notification}
                                            onClose={() => setNotification(null)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )

}

export default Carousel;