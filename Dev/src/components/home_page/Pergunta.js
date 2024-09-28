import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // Adicionando AnimatePresence

function Pergunta({ pergunta, resposta }) {
    const [lAbert, setlAbert] = useState(false);

    const toggleOpen = () => {
        setlAbert(!lAbert);
    };

    return (
        <div className='pergunta-container'>
            <div className='pergunta' onClick={toggleOpen}>
                <h3>{pergunta}</h3>
                <span>
                    {lAbert ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </div>
            
            
            <AnimatePresence> 
                {lAbert && (
                    <motion.div //Animaçoes da resposta
                        className='resposta'
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: 'auto' }} 
                        exit={{ opacity: 0, height: 'auto' }} 
                        transition={{ duration: 0.1 }} 
                    >
                        <p>{resposta}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Pergunta;
