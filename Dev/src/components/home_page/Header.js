import '../../assets/css/home_page/Header.css';
import Logo from "../../assets/img/PucFlix_Logo.png"
import "../../output.css"
import { Link } from "react-router-dom";

function Header() {

  const handleReload = () => {
    setTimeout(()=>{
      window.location.reload()
    },1000)
  };

  return (
    <header className="header">
      <img src={Logo} alt='Logo Pucflix'></img>
      <Link to="/pucflix/login">
        <button
        onClick={handleReload}
          className="hover:text-gray-500 mt-4 z-10 middle none center mr-4 rounded-lg bg-defaultPurple py-3 px-4 md:px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-deafaultPurple/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Assine Aqui
        </button>
      </Link>
    </header>
  );
}

export default Header;
