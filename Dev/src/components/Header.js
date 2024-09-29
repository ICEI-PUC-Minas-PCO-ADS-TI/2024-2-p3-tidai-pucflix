import Logo from "../assets/img/PucFlix_Logo.png";
import '../assets/css/Header.css';

function Header() {
    return (
        <header >
                <a href="#" className="flex items-center mb-4 font-medium text-gray-900 title-font lg:mb-0">
                    <img src={Logo} alt="logo" className="h-12" />
                </a>
        </header>
    );
}

export default Header;
