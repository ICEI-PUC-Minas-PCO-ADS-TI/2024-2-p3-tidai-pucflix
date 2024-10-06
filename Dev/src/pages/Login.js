import styles from "../assets/css/login_cadastro/login/Login.module.css"
import logoGoogle from '../assets/img/login_cadastro/LogoGoogle.png';
import logoGit from '../assets/img/login_cadastro/LogoGit.png';
import Header from '../components/template_alternativo/Header/Header.js';
import { Link } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik"
import * as Yup from "yup"

function Login() {
    return (
        <div>
            <Header />

            <div className={styles.Login}>
                <div className={styles.containerLogin}>
                    <div className={styles.formulario}>
                        <h1>Entrar</h1>
                        <Formik
                            initialValues={{ email: "", password: "", termos: false }}
                            onSubmit={async values => {
                                await console.log(values) // Aqui a gente faz a validação com o back, para saber se existe o usuario ou o login esta correto
                            }}>

                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="text-black">
                                        <Field type="email" id="email" name="email" placeholder="Endereço de Email" />
                                    </div>
                                    <div className="text-black">
                                        <Field type="password" id="senha" name="password" placeholder="Senha" />
                                    </div>

                                    <div className={styles.termos}>
                                        <Field type="checkbox" id="termos" name="termos" />
                                        <label htmlFor="termos">Lembrar de mim</label>
                                    </div>

                                    <button type="submit"><Link to="../pucflix/perfil">Entrar</Link></button>
                                    <div className={styles.errorMessage}>
                                        <p>Login e/ou Senha Incorreta</p> {/* Quando implantar o back passar o display dessa div para flex, se o login der erro, caso não, é so redirecionar o usuário  */}
                                    </div>

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

                                </Form>
                            )}

                        </Formik>

                    </div>
                    <div className={styles.imagem}></div>
                </div>
            </div >
        </div >
    )
}

export default Login;
