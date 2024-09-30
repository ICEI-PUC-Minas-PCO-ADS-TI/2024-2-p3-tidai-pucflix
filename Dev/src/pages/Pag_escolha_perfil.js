import Card from "../components/Card";
import styles from "../assets/css/Escolha.module.css";
import { Link } from "react-router-dom";

function PagEscolhaPerfil() {
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
            < div className={styles.conteudo}>

                <h1 className={styles.titulo}>Escolha o Perfil</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
                    {cards.map(card => (
                        <Link to="../pucflix/principal">
                            <Card img={card.foto}/>
                        </Link>
                    ))}
                </div>

                <Link to="../pucflix/perfil/edit"><button className={styles.botao}>Gerenciar Perfis</button></Link>

            </div>

    )
}

export default PagEscolhaPerfil;