import { useEffect, useState } from "react";
import { getVideoByMovie } from "../../services/TMDB/TMDBFunctions";


function Card({movie, showModal}) {

    const imgUrl715 = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

    const [video, setVideoUrl] = useState([]);

    useEffect(() => {
        const fetchVideo = async () => {
            const video = await getVideoByMovie(movie.id);
            setVideoUrl(video); 
        };

        fetchVideo();
    },[movie.id]);

    return (
        <div 
        onClick={()=>{showModal(imgUrl715, movie.title, movie.overview, movie.release_date.substring(0, 4) + " | Nota - " + movie.vote_average,video, movie.id)}}
        className="cursor-pointer transform rounded-xl h-fit w-fit sm:h-full sm:w-full shadow-xl transition duration-300 hover:scale-105">
            <div className="flex h-full justify-center items-center">
                <img className="h-auto max-w-full rounded-lg" src={imgUrl715} alt=""></img>
            </div>
        </div>
    )
}

export default Card