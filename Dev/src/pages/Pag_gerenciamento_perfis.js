import Cards from "../components/Cards";
import styles  from "../assets/css/Pag_gerenciamento_perfis.module.css";
import PopUp from "../components/PopUp";



function Pag_gerenciamento_perfis(){
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
            < div className={styles.conteudo}>
                
                <h1 className={styles.titulo}>Gerenciar perfis</h1>
                <div className={styles.perfis}>
                    {cards.map(card=>(
                        <Cards  nome={card.nome} 
                        foto={card.foto}
                        />
                    ))}  
                </div>
                <PopUp />
            </div>

    )
}

export default Pag_gerenciamento_perfis;