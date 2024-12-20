import CardGeneros from "../components/favoritos_generos/CardGeneros";
import { getGenres } from "../services/TMDB/TMDBFunctions";
import { useEffect, useState } from "react"
import GeneroSelecionado from "../components/favoritos_generos/GeneroSelecionado";
import { IoChevronBackOutline } from "react-icons/io5";



function Generos() {

    const [generos, setGeneros] = useState([]);
    const [generoSelecionado, setGeneroSelecionado] = useState(null);
    const handleCardClick = (genero) => {
        setGeneroSelecionado(genero);
    };

    const handleVoltar = () => {
        setGeneroSelecionado(null); // Reseta o estado de gênero selecionado para null
    };

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const genresData = await getGenres();
                setGeneros(genresData);
            } catch (error) {
                console.error("Erro ao buscar gêneros:", error);
            }
        };

        fetchGenres();
    }, []);

    if (generoSelecionado) {
        return (
            <div>
                <div className="flex-1 w-full h-full">
                    <div className="container flex mx-auto pt-5 p-2 md:p-3 md:px-6">
                        <button
                            onClick={handleVoltar}
                            className="text-white sm:text-2xl box-border ">
                        <IoChevronBackOutline size={40} />

                        </button>
                    </div>
                </div>
                <GeneroSelecionado genero={generoSelecionado} />
            </div>
        );
    }

    return (
        <div className="h-full w-full flex-1">
            <div className="container flex flex-wrap justify-between pt-5 p-2 md:p-5 mx-auto h-full flex-col">
                <h1 className="text-white text-2xl sm:text-4xl font-semibold my-6">
                    Escolha um genero
                </h1>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 justify-items-center">
                        {generos.map((genero) => (
                            <CardGeneros
                                nome={genero.name}
                                onClick={() => handleCardClick(genero)}
                                key={genero.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Generos;