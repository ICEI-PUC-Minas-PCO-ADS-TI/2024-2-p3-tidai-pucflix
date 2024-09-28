import styles  from "../assets/css/Cards.module.css";
import iconeEditar  from "../assets/img/iconeEditar.png";
import React, { useState } from "react";
import PopUp from "./PopUp";

function Cards({nome,foto}){
    const [mostrarPopUp, setMostrarPopUp] = useState(false); 

  function clicar() {
    setMostrarPopUp(true); 
  }
    return(
        <div className={styles.perfil}>
            <img className={styles.imagem}  src={foto} alt={nome} 
            onClick={clicar} /> 
            <img className={styles.sobreposta}  src={iconeEditar} alt={nome} onClick={clicar}  />  
            <h3 className={styles.nome}>{nome}</h3> 

            {mostrarPopUp && (
                <PopUp show={mostrarPopUp} onHide={() => setMostrarPopUp(false)} />
            )}  
        </div>
    )
}

export default Cards;