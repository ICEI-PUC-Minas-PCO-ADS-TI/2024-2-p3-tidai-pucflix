import "../assets/css/Login.css"
import logoGoogle from '../assets/img/LogoGoogle.png';
import logoGit from '../assets/img/LogoGit.png';

function Login() {
    return (
        <div>
            <div className='Login'>
                <div className='container'>
                    <div className='formulario'>
                        <h1>Sign In</h1>
                        <form>
    
                            <div>
                                <input type="email" id="email" name="email" placeholder="E-mail Address" required />
                            </div>
                            <div>
                                <input type="password" id="senha" name="senha" placeholder="Password" required />
                            </div>
                           
                            <div className="termos">
                                <input type="checkbox" id="termos" name="termos" required />
                                <label htmlFor="termos">Remember me</label>
                            </div>
                            <button type="submit">Sign In</button>

                            <hr></hr>

                            <div className='buttonWith'>
                                <button style={{ backgroundColor: 'white', color: 'black', alignItems: 'center' }} type="submit">
                                    <img style={{width: '25px'}} src={logoGoogle} alt="Google" />
                                    Sign In With Google
                                </button>
                                <button style={{ alignItems: 'center' }} type="submit">
                                    <img src={logoGit} alt="GitHub" />
                                    Sign In With GitHub
                                </button>
                            </div>

                            <p >
                                <strong> Ainda nao possui uma conta?</strong>
                                <a href="#" style={{ paddingLeft: '6px', color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}>
                                    Cadastre aqui
                                </a>
                            </p>


                        </form>


                    </div>
                    <div className='imagem'></div>
                </div>
            </div>
        </div>
    )
}

export default Login;
