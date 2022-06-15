// Components
import IndexComponent from "../components/layouts/IndexComponent";

// Hooks
import { useState } from "react";
import {Link} from 'react-router-dom'


// Layouts
import logo_form from "../assets/logo_pontotel.svg";


const Register = () => {

  

        const [email, setEmail] = useState("")
        const [name, setName] = useState("")
        const [password, setPassword] = useState("")

        const [cpf, setCpf] = useState("")
        const [pis, setPis] = useState("")

        const [pais, setPais] = useState("")
        const [estado, setEstado] = useState("")
        const [municipio, setMunicipio] = useState("")
        const [cep, setCep] = useState("")
        const [rua, setRua] = useState("")
        const [numero, setNumero] = useState("")
        const [complemento, setComplemento] = useState("")
  
    return (
        <div>
            <IndexComponent>
            <form className="login-form">
  
  <span className="login-form-title">Área de cadastro</span>
  
  <span className="login-form-title-img">
    <img src={logo_form} alt="Login Pontotel" width={250}/>
  </span>

  <div className="wrap-input">
    <input className={name !== "" ? 'permaninput input' : 'input'} type="name" required value={name} onChange={e => setName(e.target.value)}/>
    <span className="focus-input" data-placeholder='Nome'></span>
  </div>
      
  <div className="wrap-input">
    <input className={pais !== "" ? 'permaninput input' : 'input'} type="text" required value={pais} onChange={e => setPais(e.target.value)}/>
    <span className="focus-input" data-placeholder='Pais'></span>
  </div>

  <div className="wrap-input">
    <input className={cep !== "" ? 'permaninput input' : 'input'} type="text" required value={cep} onChange={e => setCep(e.target.value)}/>
    <span className="focus-input" data-placeholder='CEP'></span>
  </div>

  <div className="wrap-input">
    <input className={estado !== "" ? 'permaninput input' : 'input'} type="text" required value={estado} onChange={e => setEstado(e.target.value)}/>
    <span className="focus-input" data-placeholder='Estado'></span>
  </div>

  <div className="wrap-input">
    <input className={municipio !== "" ? 'permaninput input' : 'input'} type="text" required value={municipio} onChange={e => setMunicipio(e.target.value)}/>
    <span className="focus-input" data-placeholder='Municipio'></span>
  </div>

  <div className="wrap-input">
    <input className={rua !== "" ? 'permaninput input' : 'input'} type="text" required value={rua} onChange={e => setRua(e.target.value)}/>
    <span className="focus-input" data-placeholder='Rua'></span>
  </div>

  <div className="wrap-input">
    <input className={numero !== "" ? 'permaninput input' : 'input'} type="text" required value={numero} onChange={e => setNumero(e.target.value)}/>
    <span className="focus-input" data-placeholder='Numero'></span>
  </div>

  <div className="wrap-input">
    <input className={complemento !== "" ? 'permaninput input' : 'input'} type="text" required value={complemento} onChange={e => setComplemento(e.target.value)}/>
    <span className="focus-input" data-placeholder='Complemento' required ></span>
  </div>

  <div className="wrap-input">
    <input className={cpf !== "" ? 'permaninput input' : 'input'} type="number" required value={cpf} onChange={e => setCpf(e.target.value)}/>
    <span className="focus-input" data-placeholder='CPF'></span>
  </div>

  <div className="wrap-input">
    <input className={pis !== "" ? 'permaninput input' : 'input'} type="number" required value={pis} onChange={e => setPis(e.target.value)}/>
    <span className="focus-input" data-placeholder='PIS'></span>
  </div>

  <div className="wrap-input">
    <input className={email !== "" ? 'permaninput input' : 'input'} type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
    <span className="focus-input" data-placeholder='Email'></span>
  </div>

  <div className="wrap-input">
    <input className={password !== "" ? 'permaninput input' : 'input'} type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
    <span className="focus-input" data-placeholder='Senha'></span>
  </div>

  <div className="container-login-form-button">
  <button className="login-form-btn">Cadastrar</button>
  </div>

  <div className="text-register-form-account">
    <span className="text-register">Já possui conta?</span>
    <Link exact to="/" className="text-register-link">Acessar com e-mail e senha!</Link>
  </div>

</form>
            </IndexComponent>
        </div>
    )
}

export default Register;