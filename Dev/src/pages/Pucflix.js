import Principal from "./Principal.js";
import Header from "../components/TemplatePadrao/Header/Header.js";
import Footer from "../components/TemplatePadrao/Footer/Footer.js";
import Favoritos from "./Favoritos.js";
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
    },[])

    return (
        <div className="min-h-screen flex flex-col">
            {isHomepage && (
                <Router basename="/">  {/*Aqui é pra colocar as rotas da Homepage e quando fazer o login mandar o usuário para o path /pucflix/ e então vai carregar a aplicação*/}
                    <Header /> {/*Aqui eu so coloquei um Header Padrão mas é pra colocar a HomePage que o Caio fez */}
                </Router>
            )
            }
            <Router basename="/pucflix">
                <Header />
                <Routes>
                    <Route path="/principal" element={<Principal />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default Pucflix;