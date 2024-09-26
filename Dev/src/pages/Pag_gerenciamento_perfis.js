import Cards from "../components/Cards";
import styles  from "../assets/css/Pag_gerenciamento_perfis.module.css";



function Pag_gerenciamento_perfis(){
    const cards = [{
        nome:'Usuario1',
        foto:'https://via.placeholder.com/200'

    },
    {
        nome:'Usuario2',
        foto:'https://via.placeholder.com/200'
    },
    {
        nome:'Usuario3',
        foto:'https://via.placeholder.com/200'
    },
    {
        nome:'Usuario4',
        foto:'https://via.placeholder.com/200'
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

            </div>

    )
}

export default Pag_gerenciamento_perfis;