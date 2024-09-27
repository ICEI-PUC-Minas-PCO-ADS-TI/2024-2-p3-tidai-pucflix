function Main(){
    const Main = () => {
      const movies = [
          { id: 1, title: 'Filme 1', poster: 'https://via.placeholder.com/150' },
          { id: 2, title: 'Filme 2', poster: 'https://via.placeholder.com/150' },
          { id: 3, title: 'Filme 3', poster: 'https://via.placeholder.com/150' },
          { id: 4, title: 'Filme 4', poster: 'https://via.placeholder.com/150' },
          { id: 5, title: 'Filme 5', poster: 'https://via.placeholder.com/150' },
          { id: 6, title: 'Filme 6', poster: 'https://via.placeholder.com/150' },
          { id: 7, title: 'Filme 7', poster: 'https://via.placeholder.com/150' },
          { id: 8, title: 'Filme 8', poster: 'https://via.placeholder.com/150' },
          { id: 9, title: 'Filme 9', poster: 'https://via.placeholder.com/150' },
          { id: 10, title: 'Filme 10', poster: 'https://via.placeholder.com/150' },
          { id: 11, title: 'Filme 11', poster: 'https://via.placeholder.com/150' },
          { id: 12, title: 'Filme 12', poster: 'https://via.placeholder.com/150' },
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