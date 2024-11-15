import React from 'react';
import styles from "../assets/css/login_cadastro/login/Login.module.css"
import logoGoogle from '../assets/img/login_cadastro/LogoGoogle.png';
import logoGit from '../assets/img/login_cadastro/LogoGit.png';
import Header from '../components/template_alternativo/Header/Header.js';
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik"
import { get, ref, child } from 'firebase/database';
import { database } from "../services/firebase.ts";
import * as Yup from "yup"

function Login() {
    const navigate = useNavigate();
    const [loginError, setLoginError] = React.useState("");
    const handleLogin = async (values) => {
        
        try {
            const userRef = ref(database, 'users');
            const snapshot = await get(child(userRef, values.email.replace('.', '_'))); 
            if (snapshot.exists()) {
                const userData = snapshot.val();
                if (userData.password === values.password) {
                    console.log('Login bem-sucedido:', userData);
                    setLoginError(""); 
                    navigate('/pucflix/perfil'); 
                } else {
                    setLoginError("Senha incorreta."); 
                }
            } else {
                setLoginError("Usuário não encontrado."); 
            }
        } catch (error) {
            setLoginError("Erro ao realizar login. Tente novamente."); 
            console.error('Erro ao realizar login:', error);
        }
    };

    
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
                                await handleLogin(values) 
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

                                    <button type="submit">Entrar</button>
                                    {loginError && (
                                        <div 
                                            className={styles.errorMessage} 
                                            style={{ display: loginError ? 'block' : 'none' }}>
                                            <p>{loginError}</p>
                                        </div>
                                    )}


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
