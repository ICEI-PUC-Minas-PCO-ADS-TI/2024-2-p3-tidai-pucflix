import Principal from "./Principal.js";
import Header from "../components/TemplatePadrao/Header/Header.js";
import Footer from "../components/TemplatePadrao/Footer/Footer.js";
import Favoritos from "./Favoritos.js";
import HomePage from "./Home_page.js";
import Login from "./Login.js";
import Cadastro from "./Cadastro.js";
import PagEscolhaPerfil from "./Pag_escolha_perfil.js"
import PagGerenciamentoPerfis from "./Pag_gerenciamento_perfis.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "../output.css"

function Pucflix() {

    const [isHomepage, setisHomepage] = useState(true);

    useEffect(() => {
        let actualPath = window.location.pathname;
        console.log(actualPath)
        if (actualPath.startsWith("/pucflix")) {
            setisHomepage(false)
        }
        else {
            setisHomepage(true)
        }
    }, [])

    return (
        <div className="min-h-screen flex flex-col">
            <Router basename="/">
                {isHomepage ? (
                    <>
                    <HomePage />
                    <Footer />
                    </>
                ) : (
                    <>
                        <Header />
                        <Routes>
                            <Route path="/pucflix/principal" element={<Principal />} />
                            <Route path="/pucflix/favoritos" element={<Favoritos />} />
                            <Route path="/pucflix/login" element={<Login />} />
                            <Route path="/pucflix/cadastro" element={<Cadastro />} />
                            <Route path="/pucflix/perfil" element={<PagEscolhaPerfil />} />
                            <Route path="/pucflix/perfil/edit" element={<PagGerenciamentoPerfis />} />
                        </Routes>
                        <Footer />
                    </>
                )}
            </Router>
        </div>
    )
}

export default Pucflix;