import styles from '../assets/css/Cadastro/Cadastro.module.css';
import logoGoogle from '../assets/img/LogoGoogle.png';
import logoGit from '../assets/img/LogoGit.png';

function Cadastro() {
    return (
        <div className={styles.cadastro}>
            <div className={styles.containerCadastro}>
                <div className={styles.imagem}></div>
                <div className={styles.formulario}>
                    <h1>Sign Up</h1>
                    <form>
                        <div>
                            <input type="text" id="firstName" name="firstName" placeholder="Name" required />
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder="E-mail Address" required />
                        </div>
                        <div>
                            <input type="password" id="senha" name="senha" placeholder="Password" required />
                        </div>
                        <div>
                            <input type="password" id="confirmSenha" name="confirmSenha" placeholder="Confirm Password" required />
                        </div>
                        <div className={styles.termos}>
                            <input type="checkbox" id="termos" name="termos" required />
                            <label htmlFor="termos">I accept the terms and conditions</label>
                        </div>
                        <button type="submit">Join Us</button>

                        <hr></hr>

                        <div className={styles.buttonWith}>
                            <button style={{ backgroundColor: 'white', color: 'black', alignItems: 'center' }} type="submit">
                                <img style={{ width: '25px' }} src={logoGoogle} alt="Google" />
                                Sign Up With Google
                            </button>
                            <button style={{ alignItems: 'center' }} type="submit">
                                <img src={logoGit} alt="GitHub" />
                                Sign Up With GitHub
                            </button>
                        </div>

                        <p >
                            <strong> Já possui uma conta?</strong>
                            <a href="#" style={{ paddingLeft: '6px', color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}>
                                Entre aqui
                            </a>
                        </p>


                    </form>


                </div>
            </div>
        </div>

    )
}

export default Cadastro;
