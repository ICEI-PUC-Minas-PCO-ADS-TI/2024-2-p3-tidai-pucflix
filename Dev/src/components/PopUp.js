import "../output.css"

function MyModal({ show, onHide }) {
  return (
    <div
      className={`text-black ${
        show ? 'block' : 'hidden'
      } fixed inset-0 flex items-center justify-center z-50`}
    >
      <div className="bg-gray-800 bg-opacity-75 absolute inset-0" onClick={onHide}></div>
      <div className="bg-white rounded-lg shadow-lg z-10 max-w-lg mx-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium">Editar Perfil</h2>
          <button className="text-gray-500" onClick={onHide}>
            ✕
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <div className="w-1/2">
              <img
                src="https://via.placeholder.com/200"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/2 pl-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full p-2 border-b border-black border-t border-r border-l rounded-lg"
              />
            </div>
          </div>
          <div className="mb-4">
            <p>Classificação</p>
            <select className=" p-2 border border-black rounded-lg outline-black">
              <option value="1">Adulto</option> 
              <option value="2">Kids</option>
            </select>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-2 gap-2">
          <button className="bg-defaultPurple text-white px-4 py-2 rounded-lg" onClick={onHide}>
            Salvar
          </button>
          <button className="bg-defaultPurple text-white px-4 py-2 rounded-lg" onClick={onHide}>
            Cancelar
          </button>
          <button className="bg-defaultPurple text-white px-4 py-2 rounded-lg" onClick={onHide}>
            Excluir perfil
          </button>
        </div>
      </div>
    </div>
  );
}

function PopUp({ show, onHide }) {
  return <MyModal show={show} onHide={onHide} />;
}

export default PopUp;







