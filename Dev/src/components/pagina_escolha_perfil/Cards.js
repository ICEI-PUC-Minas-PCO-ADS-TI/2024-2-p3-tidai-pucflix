import styles from "../../assets/css/pagina_escolha_perfil/Cards.module.css"

function Cards({ nome, foto }) {
    return (
        <div className="box-border cursor-pointer transform rounded-md shadow-xl transition duration-300 hover:scale-105">
                <img className={styles.imagem} src={foto} alt={nome} />
                <h3 className={styles.nome} >{nome}</h3>
        </div>
    )
}

export default Cards;