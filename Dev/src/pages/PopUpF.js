function PopUpF(){
    const url = 'https://via.placeholder.com/350'
    return(
        <div>
            <img className="" src={url} alt="..."></img>
            <h1>Nome do Filme</h1>
            <p>Descrição..............................</p>
            <h5>ANO | tempo</h5>
            <button className="botao">Assistir</button>
            <button className="botao">Adicionar aos favoritos</button>
        </div>
    )
}
export default PopUpF;