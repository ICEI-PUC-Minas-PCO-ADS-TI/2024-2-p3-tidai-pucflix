import "../../output.css"
import "./Header.css"
import Logo from "../../assets/img/PucFlix_Logo.png"

function Header(){

    return (
        <div className="h-36 bg-deafaultPurple text-white fontPuc flex items-center text-5xl font-extrabold">
            <img src={Logo}></img>
        </div>
    )

}

export default Header;