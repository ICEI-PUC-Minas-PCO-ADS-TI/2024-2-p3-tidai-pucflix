import Card from "../components/Card";

function Favoritos() {

    const imgUrl = "https://via.placeholder.com/300x300"; {/* API de imagens temporaria ate a implmentação das API de filmes */ }

    var favoritos = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="h-full w-full flex-1">
            <div className="container flex flex-wrap justify-between pt-6 p-2 md:p-6 mx-auto h-full flex-col">
                <h1
                    className="text-white text-2xl sm:text-4xl font-semibold my-6"
                >Seus Favoritos</h1>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">

                        {
                            favoritos.map(() => (
                                <Card img={imgUrl} />
                            ))

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favoritos;