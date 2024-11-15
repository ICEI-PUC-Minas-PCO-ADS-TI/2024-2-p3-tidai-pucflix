import styles from "../assets/css/login_cadastro/login/Login.module.css"
import logoGoogle from '../assets/img/login_cadastro/LogoGoogle.png';
import Header from '../components/template_alternativo/Header/Header.js';
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik"
import { loginUser, loginWithGoogle } from "../services/authFunctions.js";
import { useState } from "react";

function Login() {

    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
          await loginWithGoogle(); 
          navigate("../pucflix/perfil");
        } catch (error) {
          console.error("Erro durante o login com Google:", error);

        }
      };

    const handleError = () =>{
        setError(true);
    }

    return (

        <div>
            <Header />

            <div className={styles.Login}>
                <div className={styles.containerLogin}>
                    <div className={styles.formulario}>
                        <h1>Entrar</h1>
                        <Formik
                            initialValues={{ email: "", password: "", termos: false }}
                            onSubmit={async (values, {setSubmitting, resetForm}) => {

                                try{
                                    const user = await loginUser(values.email, values.password)
                                    console.log("Usuario Logado: ", user) //Apagar os Log dps que terminar
                                    //esse user que é o cara que temos que colocar no sessioNStorage para buscar os dados no bd
    
                                    resetForm();
    
                                    navigate("../pucflix/perfil")
    
                                }catch(err){
                                    console.error(err.ErrorMessage)
                                    handleError()

                                }finally{
                                    setSubmitting(false)
                                }
    
    
                                }}
                                >

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
                                    <div className={styles.errorMessage} style={{display: error ? "flex" : "none"}}>
                                        <p>Login e/ou Senha Incorreta</p>
                                    </div>

                                    <hr></hr>

                                    <div className={styles.buttonWith}>

                                            <button onClick={handleGoogleLogin} style={{ backgroundColor: 'white', color: 'black', alignItems: 'center' }} type="submit">
                                                <img className='w-100' src={logoGoogle} alt="Google" />
                                                Logar com Google
                                            </button>


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
