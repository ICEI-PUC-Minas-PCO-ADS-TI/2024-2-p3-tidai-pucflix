function Cards({nome,foto}){
    return(
        <div>
              <img src={foto} alt={nome} />  
              <h3>{nome}</h3>        
        </div>
    )
}

export default Cards;