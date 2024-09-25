import Cards from "../components/Cards";
import styles  from "../assets/css/Pag_gerenciamento_perfis.module.css";


function Pag_gerenciamento_perfis(){
    return(
        
        
            < div className={styles.conteudo}>
                
                <h1 className={styles.titulo}>Gerenciar perfis</h1>
                <div className={styles.perfis}>
                    <Cards  nome="Nome usuário" 
                    foto="https://via.placeholder.com/200"
                    />
                    <Cards  nome="Nome usuário" 
                     foto="https://via.placeholder.com/200"
                    />
                    <Cards  nome="Nome usuário" 
                    foto="https://via.placeholder.com/200"
                    />
                    <Cards  nome="Nome usuário" 
                    foto="https://via.placeholder.com/200"
                    />
                     
                </div>

            </div>

    )
}

export default Pag_gerenciamento_perfis;