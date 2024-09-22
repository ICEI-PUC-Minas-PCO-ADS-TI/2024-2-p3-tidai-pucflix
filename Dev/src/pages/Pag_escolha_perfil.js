import Cards from "../components/Cards";
import Header from "../components/Header";
import styles  from "../assets/css/Pag_escolha_perfil.module.css";

function Pag_escolha_perfil(){
    return(
        
        <div>
            <Header/>
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

export default Pag_escolha_perfil;