import Card from "./Card";
import React, { useState, useEffect } from "react";
import { getMovieByGenre } from "../../services/TMDB/TMDBFunctions"

function GeneroSelecionado({ genero }) {

    const [showVideo, setShowVideo] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalMovieName, setModalmovieName] = useState("")
    const [modalMovieIMG, setModalmovieIMG] = useState("")
    const [modalMovieDesc, setModalmovieDesc] = useState("")
    const [modalMovieBio, setmodalMovieBio] = useState("")
    const [modalVideo, setmodalVideo] = useState("")
    const [movies, setMovies] = useState([]);
    
    const handleModal = (movieImg, movieName, movieDesc, movieBio, movieVideo) => {
        setShowModal(true)
        setModalmovieDesc(movieDesc)
        setModalmovieIMG(movieImg)
        setModalmovieName(movieName)
        setmodalMovieBio(movieBio)
        setmodalVideo(movieVideo)
    }


    useEffect(() => {
        const fetchMovies = async () => {
            const fetchedMovies = await getMovieByGenre(genero.id);
            setMovies(fetchedMovies);
        };

        fetchMovies();
    }, [genero.id]);

 

    return (
        <div className="h-full w-full flex-1">
            <div className="container flex flex-wrap justify-between pt-6 p-2 md:p-6 mx-auto h-full flex-col">
                <h1
                    className="text-white text-2xl sm:text-4xl font-semibold my-6"
                >{genero.name}</h1>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">

                        {
                            movies.map((movie) => (
                                <Card
                                    showModal={handleModal}
                                    movie={movie}
                                    img={movie.poster_path}
                                    key={movie.id}
                                />

                            ))

                        }

                    </div>
                </div>
            </div>

            {
                showModal ? (
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
                                            onClick={() => setShowVideo(true)}
                                        >
                                            Assistir
                                        </button>
                                        <button
                                            className="bg-defaultPurple text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Adicionar aos favoritos
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null
            } </div>
    )
}

export default GeneroSelecionado;