import Header from "../../template_padrao/Header/Header.js";
import Footer from '../../template_padrao/Footer/Footer.js';

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