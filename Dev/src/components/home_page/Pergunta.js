import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
            {lAbert && (
                <div className='resposta'>
                    <p>{resposta}</p>
                </div>
            )}
        </div>
    );
}

export default Pergunta;
