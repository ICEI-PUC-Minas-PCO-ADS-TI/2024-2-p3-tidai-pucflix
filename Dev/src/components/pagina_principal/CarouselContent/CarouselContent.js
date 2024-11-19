import { useEffect, useState } from "react";
import { getVideoByMovie } from "../../../services/TMDB/TMDBFunctions";
import { addMovieToFavorites } from "../../../services/firebase/databaseFunctions";
import Notification from "../Notificacao";

function CarouselContent({movieTitle, movieSubtitle, movieDescription,movieImageBg, showModal, movie}) {

    const [notification, setNotification] = useState(null);
    const [video, setVideoUrl] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const handleShowNotification = () => {
        setNotification('Filme Adcionado aos Favoritos com Sucesso!');

        setTimeout(() => {
            setNotification(null);
        }, 2500);
    };

    useEffect(() => {
        if (movie && movie.id) {
            const fetchVideo = async () => {
                setIsLoading(true);
                const videoData = await getVideoByMovie(movie.id);
                setVideoUrl(videoData);
                setIsLoading(false);
            };
            
            fetchVideo();
        }
    }, [movie?.id]);

    if (!movie || !movie.backdrop_path || isLoading) {
        return null;
    }

    const imgUrl715 = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    
    return (
            <div className="relative w-full h-full flex bg-gray-950">
                <div className="bg-cover bg-center bg-no-repeat w-full h-full flex flex-col justify-center relative" style={{ backgroundImage: `url(${movieImageBg})` }}>

                    <div className="absolute inset-0 bg-gray-950 opacity-55"></div>

                    <div className="ml-[10%] relative p-6 md:p-0">
                        <h1 className="text-white text-6xl font-bold">{movieTitle}</h1>
                        <h3 className="text-white text-5xl font-normal">{movieSubtitle}</h3>
                        <p className="text-white text-1xl font-semibold mt-4">{movieDescription}</p>
                        <div className="">
                            <button
                                className="mt-4 z-10 middle none center mr-4 rounded-lg bg-defaultPurple py-3 px-4 md:px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-deafaultPurple/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                data-ripple-light="true"
                                onClick={()=>{showModal(imgUrl715, movie.title, movie.overview, movie.release_date.substring(0, 4) + " | Nota - " + movie.vote_average,video, movie.id)}}
                            >
                                Assistir
                            </button>
                            <button
                                className="mt-4 z-10 middle none center mr-4 rounded-lg bg-defaultPurple py-3 px-4 md:px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-deafaultPurple/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                data-ripple-light="true"
                                onClick={()=>{
                                    addMovieToFavorites(movie.id)
                                    handleShowNotification()
                                }}
                            >
                                Adicionar aos Favoritos
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
    )

}

export default CarouselContent