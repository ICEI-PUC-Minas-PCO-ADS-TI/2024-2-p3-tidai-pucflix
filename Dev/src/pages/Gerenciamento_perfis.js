import Cards from "../components/pagina_gerenciamento_perfil/Cards";
import styles from '../assets/css/pagina_gerenciamento_perfil/Pag_gerenciamento_perfis.module.css'
import Header from '../components/template_alternativo/Header/Header.js';
import Footer from '../components/template_padrao/Footer/Footer.js';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfilesByUser, addProfile } from "../services/databaseFunctions.js";
import profilePic from "../assets/img/pagina_gerenciamento_perfil/ProfilePic.png"

function Pag_gerenciamento_perfis() {

    const [profiles, setProfiles] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [classificacao, setClassificacao] = useState('standard');
    const [userName, setUserName] = useState('');

    const UserProfiles = () => {
        getProfilesByUser((userProfile) => {
            if (userProfile) {
                setProfiles(Object.values(userProfile.Perfil));
            } else {
                console.log("Perfil não encontrado.");
            }
        });
    }

    useEffect(() => {
        UserProfiles()
    }, [])



    return (
        <div className="flex flex-col h-dvh">
            <Header />
            < div className={styles.conteudo}>

                <h1 className={styles.titulo}>Gerenciar perfis</h1>
                <div className={styles.perfis}>
                    {profiles.map((profiles, index) => (
                        <Cards nome={profiles.Nome}
                            foto={profilePic}
                            ID={index}
                        />
                    ))}
                </div>

                <Link to="/pucflix/perfil">
                    <button className={styles.botao}>Voltar </button>
                </Link>
                <button onClick={() => setShowModal(true)} className={styles.botao}>Adicionar Perfil</button>

            </div>
            <Footer />

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto max-w-3xl">
                            {/*Conteudo*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-defaultBg outline-none focus:outline-none">
                                {/*Header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">

                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            x
                                        </span>
                                    </button>
                                </div>
                                {/*Body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-black text-lg leading-relaxed">
                                        <div className='flex justify-center md:items-start gap-4 flex-wrap'>
                                            <img className={styles.imagem} src={profilePic} alt="profile" />
                                            <div className='flex flex-col gap-5 items-center sm:items-start'>
                                                <div className='flex flex-col items-start'>
                                                    <label className='text-white'>Nome</label>
                                                    <input className='rounded-md py-1 px-2' placeholder='Nome' id="createUserName" 
                                                    value={userName}
                                                    onChange={(e) => setUserName(e.target.value)}></input>
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                    <label for="classificacao" className='text-white'>Classificação</label>
                                                    <select id='classificacao' className='rounded-md py-1 px-2 font-sans' 
                                                    value={classificacao}
                                                    onChange={(e) => setClassificacao(e.target.value)}>
                                                        <option value="kids">KIDS</option>
                                                        <option value="standard">Padrão</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </p>
                                </div>
                                {/*Footer*/}
                                <div className="flex items-center justify-center sm:justify-between p-6 border-t border-solid border-blueGray-200 rounded-b flex-wrap gap-4">
                                    <div className='flex flex-row sm:justify-end justify-center flex-1 gap-5 sm:gap-0'>
                                        <button
                                            className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Fechar
                                        </button>
                                        <button
                                            className="bg-defaultPurple text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => {
                                                setShowModal(false)
                                                addProfile(userName, classificacao === "kids")
                                            }

                                            }
                                        >
                                            Criar Perfil
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </div>

    )
}

export default Pag_gerenciamento_perfis;