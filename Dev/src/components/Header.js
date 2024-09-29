import Logo from "../../../assets/img/PucFlix_Logo.png"


function Header() {

    
    return (

        <header className="w-full text-white bg-defaultPurple shadow-sm body-font border-b">
            <div className="container flex flex-wrap items-center justify-between pt-6 p-2 md:p-6 mx-auto">
                <a href="#" className="flex items-center mb-4 font-medium text-gray-900 title-font lg:mb-0">
                    <img src={Logo} alt="logo" className="h-12" />
                </a>
        </div>

        </header>
    )

}

export default Header;