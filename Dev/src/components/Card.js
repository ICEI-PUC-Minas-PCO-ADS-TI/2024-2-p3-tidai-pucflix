import { useState } from 'react';

function Card(props) {
    const [showModal, setShowModal] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const openModal = (event) => {
        const rect = event.target.getBoundingClientRect();
        setModalPosition({
            top: rect.top + window.scrollY,
            left: rect.right + 5
        });
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    return (
        <>
            <div
                className="cursor-pointer transform rounded-xl h-fit w-fit sm:h-full sm:w-full bg-white shadow-xl transition duration-300 hover:scale-105"
                onClick={openModal}
            >
                <div className="flex h-full justify-center items-center">
                    <img className="h-auto max-w-full rounded-lg" src={props.img} alt="perfil"></img>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50">
                    <div
                        className="bg-gray-800 bg-opacity-50 absolute inset-0"
                        onClick={closeModal}
                    ></div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg absolute z-10 max-w-xs"
                        style={{ top: modalPosition.top, left: modalPosition.left }}
                    >
                        <img className="h-auto max-w-full rounded-lg" src={props.img} alt="perfil"></img>
                        <h1 className="mt-4 text-lg font-medium">Titulo do Filme</h1>
                        <p className="mt-2">Breve descrição</p>
                        <p>Informações do Filme</p>
                        <div className="flex flex-row gap-4 mt-4">
                            <button
                                className="bg-defaultPurple text-white px-4 py-2 rounded-lg"
                                onClick={closeModal}
                            >
                                Fechar
                            </button>
                            <button
                                className="bg-defaultPurple text-white px-4 py-2 rounded-lg"
                                onClick={closeModal}
                            >
                                Assistir Filme
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Card;
