import React, { useState,useEffect } from "react";
import {getVideoByMovie} from "../../services/TMDB/TMDBFunctions"

function Card(props) {

    const [video, setVideoUrl] = useState([]);
    useEffect(() => {
        const fetchVideo = async () => {
            const video = await getVideoByMovie(props.movie.id);
            setVideoUrl(video); 
        };

        fetchVideo();
    },[props.movie.id]);


    return (
        
        <div 
        onClick={() => { props.showModal(`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`, props.movie.title, props.movie.overview, props.movie.release_date.substring(0, 4) + " | Nota - " + props.movie.vote_average,video)}}
        className="cursor-pointer transform rounded-xl h-fit w-fit sm:h-full sm:w-full bg-white shadow-xl transition duration-300 hover:scale-105">
            <div className="flex h-full justify-center items-center">
                <img className="h-auto max-w-full rounded-lg" src={`https://image.tmdb.org/t/p/w500${props.img}`} alt=""></img>
            </div>
        </div>
    )
}

export default Card