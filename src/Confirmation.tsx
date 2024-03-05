import { useState } from 'react'
import './Confirmation.css'
import cnIMG from './assets/connection.jpg'

function Confirmation() {

  const[user, setName] = useState("")
  const[dateConfirmation, setPassword] = useState("")

  return(
    <div className='container'>
      <div className='container-login'>
        <div className='wrap-login'>
          <form className='login-form'>
            <span className='login-form-title'>Confirme sua presença!</span>
            <span className='login-form-title'>
              <img src={cnIMG} alt="Connection Camboriú" />
            </span>

            <div className='wrap-input'>
              <input 
                className={user !== "" ? 'has-val input' : 'input'} 
                type="text" 
                value={user}
                onChange={e => setName(e.target.value)}
              />
              <span className='focus-input' data-placeholder="Nome"></span>  
            </div>    
            <div className='check-input'>
              <div className='select-checkbox'>
                <input 
                    className={dateConfirmation !== "" ? 'has-val input' : 'input'}
                    type="checkbox" 
                    value={dateConfirmation}
                    onChange={e => setPassword(e.target.value)}
                />
                <p>Sim confirmo!</p>
              </div>
              <div className='select-checkbox'>
                <input 
                    className={dateConfirmation !== "" ? 'has-val input' : 'input'}
                    type="checkbox" 
                    value={dateConfirmation}
                    onChange={e => setPassword(e.target.value)}
                />
                <p>Não posso ir...</p>
              </div>            
            </div>     

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>   

            <div className='text-center'>
              biblia generator
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
