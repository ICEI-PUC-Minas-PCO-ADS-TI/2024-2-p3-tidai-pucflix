import "../../../output.css"

function Footer() {

    return (
        <footer className="bg-defaultPurple shadow mt-8">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center">© 2023 <a href="./" className="hover:underline">PucFlix</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                    <li>
                        <a href="mailto:pedro@phflima.com">Contato</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;