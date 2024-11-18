import React from "react";
import { useState } from 'react';

require("./HorizontalScroll-Items.scss")

const ScrollItem = ({ movie, width, showModal}) => {

    
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;  
    const imgUrl715 = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    return (
        <div
            className="slider-item" style={{ width: `${width}%` }}
            onClick = {()=>{showModal(imgUrl715,movie.title, movie.original_language)}}
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