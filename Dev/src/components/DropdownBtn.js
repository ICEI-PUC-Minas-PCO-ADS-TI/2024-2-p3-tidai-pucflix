import "../output.css"
import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

function DropdownBtn(props) {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Referência para o dropdown
  
    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    };
  
    // Fechar o dropdown se clicar fora dele
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      // Adicionar o listener de clique ao documento
      document.addEventListener('mousedown', handleClickOutside);
  
      // Limpar o listener ao desmontar o componente
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const handleReload = () => {
        setTimeout(()=>{
          window.location.reload()
        },1000)
      };

        return (
            <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                    id="dropdownDefaultButton"
                    onClick={toggleDropdown}
                    className="inline-flex"
                    type="button"
                >
                    {props.btn && <props.btn />}
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                    <div
                        id="dropdown"
                        className="z-10 bg-defaultBg divide-y divide-gray-100 rounded-lg shadow w-44  absolute right-0 mt-2"
                    >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link to="../pucflix/perfil" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Trocar Usuário
                                </Link>
                            </li>
                            <li>
                                <Link to="../pucflix/perfil/edit" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Gerenciar Perfis
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleReload}>
                                    Sair
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        )
    }

    export default DropdownBtn;