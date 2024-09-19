function Main(){
    const Main = () => {
        const movies = [
          { id: 1, title: 'Filme 1', poster: 'link_para_imagem_1' },
          { id: 2, title: 'Filme 2', poster: 'link_para_imagem_2' },
          { id: 3, title: 'Filme 3', poster: 'link_para_imagem_3' },
          { id: 4, title: 'Filme 4', poster: 'link_para_imagem_4' },
          { id: 5, title: 'Filme 5', poster: 'link_para_imagem_5' },
          { id: 6, title: 'Filme 6', poster: 'link_para_imagem_6' },
          { id: 7, title: 'Filme 7', poster: 'link_para_imagem_7' },
          { id: 8, title: 'Filme 8', poster: 'link_para_imagem_8' },
          { id: 9, title: 'Filme 9', poster: 'link_para_imagem_9' },
          { id: 10, title: 'Filme 10', poster: 'link_para_imagem_10' },
          { id: 11, title: 'Filme 11', poster: 'link_para_imagem_11' },
          { id: 12, title: 'Filme 12', poster: 'link_para_imagem_12' },
        ];
    return(
        <main>
            <h1>Genero Escolhido</h1>
            <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
        </main>
    )
}
}
export default Main;