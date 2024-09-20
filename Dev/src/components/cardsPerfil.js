function cardsPerfil({nome,foto}){
    return(
        <div>
              <img src={foto} alt={nome} />  
              <h2>{nome}</h2>        
        </div>
    )
}

export default cardsPerfil;