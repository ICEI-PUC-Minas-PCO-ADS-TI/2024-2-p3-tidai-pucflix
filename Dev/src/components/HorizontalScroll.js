import React, { useState, useEffect } from "react";
import ScrollControl from "./HorizontalScroll-Control/HorizontalScroll-Control";
import ScrollItem from "./HorizontalScroll-Items/HorizontalScroll-Items";
require("../assets/css/HorizontalScroll.scss")

function HorizontalScroll(props) {

    var movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const [sliderHasMoved, setSliderHasMoved] = useState(false);
    const [sliderMoveDirection, setSliderMoveDirection] = useState(null);
    const [sliderMoving, setSliderMoving] = useState(false);
    const [movePercentage, setMovePercentage] = useState(0);
    const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0);
    const [itemsInRow, setItemsInRow] = useState(5);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 1440) {
                setItemsInRow(6);
            } else if (window.innerWidth >= 1000) {
                setItemsInRow(5);
            } else {
                setItemsInRow(4);
            }
        };

        window.addEventListener("resize", handleWindowResize);
        handleWindowResize();

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const renderSliderContent = () => {
        const totalItems = movies.Length;

        const left = [];
        const mid = [];
        const right = [];

        for (let i = 0; i < itemsInRow; i++) {
            if (sliderHasMoved) {
                if (lowestVisibleIndex + i - itemsInRow < 0) {
                    left.push(totalItems - itemsInRow + lowestVisibleIndex + i);
                } else {
                    left.push(i + lowestVisibleIndex - itemsInRow);
                }
            }

            if (i + lowestVisibleIndex >= totalItems) {
                mid.push(i + lowestVisibleIndex - totalItems);
            } else {
                mid.push(i + lowestVisibleIndex);
            }

            if (i + lowestVisibleIndex + itemsInRow >= totalItems) {
                right.push(i + lowestVisibleIndex + itemsInRow - totalItems);
            } else {
                right.push(i + lowestVisibleIndex + itemsInRow);
            }
        }

        const combinedIndex = [...left, ...mid, ...right];

        if (sliderHasMoved) {
            const trailingIndex =
                combinedIndex[combinedIndex.length - 1] === totalItems - 1
                    ? 0
                    : combinedIndex[combinedIndex.length - 1] + 1;

            combinedIndex.push(trailingIndex);
        }

        const leadingIndex =
            combinedIndex[0] === 0 ? totalItems - 1 : combinedIndex[0] - 1;
        combinedIndex.unshift(leadingIndex);

        const sliderContents = combinedIndex.map((index) => (
            <ScrollItem
                movie={movies[index]}
                key={`${movies[index]}-${index}`}
                width={100 / itemsInRow}
            />
        ));

        if (!sliderHasMoved) {
            for (let i = 0; i < itemsInRow; i++) {
                sliderContents.unshift(
                    <div
                        className="slider-item"
                        style={{ width: `${100 / itemsInRow}%` }}
                        key={i}
                    />
                );
            }
        }

        return sliderContents;
    };

    const handlePrev = () => {
        const totalItems = movies.length;
        let newIndex;
        if (lowestVisibleIndex < itemsInRow && lowestVisibleIndex !== 0) {
            newIndex = 0;
        } else if (lowestVisibleIndex - itemsInRow < 0) {
            newIndex = totalItems - itemsInRow;
        } else {
            newIndex = lowestVisibleIndex - itemsInRow;
        }

        let newMovePercentage;
        if (lowestVisibleIndex === 0) {
            newMovePercentage = 0;
        } else if (lowestVisibleIndex - newIndex < itemsInRow) {
            newMovePercentage =
                ((itemsInRow - (lowestVisibleIndex - newIndex)) / itemsInRow) * 100;
        } else {
            newMovePercentage = 0;
        }

        setSliderMoving(true);
        setSliderMoveDirection("left");
        setMovePercentage(newMovePercentage);

        setTimeout(() => {
            setLowestVisibleIndex(newIndex);
            setSliderMoving(false);
            setSliderMoveDirection(null);
            setMovePercentage(0);
        }, 750);
    };

    const handleNext = () => {
        const totalItems = movies.length;
        let newIndex;

        if (lowestVisibleIndex === totalItems - itemsInRow) {
            newIndex = 0;
        } else if (lowestVisibleIndex + itemsInRow > totalItems - itemsInRow) {
            newIndex = totalItems - itemsInRow;
        } else {
            newIndex = lowestVisibleIndex + itemsInRow;
        }

        let newMovePercentage;
        if (newIndex !== 0) {
            newMovePercentage = ((newIndex - lowestVisibleIndex) / itemsInRow) * 100;
        } else {
            newMovePercentage = 100;
        }

        setSliderMoving(true);
        setSliderMoveDirection("right");
        setMovePercentage(newMovePercentage);

        setTimeout(() => {
            setLowestVisibleIndex(newIndex);
            setSliderMoving(false);
            setSliderMoveDirection(null);
            setMovePercentage(0);
        }, 750);

        if (!sliderHasMoved) {
            setSliderHasMoved(true);
        }
    };

    if (!movies.length) {
        return null;
    }

    let style = {};
    if (sliderMoving) {
        let translate = "";
        if (sliderMoveDirection === "right") {
            translate = `translateX(-${100 + movePercentage + 100 / itemsInRow}%)`;
        } else if (sliderMoveDirection === "left") {
            translate = `translateX(-${movePercentage + 100 / itemsInRow}%)`;
        }

        style = {
            transform: translate,
            transitionDuration: "750ms",
        };
    } else {
        style = {
            transform: `translateX(-${100 + (sliderHasMoved ? 100 / itemsInRow : 0)
                }%)`,
        };
    }

    return (
        <div className="slider mt-16">
            <h1 className="text-white text-3xl font-bold mb-3">{props.title}</h1>
            {sliderHasMoved && (
                <ScrollControl arrowDirection={"left"} onClick={handlePrev} />
            )}
            <div className="slider-content" style={style}>
                {renderSliderContent()}
            </div>
            
            <ScrollControl arrowDirection={"right"} onClick={handleNext} />
        </div>
    );
};

export default HorizontalScroll;