import styles  from "../assets/css/Cards.module.css";
import iconeEditar  from "../assets/img/iconeEditar.png";


function Cards({nome,foto}){
    return(
        <div className={styles.perfil}>
            <img className={styles.imagem}  src={foto} alt={nome} /> 
            <img className={styles.sobreposta}  src={iconeEditar} alt={nome} />  
            <h3 className={styles.nome}>{nome}</h3>    
            
        </div>
    )
}

export default Cards;