import styles from '../assets/css/login_cadastro/cadastro/Cadastro.module.css';
import logoGoogle from '../assets/img/login_cadastro/LogoGoogle.png';
import logoGit from '../assets/img/login_cadastro/LogoGit.png';
import Header from '../components/template_alternativo/Header/Header.js';
import "../output.css"
import { Link } from "react-router-dom";

function Cadastro() {
    return (
        <div>
            <Header />
            <div className={styles.cadastro}>
                <div className={styles.containerCadastro}>
                    <div className={styles.imagem}></div>
                    <div className={styles.formulario}>
                        <h1>Junte-se a nós</h1>
                        <form>
                            <div>
                                <input type="text" id="firstName" name="Primeiro Nome" placeholder="Nome" required />
                            </div>
                            <div>
                                <input type="email" id="email" name="email" placeholder="Endereço de Email" required />
                            </div>
                            <div>
                                <input type="password" id="senha" name="senha" placeholder="Senha" required />
                            </div>
                            <div>
                                <input type="password" id="confirmSenha" name="confirmSenha" placeholder="Confirmar Senha" required />
                            </div>
                            <div className={styles.termos}>
                                <input type="checkbox" id="termos" name="termos" required />
                                <label htmlFor="termos">Eu aceito os termos e condições</label>
                            </div>

                            <button type="submit"><Link to="../pucflix/perfil">Junte-se</Link></button>

                            <hr></hr>

                            <div className={styles.buttonWith}>
                                <Link to="../pucflix/perfil">
                                    <button style={{ backgroundColor: 'white', color: 'black', alignItems: 'center' }} type="submit">
                                        <img className='w-100' src={logoGoogle} alt="Google" />
                                        Cadastrar com Google
                                    </button>
                                </Link>
                                <Link to="../pucflix/perfil">
                                    <button style={{ alignItems: 'center' }} type="submit">
                                        <img className='w-100' src={logoGit} alt="GitHub" />
                                        Cadastrar com GitHub
                                    </button>
                                </Link>
                            </div>

                            <p >
                                <strong> Já possui uma conta?</strong>
                                <Link to="../pucflix/login" style={{ paddingLeft: '6px', color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}>
                                    Entre aqui
                                </Link>
                            </p>


                        </form>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cadastro;
