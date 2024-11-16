import styles from '../assets/css/login_cadastro/cadastro/Cadastro.module.css';
import logoGoogle from '../assets/img/login_cadastro/LogoGoogle.png';
import Header from '../components/template_alternativo/Header/Header.js';
import "../output.css"
import { registerUser, registerWithGoogle } from "../services/firebase/authFunctions.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import { FaCheck } from "react-icons/fa6";
import YupPassword from 'yup-password';
import { useState } from 'react';
YupPassword(Yup);

var isPasswordStrong = [false, false, false, false]

const validationSchema = Yup.object().shape({ //Schema de validação
    name: Yup.string()
        .required("Campo Obrigatório")
        .test("letter", "Insira um nome válido", (value) => {
            const isValid = /[a-z]/.test(value);
            return isValid;
        }),

    email: Yup.string()
        .email("Digíte um email valido")
        .required("Campo Obrigatório"),

    password: Yup.string()
        .required("")
        .test("min-length", (value) => {
            const isValid = value && value.length >= 8;
            isPasswordStrong[0] = isValid;
            return isValid;
        })
        .test("uppercase", (value) => {
            const isValid = /[A-Z]/.test(value);
            isPasswordStrong[1] = isValid;
            return isValid;
        })
        .test("number", (value) => {
            const isValid = /[0-9]/.test(value);
            isPasswordStrong[3] = isValid;
            return isValid;
        })
        .test("symbol", (value) => {
            const isValid = /[!@#$%^&*(),.?":{}|<>]/.test(value);
            isPasswordStrong[2] = isValid;
            return isValid;
        }),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "A senhas não coincidem")
})


function Cadastro() {

    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
          await registerWithGoogle(); 
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
            <div className={styles.cadastro}>
                <div className={styles.containerCadastro}>
                    <div className={styles.imagem}></div>
                    <div className={styles.formulario}>
                        <h1>Junte-se a nós</h1>

                        <Formik
                            initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
                            onSubmit={async (values, {setSubmitting, resetForm}) => {

                            try{
                                await registerUser(values.email, values.password, values.name)

                                resetForm();

                                navigate("../pucflix/perfil")

                            }catch(err){
                                console.log(err)
                                handleError()
                            }finally{
                                setSubmitting(false)
                            }


                            }}
                            validationSchema={validationSchema} //Schema de validação do Yup
                        >
                            {({ handleSubmit, errors, touched }) => (
                                <Form onSubmit={handleSubmit} className='text-black'>
                                    <div>
                                        <Field type="text" name="name" placeholder="Nome" className={`${touched.name && errors.name ? 'border border-red-500' : ''}`} />
                                        <ErrorMessage name='name' component="div" className={styles.ErrorMessage} />
                                    </div>
                                    <div>
                                        <Field type="email" name="email" placeholder="Endereço de Email" className={`${touched.email && errors.email ? 'border border-red-500' : ''}`} />
                                        <ErrorMessage name='email' component="div" className={styles.ErrorMessage} />
                                    </div>
                                    <div>
                                        <Field type="password" name="password" placeholder="Senha" className={`${touched.password && errors.password ? 'border border-red-500' : ''}`} />
                                    </div>
                                    <div>
                                        <Field type="password" name="confirmPassword" placeholder="Confirmar Senha" className={`${touched.confirmPassword && errors.confirmPassword ? 'border border-red-500' : ''}`} />
                                        <ErrorMessage name='confirmPassword' component="div" className={styles.ErrorMessage} />
                                    </div>
                                    <div className='text-white flex flex-col items-start'>

                                        <p className='flex justify-center items-center gap-2 text-xs sm:text-sm xl:text-base mb-1'>
                                            <span className='shrink-0 text-xs flex justify-center items-center border border-white border-solid w-4 h-4 rounded-full inline-block grow'>
                                                {isPasswordStrong[0] ? (<FaCheck />) : (<span></span>)}
                                            </span>
                                            Precisa conter no mínimo 8 caracteres
                                        </p>
                                        <p className='flex justify-center items-center gap-2 text-xs sm:text-sm xl:text-base mb-1'>
                                            <span className='shrink-0 text-xs flex justify-center items-center border border-white border-solid w-4 h-4 rounded-full inline-block grow'>
                                                {isPasswordStrong[1] ? (<FaCheck />) : (<span></span>)}
                                            </span>
                                            Precisa conter no mínimo 1 letra maiúscula
                                        </p>
                                        <p className='flex justify-center items-center gap-2 text-xs sm:text-sm xl:text-base mb-1'>
                                            <span className='shrink-0 text-xs flex justify-center items-center border border-white border-solid w-4 h-4 rounded-full inline-block grow'>
                                                {isPasswordStrong[2] ? (<FaCheck />) : (<span></span>)}
                                            </span>
                                            Precisa conter no mínimo 1 caracter especial
                                        </p>
                                        <p className='flex justify-center items-center gap-2 text-xs sm:text-sm xl:text-base mb-1'>
                                            <span className='shrink-0 text-xs flex justify-center items-center border border-white border-solid w-4 h-4 rounded-full inline-block grow'>
                                                {isPasswordStrong[3] ? (<FaCheck />) : (<span></span>)}
                                            </span>
                                            Precisa conter no mínimo 1 número
                                        </p>
                                    </div>

                                    <button type='submit'>Junte-se</button>

                                    <div className={styles.errorMessage} style={{display: error ? "flex" : "none"}}>
                                        <p>Email Informado já está em uso</p>
                                    </div>

                                    <hr></hr>

                                    <div className={styles.buttonWith}>
                                            <button onClick={handleGoogleLogin} style={{ backgroundColor: 'white', color: 'black', alignItems: 'center' }} type="submit">
                                                <img className='w-100' src={logoGoogle} alt="Google" />
                                                Cadastrar com Google
                                            </button>

                                    </div>

                                    <p>
                                        <strong className='text-white text-sm sm:text-base xl:text-base'> Já possui uma conta?</strong>
                                        <Link to="../pucflix/login" style={{ paddingLeft: '6px', color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}>
                                            Entre aqui
                                        </Link>
                                    </p>
                                </Form>
                            )}

                        </Formik>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cadastro;
