import CardGeneros from "../components/CardGeneros";

function Generos() {

    const imgUrl = "https://via.placeholder.com/300x300"; {/* API de imagens temporaria ate a implmentação das API de filmes */ }

    var generos = ["Ação", "Terror", "Romance", "Suspense", "Comédia", "Drama", "Aventura", "Documentario"];

    return (
        <div className="h-full w-full flex-1">
            <div className="container flex flex-wrap justify-between pt-6 p-2 md:p-6 mx-auto h-full flex-col">
                <h1
                    className="text-white text-2xl sm:text-4xl font-semibold my-6"
                >Escolha um Genero</h1>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">

                        {
                            generos.map((i) => (
                                <div className="flex flex-col justify-items-center items-center text-white font-bold">
                                    <CardGeneros img={imgUrl} />
                                    <h1>{i}</h1>
                                </div>
                            ))

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Generos;