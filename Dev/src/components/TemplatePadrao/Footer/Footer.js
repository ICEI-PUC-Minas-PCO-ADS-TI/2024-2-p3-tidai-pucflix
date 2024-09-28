import "../../../output.css"

function Footer() {

    return (
        <footer class="bg-defaultPurple shadow mt-8">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-white sm:text-center">© 2023 <a href="./" class="hover:underline">PucFlix</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                    <li>
                        <a href="#" class="hover:border-b me-4 md:me-6">Sobre</a>
                    </li>
                    <li>
                        <a href="#" class="hover:border-b me-4 md:me-6">Politicas de Privacidade</a>
                    </li>
                    <li>
                        <a href="#" class="hover:border-b">Contato</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;