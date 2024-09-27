import Principal from "./pag_Principal";
import Header from "../components/TemplatePadrao/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../output.css"

function Pucflix() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/principal" element={<Principal />} />
            </Routes>
        </Router>

    )
}

export default Pucflix;