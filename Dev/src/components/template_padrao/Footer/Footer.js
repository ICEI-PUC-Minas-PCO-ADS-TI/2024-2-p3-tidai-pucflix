import "../../../output.css"
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="bg-defaultPurple shadow mt-8">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center">© 2023 <a href="./" className="hover:underline">PucFlix</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                    <li>
                        <Link to="#" className="hover:border-b me-4 md:me-6">Sobre</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:border-b me-4 md:me-6">Politicas de Privacidade</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:border-b">Contato</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;