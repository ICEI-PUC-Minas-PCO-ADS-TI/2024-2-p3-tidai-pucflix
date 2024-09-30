function CardGeneros(props) {
    return (
        <div className="cursor-pointer transform rounded-xl h-fit w-fit sm:h-full sm:w-full bg-white shadow-xl transition duration-300 hover:scale-105">
            <div className="flex h-full justify-center items-center">
                <img className="h-auto max-w-full rounded-lg" src={props.img} alt="perfil"></img>
            </div>
        </div>
    )
}

export default CardGeneros
