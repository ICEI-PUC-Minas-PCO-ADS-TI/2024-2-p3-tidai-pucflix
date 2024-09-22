import React from "react";

require ("./HorizontalScroll-Control.scss")

const ScrollControl = ({ arrowDirection, onClick }) => {
  return (
    <div className={`slider-control ${arrowDirection}`}>
      <div className="slider-control-arrow" onClick={onClick}>
        {/* Colocar icone de setas */}
      </div>
    </div>
  );
};

export default ScrollControl;