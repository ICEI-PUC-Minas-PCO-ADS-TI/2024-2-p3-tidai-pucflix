import '../../assets/css/home_page/Carrossel.css';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'
import { getTrendingMovies } from "../../services/TMDB/TMDBFunctions";

function Carrossel() {
    
    const [filmes, setFilmes] = useState([]);
    const carrossel = useRef();
    const [width,setWidth] = useState(0)

    useEffect(() => {
        const fetchFilmes = async () => {
            const movies = await getTrendingMovies(); 
            setFilmes(movies); 
        };
        fetchFilmes();
        if (carrossel.current) {
            setWidth(carrossel.current.scrollWidth - carrossel.current.offsetWidth);
        }
    }, [filmes]); 

    return (

       <div className='conteudo-carrossel'>
            < motion.div ref={carrossel} className='carrossel'>
                < motion.div className='interno' drag="x" dragConstraints={{ right: 0, left: - width }}>

                    {filmes.map(filme => (
                        <motion.div className='item' key={filme}>
                            <img src={filme} alt='' />
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </div>

    );
}

export default Carrossel;
