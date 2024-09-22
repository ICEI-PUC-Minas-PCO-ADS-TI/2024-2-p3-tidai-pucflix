import Cards from "../components/Cards";
import styles  from "../assets/css/Pag_gerenciamento_perfis.module.css";
import iconePlus from "../assets/img/iconePlus.png";

function Pag_gerenciamento_perfis(){
    return(
        
        
            < div className={styles.conteudo}>
                
                <h1 className={styles.titulo}>Gerenciar perfis:</h1>
                <div className={styles.perfis}>
                    <Cards  nome="Nome usuário" 
                    foto="https://via.placeholder.com/150"
                     />
                     <Cards nome="Adicionar perfil" 
                    foto={iconePlus}
                     /> 
                </div>
                    

                    <button className={styles.botao}>Concluído</button>

            </div>

            
        
        
        
    )
}

export default Pag_gerenciamento_perfis;