import "../../../output.css";
import "../Header/Header.css";
import ProfilePicture from "./ProfilePicture";
import DropdownBtn from "./DropdownBtn";
import Logo from "../../../assets/img/PucFlix_Logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getSearchMovies } from "../../../services/TMDB/TMDBFunctions";
import { getVideoByMovie } from "../../../services/TMDB/TMDBFunctions";
import { addMovieToWatched, addMovieToFavorites } from "../../../services/firebase/databaseFunctions";
import Notification from "../../pagina_principal/Notificacao";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [notification, setNotification] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [movieId, setMovieId] = useState()
  const [modalMovieName, setModalmovieName] = useState("")
  const [modalMovieIMG, setModalmovieIMG] = useState("")
  const [modalMovieDesc, setModalmovieDesc] = useState("")
  const [modalMovieBio, setmodalMovieBio] = useState("")
  const [modalVideo, setmodalVideo] = useState("")
  const [video, setVideoUrl] = useState([]);

  const handleModal = (movieImg, movieName, movieDesc, movieBio, movieVideo, movieId) => {
    setShowModal(true)
    setModalmovieDesc(movieDesc)
    setModalmovieIMG(movieImg)
    setModalmovieName(movieName)
    setmodalMovieBio(movieBio)
    setmodalVideo(movieVideo)
    setMovieId(movieId)
    console.log(showModal)
  }

  const handleShowNotification = () => {
    setNotification('Filme Adicionado aos Favoritos com Sucesso!');

    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    const updateMovies = async () => {
      if (searchQuery.trim()) {
        const filteredMovies = await getSearchMovies(searchQuery);
        console.log(filteredMovies)
        setMovies(filteredMovies);
        setShowDropdown(true);
      } else {
        setMovies([]);
        setShowDropdown(false);
      }
    };

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(updateMovies, 100);
    setDebounceTimeout(timeout);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <header className="w-full text-white bg-defaultPurple shadow-sm body-font border-b">
      <div className="container flex flex-wrap items-center justify-between pt-6 p-2 md:p-6 mx-auto">
        <Link to="/pucflix/principal" className="flex items-center mb-4 font-medium text-gray-900 title-font lg:mb-0">
          <img src={Logo} alt="logo" className="h-12" />
        </Link>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex lg:flex-row lg:ml-6 pl-6 text-base border-l border-gray-200 lg:mr-auto">
          <Link to="./principal" className="mr-5 font-medium hover:border-b">Inicio</Link>
          <Link to="./favoritos" className="mr-5 font-medium hover:border-b">Favoritos</Link>
          <Link to="./generos" className="font-medium hover:border-b">Generos</Link>
        </nav>

        {/* Barra de pesquisa Desktop */}
        <div className="hidden lg:flex items-center h-full relative">
          <div className="flex me-10">
            <input
              type="text"
              className="form-control flex-grow p-1 px-2 rounded-l-md focus:outline-none text-gray-900"
              placeholder="Pesquisar"
              aria-label="Barra de Pesquisa"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span
              className="inline-flex items-center px-3 text-black bg-white rounded-r-md cursor-pointer"
            >
              <IoSearchSharp />
            </span>
          </div>

          {/* Dropdown de resultados de pesquisa */}
          {showDropdown && movies.length > 0 && (
            <ul
              className="absolute mt-1 w-full max-h-60 overflow-y-auto bg-black border border-gray-300 rounded-lg shadow-lg z-20"
              style={{ top: '65px', width: '260px' }}
            >
              {movies.map((movie) => (
                <li
                  key={movie.id}
                  className="px-4 py-3 font-medium border border-gray-300 text-gray-800 hover:bg-indigo-600 hover:text-white cursor-pointer transition-all duration-300 mb-2"
                  onClick={() => {
                    const fetchVideo = async () => {
                      const video = await getVideoByMovie(movie.id);
                      handleModal(
                        `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                        movie.title,
                        movie.overview,
                        movie.release_date.substring(0, 4) + " | Nota - " + movie.vote_average,
                        video,  
                        movie.id
                      );
                    };
                    fetchVideo();
                  }}

                >
                  {movie.title}
                </li>
              ))}
            </ul>
          )}

          <DropdownBtn btn={ProfilePicture} />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75">
          <div className="z-50 relative w-72 h-full bg-defaultPurple p-4">
            <button onClick={toggleMenu} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <nav className="flex flex-col mt-8 space-y-4">
              <Link to="./principal" className="font-medium hover:text-gray-500">Inicio</Link>
              <Link to="./favoritos" className="font-medium hover:text-gray-500">Favoritos</Link>
              <Link to="#_" className="font-medium hover:text-gray-500">Generos</Link>

              {/* Barra de pesquisa mobile */}
              <div className="flex mt-4">
                <input
                  type="text"
                  className="form-control border-0 flex-grow p-1 rounded-l-md focus:outline-none text-gray-900"
                  placeholder="Pesquisar"
                  aria-label="Barra de Pesquisa"
                  value={searchQuery}
                />
                <span
                  className="inline-flex items-center justify-center px-2 text-black border-0 bg-white rounded-r-md h-auto cursor-pointer"
                >
                  <IoSearchSharp className="h-5 w-5" />
                </span>
              </div>

              {/* User Icon for Mobile */}
              <div className="flex items-center">
                <Link to="#_" className="rounded-full px-3 py-3 text-lg font-bold text-black transition-all duration-150 bg-white hover:text-gray-500 mt-4">
                  <FaUser />
                </Link>
              </div>
            </nav>
          </div>


        </div>
      )}


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

                      {showVideo ? <iframe width="560" height="315" src={modalVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : <img src={modalMovieIMG} alt={modalMovieIMG} />}


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
    </header>
  );
}

export default Header;
