import React from "react";
import { useState } from 'react';

require("./HorizontalScroll-Items.scss")

const ScrollItem = ({ movie, width, showModal }) => {

    console.log(movie)

    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const imgUrl715 = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

    return (
        <div
            className="slider-item" style={{ width: `${width}%` }}
            onClick={() => { showModal(imgUrl715, movie.title, movie.overview, movie.release_date.substring(0, 4) + " | Nota - " + movie.vote_average) }}
        >
            <img
                className="slider-image rounded-lg"
                src={imgUrl}
                alt={movie}
            />
        </div>
    );
};

export default ScrollItem;
