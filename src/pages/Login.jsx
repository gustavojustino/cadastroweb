// Hooks
import {Link} from 'react-router-dom';
import { useState } from 'react';

// Layouts
import '../styles/styles.css';
import logo_form from '../assets/logo_pontotel.svg';

// Components
import IndexComponent from '../components/layouts/IndexComponent';


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <IndexComponent>
  
              <form className="login-form" method='POST'>
  
                <span className="login-form-title">Olá, visitante!</span>
                
                <span className="login-form-title-img">
                  <img src={logo_form} alt="Login Pontotel" width={250}/>
                </span>
  
                <div className="wrap-input">
                  <input className={email !== "" ? 'permaninput input' : 'input'} type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
                  <span className="focus-input" data-placeholder='Email, CPF ou PIS'></span>
                </div>
  
                <div className="wrap-input">
                  <input className={password !== "" ? 'permaninput input' : 'input'} type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                  <span className="focus-input" data-placeholder='Senha'></span>
                </div>
  
                <div className="container-login-form-button">
                  <button className="login-form-btn" type="Submit">Login</button>
                </div>
                
                <div className="text-register-form-account">
                  <span className="text-register">Não possui uma conta?</span>
                  <Link to="/Register" className="text-register-link">Crie agora!</Link>
                </div>
  
              </form>
  
        </IndexComponent>
    )
}
export default Login;