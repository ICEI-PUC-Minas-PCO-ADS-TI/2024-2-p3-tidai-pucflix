import Logo from '../../../assets/img/PucFlix_Logo.png'

import { Link } from "react-router-dom";
import '../Header/Header.css'

function Header() {
    return (
        <header className="Header_login_cadastro">
            <Link to="/">       
                    <img src={Logo} alt="logo"/>
            </Link>
        </header>
    );
}

export default Header;