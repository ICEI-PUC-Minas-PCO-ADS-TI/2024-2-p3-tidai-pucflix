import React from "react";
import { useState } from 'react';

require("./HorizontalScroll-Items.scss")

const ScrollItem = ({ movie, width, showModal}) => {

    const imgUrl = "https://via.placeholder.com/250x250"
    const imgUrl715 = "https://via.placeholder.com/715x250"
    return (
        <div
            className="slider-item" style={{ width: `${width}%` }}
            onClick = {()=>{showModal(imgUrl715,movie, movie)}}
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