import Principal from "./pag_Principal";
import Header from "../components/template_padrao/Header/Header.js"
import Footer from "../components/template_padrao/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../output.css"

function Pucflix() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/principal" element={<Principal />} />
            </Routes>
            <Footer />
        </Router>

    )
}

export default Pucflix;