import Cards from "../components/pagina_escolha_perfil/Cards";
import Header from '../components/template_alternativo/Header/Header.js';
import Footer from '../components/template_padrao/Footer/Footer.js';
import styles from "../assets/css/pagina_escolha_perfil/Pag_escolha_perfil.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfilesByUser } from "../services/databaseFunctions.js";
import profilePic from "../assets/img/pagina_gerenciamento_perfil/ProfilePic.png"

function Pag_escolha_perfil() {

    const [profiles, setProfiles] = useState([])

    const UserProfiles = () => { 
        getProfilesByUser((userProfile) => {
            if (userProfile) {
              setProfiles(Object.values(userProfile.Perfil));
            } else {
              console.log("Perfil não encontrado.");
            }
          });
    }

    useEffect(()=>{
        UserProfiles()
    },[])

    return (

        <div className="flex flex-col h-dvh">
            <Header />
            <div className={styles.conteudo}>

                <h1 className={styles.titulo}>Escolha o Perfil</h1>

                <div className={styles.cards}>
                    {profiles.map((profile, index) => (
                        <Link to="/pucflix/principal">
                            <Cards
                                nome={profile.Nome}
                                foto={profilePic}
                                ID={index}
                            />
                        </Link>
                    ))}
                </div>

                <Link to="/pucflix/perfil/edit">
                    <button className={styles.botao}>Gerenciar Perfis</button>
                </Link>

            </div>
            <Footer />

        </div>


    )
}

export default Pag_escolha_perfil;