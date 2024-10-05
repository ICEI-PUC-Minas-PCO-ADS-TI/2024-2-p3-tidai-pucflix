import styles from "../assets/css/login_cadastro/login/Login.module.css"
import logoGoogle from '../assets/img/login_cadastro/LogoGoogle.png';
import logoGit from '../assets/img/login_cadastro/LogoGit.png';
import Header from '../components/template_alternativo/Header/Header.js';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <Header />
            <div className={styles.Login}>
                <div className={styles.containerLogin}>
                    <div className={styles.formulario}>
                        <h1>Entrar</h1>
                        <form>

                            <div>
                                <input type="email" id="email" name="email" placeholder="Endereço de Email" required />
                            </div>
                            <div>
                                <input type="password" id="senha" name="senha" placeholder="Senha" required />
                            </div>

                            <div className={styles.termos}>
                                <input type="checkbox" id="termos" name="termos" required />
                                <label htmlFor="termos">Lembrar de mim</label>
                            </div>

                            <button type="submit"><Link to="../pucflix/perfil">Entrar</Link></button>

                            <hr></hr>

                            <div className={styles.buttonWith}>
                                <Link to="../pucflix/perfil">
                                    <button style={{ backgroundColor: 'white', color: 'black', alignItems: 'center' }} type="submit">
                                        <img className='w-100' src={logoGoogle} alt="Google" />
                                        Logar com Google
                                    </button>
                                </Link>
                                <Link to="../pucflix/perfil">
                                    <button style={{ alignItems: 'center' }} type="submit">
                                        <img className='w-100' src={logoGit} alt="GitHub" />
                                        Logar com GitHub
                                    </button>
                                </Link>
                            </div>
                            <div>
                            <p >
                                <strong> Ainda nao possui uma conta?</strong>
                                <Link to="../pucflix/cadastro" style={{ paddingLeft: '6px', color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}>
                                    Cadastre aqui
                                </Link>
                            </p>
                            </div>


                        </form>


                    </div>
                    <div className={styles.imagem}></div>
                </div>
            </div >
        </div >
    )
}

export default Login;
