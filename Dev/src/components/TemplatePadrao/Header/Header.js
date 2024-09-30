import "../../../output.css"
import ProfilePicture from "../../ProfilePicture";
import DropdownBtn from "../../DropdownBtn";
import Logo from "../../../assets/img/PucFlix_Logo.png"
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

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

    return (

        <header className="w-full text-white bg-defaultPurple shadow-sm body-font border-b">
            <div className="container flex flex-wrap items-center justify-between pt-6 p-2 md:p-6 mx-auto">

                <Link to="./pucflix/principal" 
                    className="flex items-center mb-4 font-medium text-gray-900 title-font lg:mb-0">
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
                    <Link to="./pucflix/principal" className="mr-5 font-medium hover:border-b">Inicio</Link>
                    <Link to="./pucflix/favoritos" className="mr-5 font-medium hover:border-b">Favoritos</Link>
                    <Link to="./pucflix/generos" className="font-medium hover:border-b">Generos</Link>
                </nav>

                <div className="hidden lg:flex items-center h-full">
                    <div className="flex me-10">
                        <input
                            type="text"
                            className="form-control flex-grow p-1 px-2 rounded-l-md focus:outline-none text-gray-900"
                            placeholder="Pesquisar"
                            aria-label="Barra de Pesquisa"
                        />
                        <span className="inline-flex items-center px-3 text-black bg-white rounded-r-md">
                            <IoSearchSharp />
                        </span>
                    </div>

                    <DropdownBtn btn={ProfilePicture}/>

                </div>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75">
                    <div className="relative w-72 h-full bg-defaultPurple p-4">
                        <button onClick={toggleMenu} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <nav className="flex flex-col mt-8 space-y-4">
                            <Link to="./pucflix//principal" className="font-medium hover:text-gray-500">Inicio</Link>
                            <Link to="./pucflix//favoritos" className="font-medium hover:text-gray-500">Favoritos</Link>
                            <Link to="./pucflix/generos" className="font-medium hover:text-gray-500">Generos</Link>

                            <div className="flex mt-4">
                                <input
                                    type="text"
                                    className="form-control border-0 flex-grow p-1 rounded-l-md focus:outline-none text-gray-900"
                                    placeholder="Pesquisar"
                                    aria-label="Barra de Pesquisa"
                                />
                                <span className="inline-flex items-center justify-center px-2 text-black border-0 bg-white rounded-r-md h-auto">
                                    <IoSearchSharp className="h-5 w-5" />
                                </span>
                            </div>

                            <div className="flex items-center">
                                <Link
                                    to="#_"
                                    className="rounded-full px-3 py-3 text-lg font-bold text-black transition-all duration-150 bg-white hover:text-gray-500 mt-4"
                                >
                                    <FaUser />
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )

}

export default Header;