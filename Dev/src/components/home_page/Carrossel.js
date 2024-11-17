import '../../assets/css/home_page/Carrossel.css';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'
import { getTrendingMovies } from "../services/TMDB/TMDBFunctions";

function Carrossel() {
    
    const filmes =  getTrendingMovies();
    const carrossel = useRef();
    const [width,setWidth] = useState(0)

    useEffect(() => {
        if (carrossel.current) {
            setWidth(carrossel.current.scrollWidth - carrossel.current.offsetWidth);
        }
    }, []);

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
