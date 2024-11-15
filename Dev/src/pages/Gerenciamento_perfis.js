import { useState, useEffect } from "react";
import Cards from "../components/pagina_gerenciamento_perfil/Cards";
import styles from '../assets/css/pagina_gerenciamento_perfil/Pag_gerenciamento_perfis.module.css'
import Header from '../components/template_alternativo/Header/Header.js';
import Footer from '../components/template_padrao/Footer/Footer.js';
import { Link } from "react-router-dom";
import { database } from "../services/firebase.ts";
import { ref, onValue, update, set, remove } from "firebase/database";


function Pag_gerenciamento_perfis() {

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
    


    const atualizarPerfil = (id, novoNome) => {
        setPerfils((prevPerfils) =>
            prevPerfils.map(perfil =>
                perfil.id === id ? { ...perfil, nome: novoNome } : perfil
            )
        );

        const perfilRef = ref(database, `perfis/${id}`);
        update(perfilRef, { nome: novoNome })
            .then(() => {
                console.log(`Perfil ${id} atualizado com sucesso no banco.`);
                setPerfils((prevPerfils) =>
                    prevPerfils.map(perfil =>
                        perfil.id === id ? { ...perfil, nome: novoNome } : perfil
                    )
                );
            })
            .catch((error) => {
                console.error("Erro ao atualizar o perfil: ", error);
            });
    };

    const deletarPerfil = (id) => {
        setPerfils((prevPerfils) =>
            prevPerfils.filter(perfil => perfil.id !== id)
        );

        const perfilRef = ref(database, `perfis/${id}`);
        remove(perfilRef)
            .then(() => {
                console.log(`Perfil ${id} excluído com sucesso do banco.`);
            })
            .catch((error) => {
                console.error("Erro ao excluir o perfil: ", error);
            });
    };


    return (
        <div className="flex flex-col h-dvh">
            <Header />
            < div className={styles.conteudo}>

                <h1 className={styles.titulo}>Gerenciar perfis</h1>
                <div className={styles.perfis}>
                {perfils.map(perfil => (
                        <Cards
                            key={perfil.id}
                            id={perfil.id}
                            nome={perfil.nome}
                            foto={perfil.foto}
                            atualizarPerfil={atualizarPerfil}
                            deletarPerfil={deletarPerfil}
                        />
                    ))}
                </div>

                <Link to="/pucflix/perfil">
                    <button className={styles.botao}>Voltar </button>
                </Link>

            </div>
            <Footer />
            
        </div>

    )
}

export default Pag_gerenciamento_perfis;