import { useState } from 'react'
import './Register.css'
import cnIMG from '../assets/connection.jpg'

function Register() {

  const[name, setName] = useState("")
  const[address, setAddress] = useState("")
  const[phone, setPhone] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  return(
    <div className='container'>
      <div className='container-register'>
        <div className='wrap-register'>
          <form className='register-form'>
            <span className='register-form-title'>
              <img src={cnIMG} alt="Connection Camboriú" />
            </span>
            <span className='register-form-title'>Cadastre-se</span>

            <div className='wrap-input'>
              <input 
                className={name !== "" ? 'has-val input' : 'input'}
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <span className='focus-input' data-placeholder="Nome Completo"></span>
              <p>{name}</p>  
            </div>  

            <div className='wrap-input'>
              <input 
                className={address !== "" ? 'has-val input' : 'input'}
                type="text" 
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              <span className='focus-input' data-placeholder="Endereço"></span> 
            </div>

            <div className='wrap-input'>
              <input 
                className={phone !== "" ? 'has-val input' : 'input'}
                type="tel" 
                value={phone}
                required maxLength={11}
                minLength={11}
                onChange={e => setPhone(e.target.value)}
              />
              <span className='focus-input' data-placeholder="Celular"></span> 
              <p>{phone}</p> 
            </div>

            <div className='wrap-input'>
              <input 
                className={email !== "" ? 'has-val input' : 'input'} 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className='focus-input' data-placeholder="Email"></span> 
              <p>{email}</p> 
            </div>   

            <div className='wrap-input'>
              <input 
                className={password !== "" ? 'has-val input' : 'input'}
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className='focus-input' data-placeholder="Senha"></span>  
              <p>{password}</p>
            </div> 

            <div className='container-register-form-btn'>
              <button className='login-form-btn'>Confirma</button>
            </div>   
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
