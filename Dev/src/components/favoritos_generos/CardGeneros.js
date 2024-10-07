function CardGenero(props) {
    return (
        <div
            className="cursor-pointer transform rounded-xl h-fit w-fit sm:h-full sm:w-full bg-defaultBg shadow-xl transition duration-300 hover:scale-105">
            <div className="flex flex-col h-full justify-center items-center bg-defaultBg">
                <img className="h-auto max-w-full rounded-lg" src={props.img} alt=""></img>
                <div className="text-white">
                    <h1>{props.genero}</h1>
                </div>
            </div>
        </div>
    )
}

export default CardGenero