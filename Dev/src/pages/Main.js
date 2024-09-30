function Main(){
  const urls = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
];

  return (
    <div>
            {urls.map((url, index) => (
                <img
                    key={index}
                    src={url}
                    alt={`Imagem ${index}`}
                    onClick={() => onImageClick(url)}
                    style={{ cursor: 'pointer', margin: '10px' }}
                />
            ))}
        </div>
    );  
}
export default Main;