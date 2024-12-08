import React, { useState, useEffect } from "react";
import ScrollControl from "./HorizontalScroll-Control/HorizontalScroll-Control";
import ScrollItem from "./HorizontalScroll-Items/HorizontalScroll-Items";
import "../../assets/css/pagina_principal/HorizontalScroll.scss"
import { getMovieByGenre } from "../../services/TMDB/TMDBFunctions"
import { addMovieToFavorites, addMovieToWatched } from "../../services/firebase/databaseFunctions";
import Notification from "./Notificacao";


function HorizontalScroll(props) {

    const [notification, setNotification] = useState(null);
    const [showVideo, setShowVideo] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [movieId, setMovieId] = useState()
    const [modalMovieName, setModalmovieName] = useState("")
    const [modalMovieIMG, setModalmovieIMG] = useState("")
    const [modalMovieDesc, setModalmovieDesc] = useState("")
    const [modalMovieBio, setmodalMovieBio] = useState("")
    const [modalVideo, setmodalVideo] = useState("")
    const [movies, setMovies] = useState([]);

    const handleShowNotification = () => {
        setNotification('Filme Adcionado aos Favoritos com Sucesso!');

        setTimeout(() => {
            setNotification(null);
        }, 2500);
    };

    const handleModal = (movieImg, movieName, movieDesc, movieBio, movieVideo, movieId) => {
        setShowModal(true)
        setModalmovieDesc(movieDesc)
        setModalmovieIMG(movieImg)
        setModalmovieName(movieName)
        setmodalMovieBio(movieBio)
        setmodalVideo(movieVideo)
        setMovieId(movieId)
    }


    let ID;

    switch (props.title) {
        case "Ação":
            ID = 28;
            break;
        case "Comédia":
            ID = 35;
            break;
        case "Drama":
            ID = 18;
            break;
        case "Fantasia":
            ID = 14;
            break;
        case "Romance":
            ID = 10749;
            break;
        case "Documentário":
            ID = 99;
            break;
        default:
            ID = "";
    }

    // Chamada à função que pega os filmes por gênero
    useEffect(() => {
        const fetchMovies = async () => {
            const fetchedMovies = await getMovieByGenre(ID);
            setMovies(fetchedMovies);  // Atualiza o estado com os filmes
        };

        fetchMovies();
    }, [ID]);

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
                setItemsInRow(3);
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

        const sliderContents = combinedIndex.map((index) => {
            const movie = movies[index];
            if (!movie) return null;

            return (
                <ScrollItem
                    showModal={handleModal}
                    movie={movie}
                    key={`${movie.id}-${index}`}
                    width={100 / itemsInRow}
                />
            );
        });

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
        <div className="slider mt-10 md:mt-16">
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-3">{props.title}</h1>
            {sliderHasMoved && (
                <ScrollControl arrowDirection={"left"} onClick={handlePrev} />
            )}
            <div className="slider-content" style={style}>
                {renderSliderContent()}
            </div>

            <ScrollControl arrowDirection={"right"} onClick={handleNext} />

            {showModal ? (
                <>
                    <div
                        className="min-w-64 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto max-w-3xl">
                            {/*Conteudo*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-defaultBg outline-none focus:outline-none">
                                {/*Header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                    <h3 className="text-3xl font-semibold text-white">
                                        {modalMovieName}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setShowModal(false);
                                            setShowVideo(false);
                                        }}
                                    >
                                        <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none"
                                        >
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*Body*/}
                                <div className="relative py-1 p-6 flex-auto">
                                    <div className="my-4 text-black text-lg leading-relaxed">
                                        <div className='flex flex-col justify-center md:items-start gap-4 flex-wrap'>

                                            {showVideo ? <iframe width="100%" height="315" src={modalVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : <img src={modalMovieIMG} alt={modalMovieIMG} />}


                                            <div className='flex flex-col gap-5 sm:items-start'>
                                                <div className='flex flex-col items-start text-white text-sm sm:text-base'>
                                                    {modalMovieDesc}
                                                </div>
                                                <div className="text-white text-sm sm:text-base">
                                                    {modalMovieBio}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Footer*/}
                                <div className="flex flex-col items-start justify-start sm:justify-between p-6 rounded-b flex-wrap gap-2">
                                    <button
                                        className="bg-defaultPurple text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            addMovieToWatched(movieId)
                                            setShowVideo(true)
                                        }
                                        }
                                    >
                                        Assistir
                                    </button>
                                    <button
                                        className="bg-defaultPurple text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            addMovieToFavorites(movieId)
                                            handleShowNotification()
                                        }}
                                    >
                                        Adicionar aos favoritos
                                    </button>
                                    {notification && (
                                        <Notification
                                            message={notification}
                                            onClose={() => setNotification(null)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default HorizontalScroll;