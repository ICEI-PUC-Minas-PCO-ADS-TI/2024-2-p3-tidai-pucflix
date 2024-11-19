function CardGenero({ nome, onClick}) {
    return (
        <div
            onClick={() => onClick()} 
            className="cursor-pointer transform rounded-xl h-fit w-fit sm:h-full sm:w-full bg-defaultBg shadow-xl transition duration-300 hover:scale-105">
            <div className="flex flex-col h-full justify-center items-center bg-defaultPurple rounded-lg p-6">
                <div className="text-white font-semibold text-lg">
                    <h1>{nome}</h1> 
                </div>
            </div>
        </div>
    );
}

export default CardGenero;