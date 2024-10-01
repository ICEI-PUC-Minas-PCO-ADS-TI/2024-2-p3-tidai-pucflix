import Logo from "../../assets/img/PucFlix_Logo.png";
import { Link } from "react-router-dom";
import '../../assets/css/Login.Cadastro/Header.css';

function Header() {
    return (
        <header >
            <Link to="/">
                <a href="#" className="flex items-center mb-4 font-medium text-gray-900 title-font lg:mb-0">
                    <img src={Logo} alt="logo" style={{width:220 }} />
                </a>
            </Link>
        </header>
    );
}

export default Header;