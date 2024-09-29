import 'bootstrap/dist/css/bootstrap.min.css';

function PopUp() {
    return (
        <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagem do card" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Assistir</a>
                <a href="#" className="btn btn-primary">Adicionar aos Favoritos</a>
            </div>
        </div>
    );
}

export default PopUp;
