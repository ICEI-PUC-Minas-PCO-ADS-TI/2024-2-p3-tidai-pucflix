import Principal from "./Principal.js";

import Favoritos from "./Favoritos.js";
import HomePage from "./Home_page.js";
import Login from "./Login.js";
import Cadastro from "./Cadastro.js";
import Generos from "./Generos.js";
import PagEscolhaPerfil from "./Pag_escolha_perfil.js"
import PagGerenciamentoPerfis from "./Pag_gerenciamento_perfis.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "../output.css"
import AuthLayout from "../components/layout/auth/AuthLayout.js"
import PainelLayout from "../components/layout/painel/PainelLayout.js"

function Pucflix() {

    return (
        <div className="min-h-screen flex flex-col">
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<AuthLayout />}>
                        <Route index element={<HomePage />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="cadastro" element={<Cadastro />} />
                    <Route path="pucflix" element={<PainelLayout />} >
                        <Route path="principal" element={<Principal />} />
                        <Route path="favoritos" element={<Favoritos />} />
                        <Route path="perfil" element={<PagEscolhaPerfil />} />
                        <Route path="perfil/edit" element={<PagGerenciamentoPerfis />} />
                        <Route path="generos" element={<Generos />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Pucflix;
