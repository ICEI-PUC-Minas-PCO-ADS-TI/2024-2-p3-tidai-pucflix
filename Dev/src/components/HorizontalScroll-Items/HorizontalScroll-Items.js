import React from "react";

require ("./HorizontalScroll-Items.scss")

const ScrollItem = ({ movie, width }) => {

  const imgUrl = "https://via.placeholder.com/250x200"

  return (


    <div className="slider-item" style={{ width: `${width}%` }}>
      <img
        className="slider-image"
        src={imgUrl}
        alt={movie}
      />
    </div>
  );
};

export default ScrollItem;