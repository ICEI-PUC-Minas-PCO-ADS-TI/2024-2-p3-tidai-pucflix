import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Principal from "./Principal.js";
import Header from "../components/TemplatePadrao/Header/Header.js";
import Footer from "../components/TemplatePadrao/Footer/Footer.js";
import Favoritos from "./Favoritos.js";
import HomePage from "./Home_page.js";
import Login from "./Login.js";
import Cadastro from "./Cadastro.js";
import Generos from "./Generos.js";
import PagEscolhaPerfil from "./Pag_escolha_perfil.js";
import PagGerenciamentoPerfis from "./Pag_gerenciamento_perfis.js";
import "../output.css";

function Pucflix() {
    const Rota = useLocation();
    
    //Paginas que nao possuem header/footer padrao
    const EscondeHeaderFooter = [
        "/pucflix/login",
        "/pucflix/cadastro"
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {EscondeHeaderFooter.includes(Rota.pathname) ? (
                <>
                    <Routes>
                        <Route path="/pucflix/login" element={<Login />} />
                        <Route path="/pucflix/cadastro" element={<Cadastro />} />
                    </Routes>
                </>
            ) : (
                <>
                    {Rota.pathname === "/pucflix" ? (
                        <HomePage />
                    ) : (
                        <>
                            <Header />
                            <Routes>
                                <Route path="/pucflix/principal" element={<Principal />} />
                                <Route path="/pucflix/favoritos" element={<Favoritos />} />
                                <Route path="/pucflix/perfil" element={<PagEscolhaPerfil />} />
                                <Route path="/pucflix/perfil/edit" element={<PagGerenciamentoPerfis />} />
                                <Route path="/pucflix/generos" element={<Generos />} />
                            </Routes>
                            <Footer />
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default function App() {
    return (
        <Router basename="/">
            <Pucflix />
        </Router>
    );
}
