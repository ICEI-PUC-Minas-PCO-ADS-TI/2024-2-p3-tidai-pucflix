import Cards from "../components/Cards";
import styles  from "../assets/css/Pag_escolha_perfil.module.css";
import { Link } from "react-router-dom";

function Pag_escolha_perfil(){
    const cards = [{
        nome:'Usuario1',
        foto:'https://via.placeholder.com/250'
    },
    {
        nome:'Usuario2',
        foto:'https://via.placeholder.com/250'
    },
    {
        nome:'Usuario3',
        foto:'https://via.placeholder.com/250'
    },
    {
        nome:'Usuario4',
        foto:'https://via.placeholder.com/250'
    }]

    return(
        
        <div>
            < div className={styles.conteudo}>
                
                <h1 className={styles.titulo}>Escolha o Perfil</h1>

                <div className={styles.cards}>
                    {cards.map(card => (
                        <Cards  
                            nome={card.nome} 
                            foto={card.foto}
                        />
                    ))}
                </div>
                
                    <Link href="#"><button className={styles.botao}>Gerenciar Perfis</button></Link>

            </div>

            
        </div>
        
        
    )
}

export default Pag_escolha_perfil;