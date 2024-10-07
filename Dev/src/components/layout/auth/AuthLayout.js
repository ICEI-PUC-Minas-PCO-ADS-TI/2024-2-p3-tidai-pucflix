import { Outlet } from "react-router-dom";
import Footer from '../../template_padrao/Footer/Footer.js';

export default function AuthLayout () {
    return(
        <>
            <Outlet />
            <Footer />
        </>
    )
}