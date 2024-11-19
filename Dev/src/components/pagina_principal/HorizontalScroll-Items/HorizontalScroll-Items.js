import React, { useState,useEffect } from "react";
import {getVideoByMovie} from "../../../services/TMDB/TMDBFunctions"

require("./HorizontalScroll-Items.scss")

const ScrollItem = ({ movie, width, showModal }) => {
    const [video, setVideoUrl] = useState([]);

    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const imgUrl715 = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  
    useEffect(() => {
        const fetchVideo = async () => {
            const video = await getVideoByMovie(movie.id);
            setVideoUrl(video); 
        };

        fetchVideo();
    },[movie.id]);

    
    return (
        <div
            className="slider-item" style={{ width: `${width}%` }}
            onClick={() => { showModal(imgUrl715, movie.title, movie.overview, movie.release_date.substring(0, 4) + " | Nota - " + movie.vote_average,video)}}>
            <img
                className="slider-image rounded-lg"
                src={imgUrl}
                alt={movie}
            />
        </div>
    );
};

export default ScrollItem;
