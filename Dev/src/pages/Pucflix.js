import Principal from "./Principal.js";
import Favoritos from "./Favoritos.js";
import HomePage from "./Home_page.js";
import Login from "./Login.js";
import Cadastro from "./Cadastro.js";
import Generos from "./Generos.js";
import PagEscolhaPerfil from "./Escolha_perfil.js"
import PagGerenciamentoPerfis from "./Gerenciamento_perfis.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../output.css"
import AuthLayout from "../components/layout/auth/AuthLayout.js"
import PainelLayout from "../components/layout/painel/PainelLayout.js"
import Assistidos from "./Assistidos.js";

function Pucflix() {

    return (
        <div className="min-h-screen flex flex-col">

            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<AuthLayout />}>
                        <Route index element={<HomePage />} />
                    </Route>
                    <Route path="pucflix/login" element={<Login />} />
                    <Route path="pucflix/cadastro" element={<Cadastro />} />
                    <Route path="pucflix/perfil" element={<PagEscolhaPerfil />} />
                    <Route path="pucflix/perfil/edit" element={<PagGerenciamentoPerfis />} /> 

                    <Route path="pucflix/" element={<PainelLayout />} >
                        <Route path="principal" element={<Principal />} />
                        <Route path="favoritos" element={<Favoritos />} />
                        <Route path="assistidos" element={<Assistidos />} />
                        <Route path="generos" element={<Generos />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div >
    )
}

export default Pucflix;
