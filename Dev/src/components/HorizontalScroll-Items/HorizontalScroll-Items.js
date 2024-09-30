import React from "react";
import Card from "../Card.js";

require ("./HorizontalScroll-Items.scss")

const ScrollItem = ({ movie, width }) => {

  const imgUrl = "https://via.placeholder.com/250x250"

  return (


    <div className="slider-item" style={{ width: `${width}%` }}>
      <img
        className="slider-image rounded-lg cursor-pointer"
        src={imgUrl}
        alt={movie}
      />
    </div>
  );
};

export default ScrollItem;