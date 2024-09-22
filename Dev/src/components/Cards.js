import styles  from "../assets/css/Cards.module.css";


function Cards({nome,foto}){
    return(
        <div className={styles.perfil}>
            <img className={styles.imagem}  src={foto} alt={nome} />  
            <h3 className={styles.nome}>{nome}</h3>    
            
        </div>
    )
}

export default Cards;