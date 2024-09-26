import Cards from "../components/Cards";
import Header from "../components/Header";
import styles  from "../assets/css/Pag_escolha_perfil.module.css";

function Pag_escolha_perfil(){
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
        
        <div>
            <Header/>
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
                
                    <a href="#"><button className={styles.botao}>Gerenciar Perfis</button></a>

            </div>

            
        </div>
        
        
    )
}

export default Pag_escolha_perfil;