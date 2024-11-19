import CardGeneros from "../components/favoritos_generos/CardGeneros";
import { getGenres } from "../services/TMDB/TMDBFunctions";
import { useEffect, useState } from "react"
import GeneroSelecionado from "../components/favoritos_generos/GeneroSelecionado";

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
                <button 
                    onClick={handleVoltar} 
                    //TERMINAR CUSTOMIZAÇAO DO
                    className="text-white sm:text-4xl "> 
                    Voltar
                </button>
                <GeneroSelecionado genero={generoSelecionado} />
            </div>
        );
    }

    return (
        <div className="h-full w-full flex-1">
            <div className="container flex flex-wrap justify-between pt-6 p-2 md:p-6 mx-auto h-full flex-col">
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