import Header from "../../TemplatePadrao/Header/Header.js";
import Footer from "../../TemplatePadrao/Footer/Footer.js";
import { Outlet } from "react-router-dom";


export default function PainelLayout (){
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}