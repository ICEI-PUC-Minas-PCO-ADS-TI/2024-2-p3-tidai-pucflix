import { useState, useEffect } from 'react';
import Cards from "../components/pagina_escolha_perfil/Cards";
import Header from '../components/template_alternativo/Header/Header.js';
import Footer from '../components/template_padrao/Footer/Footer.js';
import styles from "../assets/css/pagina_escolha_perfil/Pag_escolha_perfil.module.css";
import { Link } from "react-router-dom";
import { database } from "../services/firebase.ts";
import { ref, onValue, set } from "firebase/database";

function Pag_escolha_perfil() {
    const [perfils, setPerfils] = useState([]);

    const perfisPadrao = [
        { id: 'perfil1', nome: 'Perfil 1', foto: 'https://via.placeholder.com/250' },
        { id: 'perfil2', nome: 'Perfil 2', foto: 'https://via.placeholder.com/250' },
        { id: 'perfil3', nome: 'Perfil 3', foto: 'https://via.placeholder.com/250' },
        { id: 'perfil4', nome: 'Perfil 4', foto: 'https://via.placeholder.com/250' },
    ];

    useEffect(() => {
        const perfisRef = ref(database, 'perfis');

        const unsubscribe = onValue(perfisRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const perfilsArray = Object.keys(data).map(key => ({
                    id: key,
                    nome: data[key].nome,
                    foto: data[key].foto || 'https://via.placeholder.com/250' 
                }));
                setPerfils(perfilsArray);
            } else {
                setPerfils(perfisPadrao);
                perfisPadrao.forEach(perfil => {
                    const perfilRef = ref(database, `perfis/${perfil.id}`);
                    set(perfilRef, perfil);
                });
            }
        });

        return () => unsubscribe();
    }, []);

    
    return (

        <div className="flex flex-col h-dvh">
            <Header />
            < div className={styles.conteudo}>

                <h1 className={styles.titulo}>Escolha o Perfil</h1>

                <div className={styles.cards}>
                {perfils.map(perfil => (
                    <div key={perfil.id}>
                        <Link to="/pucflix/principal">
                            <Cards
                                id={perfil.id}
                                nome={perfil.nome}
                                foto={perfil.foto}
                                
                            />
                        </Link>
                    </div>
                ))}
                </div>

                <Link to="/pucflix/perfil/edit">
                    <button className={styles.botao}>Gerenciar Perfis</button>
                </Link>

            </div>
            <Footer />

        </div>


    )
}

export default Pag_escolha_perfil;