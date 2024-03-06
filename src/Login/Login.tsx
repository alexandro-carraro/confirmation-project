import { useState } from 'react'
import './Login.css'
import cnIMG from '../assets/connection.jpg'
import Bible from '../Bible/Bible'

function Login() {

  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  return(
    <div className='container'>
      <div className='container-login'>
        <div className='wrap-login'>
          <form className='login-form'>
            <span className='login-form-title'>Bem vindo!</span>
            <span className='login-form-title'>
              <img src={cnIMG} alt="Connection Camboriú" />
            </span>

            <div className='wrap-input'>
              <input 
                className={email !== "" ? 'has-val input' : 'input'} 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className='focus-input' data-placeholder="Email"></span>  
            </div>    
            <div className='wrap-input'>
              <input 
                className={password !== "" ? 'has-val input' : 'input'}
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className='focus-input' data-placeholder="Password"></span>  
            </div>     

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>   

            <div className='text-center'>
              <span className='txt1'>Não possui conta?</span>
              <a className='txt2' href="">Criar conta!</a>
            </div>
            <div className='bible-container'>
              <div className='bible-generator'>
                <Bible/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
