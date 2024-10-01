import { Outlet } from "react-router-dom";
import Footer from "../../TemplatePadrao/Footer/Footer.js";



export default function AuthLayout () {
    return(
        <>
            <Outlet />
            <Footer />
        </>
    )
}