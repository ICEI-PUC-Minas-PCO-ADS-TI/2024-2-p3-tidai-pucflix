import Cards from "../components/Cards";
import styles  from "../assets/css/Pag_gereciamento_perfis.module.css";

function Pag_gerenciamento_perfis(){
    return(
        
        <div>
            < div className={styles.conteudo}>
                
                <h1 className={styles.titulo}>Escolha o Perfil</h1>
                    <Cards nome="Nome usuário" 
                    foto="https://via.placeholder.com/150"
                     />
                    <button className={styles.botao}>Gerenciar Perfis</button>

            </div>

            
        </div>
        
        
    )
}

export default Pag_gerenciamento_perfis;