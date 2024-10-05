import Cards from "../components/pagina_escolha_perfil/Cards";
import Header from '../components/template_alternativo/Header/Header.js';
import Footer from '../components/template_padrao/Footer/Footer.js';
import styles from "../assets/css/pagina_escolha_perfil/Pag_escolha_perfil.module.css";
import { Link } from "react-router-dom";

function Pag_escolha_perfil() {
    const cards = [{
        nome: 'Usuario1',
        foto: 'https://via.placeholder.com/250'
    },
    {
        nome: 'Usuario2',
        foto: 'https://via.placeholder.com/250'
    },
    {
        nome: 'Usuario3',
        foto: 'https://via.placeholder.com/250'
    },
    {
        nome: 'Usuario4',
        foto: 'https://via.placeholder.com/250'
    }]

    return (

        <div className="flex flex-col h-dvh">
            <Header />
            < div className={styles.conteudo}>

                <h1 className={styles.titulo}>Escolha o Perfil</h1>

                <div className={styles.cards}>
                    {cards.map(card => (
                        <Link to="/pucflix/principal">
                            <Cards
                                nome={card.nome}
                                foto={card.foto}
                            />
                        </Link>
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