function PopUpF(){
    const url = 'https://via.placeholder.com/150'
    return(
        <div>
            <img class="" src={url} alt="..."></img>
            <h1>Nome do Filme</h1>
            <p>Descrição..............................</p>
            <h6>ANO | tempo</h6>
            <button>Assistir</button>
            <button>Adicionar aos favoritos</button>
        </div>
    )
}
export default PopUpF;