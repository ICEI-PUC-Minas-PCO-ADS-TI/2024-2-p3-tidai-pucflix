import Cards from "../components/pagina_gerenciamento_perfil/Cards";
import styles from '../assets/css/pagina_gerenciamento_perfil/Pag_gerenciamento_perfis.module.css'
import Header from '../components/template_alternativo/Header/Header.js';
import Footer from '../components/template_padrao/Footer/Footer.js';
import { Link } from "react-router-dom";




function Pag_gerenciamento_perfis() {
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

                <h1 className={styles.titulo}>Gerenciar perfis</h1>
                <div className={styles.perfis}>
                    {cards.map(card => (
                        <Cards nome={card.nome}
                            foto={card.foto}
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